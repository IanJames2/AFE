import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const UserContext = createContext()

// This component establishes what data can be used.
export const UserProvider = (props) => {
    const [users, setUsers] = useState([])

    const getUsers = () => {
        return fetch("http://localhost:8088/users?_expand=school")
        .then(res => res.json())
        .then(setUsers)
    }

    /*
        You return a context provider which has the
        `users` state, `getUsers` function,
        and the `addSchool` function as keys. This
        allows any child elements to access them.
    */
    return (
        <UserContext.Provider value={{
            users, getUsers
        }}>
            {props.children}
        </UserContext.Provider>
    )
}
