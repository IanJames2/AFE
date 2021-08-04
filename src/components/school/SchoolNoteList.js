import React, { useContext, useEffect } from "react";
import "./SchoolNote.css";
import { SchoolNoteContext } from "../school/SchoolNoteProvider";
import { SchoolNoteCard } from "../school/SchoolNoteCard"


export const SchoolNoteList = ({ school }) => {
  const { notes, getNotes } = useContext(SchoolNoteContext);

  useEffect(() => {
    console.log(
      "SchoolNoteList: UseEffect is being called properly in the browser"
    );
    getNotes();
  }, []);

  return (
    <>
    {notes.map(
        (note) => note.userId === parseInt(localStorage.getItem("afe_user"))
            ) ? ( ""
            ) : (
            "Enter text here..."
            )}
        <div className="notes" id="noteListMapping">
        {notes.map((note) => {
          if (note.userId === parseInt(localStorage.getItem("afe_user"))) {
            return <SchoolNoteCard key={note.id} note={note}></SchoolNoteCard>;
          }
        })}
        </div>
    </>
    )
};

/*
notes.find(
            (note) => note.userId === parseInt(localStorage.getItem("afe_user"))
          ) ? ( note.content
          ) : (
            "Enter text here..."
          )
*/
