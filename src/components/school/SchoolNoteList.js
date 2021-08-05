import React, { useContext, useEffect, useState } from "react";
import "./SchoolNote.css";
import { SchoolNoteContext } from "../school/SchoolNoteProvider";
import { SchoolNoteCard } from "../school/SchoolNoteCard"
import { useParams } from "react-router-dom";



export const SchoolNoteList = ({ school }) => {
  const { notes, getNotes } = useContext(SchoolNoteContext);
  const [filteredNotes, setFilteredNotes] = useState([
  ]);



  useEffect(() => {
    console.log(
      "SchoolNoteList: UseEffect is being called properly in the browser"
    );
    getNotes().then(() => {
      const TAholdingmyhand = notes.filter(
        (note) => {
          return note.schoolId === school.id
        }
          )
          setFilteredNotes(TAholdingmyhand)  
    })
  }, []);

  return (
    <>
    {filteredNotes.map(
        (note) => note.userId === parseInt(localStorage.getItem("afe_user"))
            ) ? ( ""
            ) : (
            "Enter text here..."
            )}
        <div className="notes" id="noteListMapping">
        {filteredNotes.map((note) => {
          if (note.userId === parseInt(localStorage.getItem("afe_user"))) {
            window.location.reload();

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
