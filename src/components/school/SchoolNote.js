import React, { useContext, useState, useEffect } from "react";
import { SchoolNoteContext } from "../school/SchoolNoteProvider";
import { useParams } from "react-router-dom";
import "./SchoolNote.css";

export const SchoolNote = ({school}) => {
  const { notes, getSchoolNotes, addSchoolNote, updateSchoolNote, getSchoolNoteById } =
    useContext(SchoolNoteContext);

  const [note, setNote] = useState({
    schoolId: 0,
    content: "",
  });

  const [isLoading, setIsLoading] = useState(false); //? Enables and disables the button

  const { noteId } = useParams(); //* Is an object

  useEffect(() => {
    console.log("Use Effect For Note is working!");
    if (noteId) {
      getSchoolNoteById(noteId).then((note) => {
        setNote(note);
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  }, []);

  console.log(note);

  const ChangeHandler = (e) => {
    const newNote = { ...note };
    newNote[e.target.id] = e.target.value;
    console.log(newNote);
    setNote(newNote);
  };

  const SubmitHandler = () => {
    if (note.content === "") {
      window.alert(
        "Add notes in the textarea to save content for this school."
      );
    } else {
      setIsLoading(true); //? Disables the button - no extra clicks
      if (noteId) {
        //!Put
        const upSchoolNoteObjs = {
          id: noteId,
          schoolId: parseInt(note.schoolId),
          userId: parseInt(localStorage.getItem("afe_user")),
          content: note.content,
        };
        updateSchoolNote(upSchoolNoteObjs).then(() =>
          //? 🤔
          getSchoolNotes()          
        );
      } else {
        //!Add
        const newSchoolNote = {
          schoolId: parseInt(school.id),
          userId: parseInt(localStorage.getItem("afe_user")),
          content: note.content,
        };
        addSchoolNote(newSchoolNote).then(() => getSchoolNotes()          
        );
      }
    }
  };

  return (
    <>
      <h6>Add Notes About This School</h6>

      <form className="notes">
        <textarea
          id="content"
          rows="9"
          cols="70"
          name="comment"
          form="usrform"
          onChange={ChangeHandler}
          defaultValue={note.content}
        >
        </textarea>
        <button
          type="submit"
          fill="solid"
          disabled={isLoading}
          onClick={(note) => {
            note.preventDefault();
            SubmitHandler();
          }}
        >
          Save
        </button>
      </form>
    </>
  );
};
