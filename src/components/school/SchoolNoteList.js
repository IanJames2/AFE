import React, { useContext, useEffect, useState } from "react";
import "./SchoolNote.css";
import { SchoolNoteContext } from "../school/SchoolNoteProvider";
import { SchoolNoteCard } from "../school/SchoolNoteCard"
import { SchoolDetail } from "./SchoolDetail";
import { SchoolNoteForm } from "./SchoolNoteForm";


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
          console.log("NOTES LIST USE EFFECT ", note.content)
          if (note.schoolId === note.school.id){
            return note.content
          }
        }
          )
          setFilteredNotes(TAholdingmyhand)  
    })
  }, []);

  return (
    <>
    {/* <SchoolDetail school={school}></SchoolDetail>
    <SchoolNoteForm school={school}></SchoolNoteForm> */}






        {filteredNotes.map(
        (note) => note.userId === parseInt(localStorage.getItem("afe_user"))
            ) ? ( ""
            ) : (
            "Enter text here..."
            )}
        <div className="notes" id="noteListMapping">
        {filteredNotes.map((note) => {
          if (note.userId === parseInt(localStorage.getItem("afe_user"))) {
            return <SchoolNoteCard key={note.id} note={note} />;
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
