import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const SchoolContext = createContext()

// This component establishes what data can be used.
export const SchoolProvider = (props) => {
    const [schools, setSchools] = useState([])

    const getSchools = () => {
        return fetch("http://localhost:8088/schools?_expand=user")
        .then(res => res.json())
        .then(setSchools)
    }

    const getSchoolById = (id) => {
        return fetch(`http://localhost:8088/schools/${id}?_expand=user&_expand=schoolType`)
        .then(res => res.json()) 
    }

    const addSchool = schoolObj => {
        return fetch("http://localhost:8088/schools", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(schoolObj)
        })
        .then(getSchools)
    }

    const deleteSchool = schoolId => {
        return fetch(`http://localhost:8088/schools/${schoolId}`, {
          method: "DELETE"
        })
          .then(getSchools)
    }

    const updateSchool = (school) => {
        return fetch(`http://localhost:8088/schools/${school.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(school)
        })
          .then(getSchools)
      }

    /*
        You return a context provider which has the
        `schools` state, `getSchools` function,
        and the `addSchool` function as keys. This
        allows any child elements to access them.
    */
    return (
        <SchoolContext.Provider value={{
            schools, getSchools, addSchool, getSchoolById, deleteSchool, updateSchool
        }}>
            {props.children}
        </SchoolContext.Provider>
    )
}
