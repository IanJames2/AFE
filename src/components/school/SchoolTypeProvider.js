import React, { useState, createContext } from "react"

export const SchoolTypeContext = createContext()

export const SchoolTypeProvider = (props) => {
    const [schoolTypes, setSchoolTypes] = useState([])

    const getSchoolTypes = () => {
        return fetch("http://localhost:8088/schoolTypes")
        .then(res => res.json())
        .then(setSchoolTypes)
    }
    
    return (
        <SchoolTypeContext.Provider value={{
            schoolTypes, getSchoolTypes
        }}>
            {props.children}
        </SchoolTypeContext.Provider>
    )
}