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

    /*
        You return a context provider which has the
        `appliedSchools` state, `getAppliedSchools` function,
        and the `addAppliedSchool` function as keys. This
        allows any child elements to access them.
    */
    return (
        <SchoolAppliedContext.Provider value={{
            appliedSchools, getAppliedSchools, addAppliedSchool, deleteAppliedSchool
        }}>
            {props.children}
        </SchoolAppliedContext.Provider>
    )
}
