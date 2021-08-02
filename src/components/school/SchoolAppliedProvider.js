import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const SchoolAppliedContext = createContext()

// This component establishes what data can be used.
export const SchoolAppliedProvider = (props) => {
    const [appliedSchools, setAppliedSchools] = useState([])

    const getAppliedSchools = () => {
        return fetch("http://localhost:8088/appliedSchools?_expand=school")
        .then(res => res.json())
        .then(setAppliedSchools)
    }

    const getAppliedSchoolById = (id) => {
        return fetch(`http://localhost:8088/appliedSchools/${id}?_expand=user&_expand=school`)
        .then(res => res.json()) 
    }

    const addAppliedSchool = appliedSchoolObj => {
        return fetch("http://localhost:8088/appliedSchools", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(appliedSchoolObj)
        })
        .then(getAppliedSchools)
    }

    const deleteAppliedSchool = appliedSchoolId => {
        return fetch(`http://localhost:8088/appliedSchools/${appliedSchoolId}`, {
          method: "DELETE"
        })
          .then(getAppliedSchools)
    }

    const updateAppliedSchool = (appliedSchool) => {
        return fetch(`http://localhost:8088/appliedSchools/${appliedSchool.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(appliedSchool)
        })
          .then(getAppliedSchools)
      }

    /*
        You return a context provider which has the
        `appliedSchools` state, `getAppliedSchools` function,
        and the `addAppliedSchool` function as keys. This
        allows any child elements to access them.
    */
    return (
        <SchoolAppliedContext.Provider value={{
            appliedSchools, getAppliedSchools, getAppliedSchoolById,addAppliedSchool, deleteAppliedSchool, updateAppliedSchool
        }}>
            {props.children}
        </SchoolAppliedContext.Provider>
    )
}
