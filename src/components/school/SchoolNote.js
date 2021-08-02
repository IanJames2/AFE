import React from "react";
import "./SchoolNote.css";

export const SchoolNote = () => {
    
  return (
    <>
    <h6>Add Notes About This School</h6>

    <form className="notes" /*onSubmit={}*/>            
    <textarea id="notetaking"rows="9" cols="70" name="comment" form="usrform">  
Enter text here...</textarea>  
        <button type="submit" fill="solid">Save</button>
    
    </form>


    </>
  );
};
