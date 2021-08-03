import React, { useContext, useEffect } from "react";
import "./SchoolNote.css";
import { SchoolNoteContext } from "../school/SchoolNoteProvider";
import { SchoolNote } from "./SchoolNote";


export const SchoolNoteList = ({ school }) => {
  const { notes, getSchoolNotes } = useContext(SchoolNoteContext);

  useEffect(() => {
    console.log(
      "SchoolNoteList: UseEffect is being called properly in the browser"
    );
    getSchoolNotes();
  }, []);

  return (

    <>
    {notes.find(
        (note) => note.userId === parseInt(localStorage.getItem("afe_user"))
            ) ? ( ""
            ) : (
            "Enter text here..."
            )}
        <div className="notes" id="noteListMapping">
        {/* {notes.map((note) => {
          if (note.userId === parseInt(localStorage.getItem("afe_user"))) {
            return <SchoolNote school={school}></SchoolNote>;
          }
        })} */}
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
