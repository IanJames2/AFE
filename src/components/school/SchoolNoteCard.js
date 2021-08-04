import React, { useContext } from "react";
import "./SchoolNote.css";
import { SchoolNoteContext } from "./SchoolNoteProvider";

export const SchoolNoteCard = ({ note }) => {
  const { deleteSchoolNote } = useContext(SchoolNoteContext);
  const trashNoteForSchool = () => {
    deleteSchoolNote(note.id);
  };

  return (
    <section className="note">
      <div className="school_major">{note.content}</div>
      <button className="delete_button" onClick={trashNoteForSchool}>
        Delete
      </button>
    </section>
  );
};
