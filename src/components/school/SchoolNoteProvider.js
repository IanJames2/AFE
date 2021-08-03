import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const SchoolNoteContext = createContext()

// This component establishes what data can be used.
export const SchoolNoteProvider = (props) => {
    const [notes, setNotes] = useState([])

    const getNotes = () => {
        return fetch("http://localhost:8088/notes?_expand=school")
        .then(res => res.json())
        .then(setNotes)
    }

    const getSchoolNoteById = (id) => {
        return fetch(`http://localhost:8088/notes/${id}?_expand=school&_expand=user`)
        .then(res => res.json()) 
    }

    const addSchoolNote = schoolNoteObj => {
        return fetch("http://localhost:8088/notes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(schoolNoteObj)
        })
        .then(getNotes)
    }

    const deleteSchoolNote = noteId => {
        return fetch(`http://localhost:8088/schools/${noteId}`, {
          method: "DELETE"
        })
          .then(getNotes)
    }

    const updateSchoolNote = (note) => {
        return fetch(`http://localhost:8088/notes/${note.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(note)
        })
          .then(getNotes)
      }

    /*
        You return a context provider which has the
        `schools` state, `getSchools` function,
        and the `addSchool` function as keys. This
        allows any child elements to access them.
    */
    return (
        <SchoolNoteContext.Provider value={{
            notes, getNotes, addSchoolNote, getSchoolNoteById, deleteSchoolNote, updateSchoolNote
        }}>
            {props.children}
        </SchoolNoteContext.Provider>
    )
}
