import React, { useContext } from "react";
import "./School.css";
import { SchoolContext } from "./SchoolProvider";
import { useHistory } from "react-router-dom";

export const SchoolCard = ({ school }) => {
  const { deleteSchool } = useContext(SchoolContext);
  const history = useHistory();
  const trashSchool = () => {
    deleteSchool(school.id).then(() => {
      history.push("/home");
    });
  };

  return (
    <section className="school">
      <h3 className="schools">
        <a href={school.websiteURL}>{school.institutionName}</a>
      </h3>
      <div className="school_major">Field of Study: {school.major}</div>
      <div>Annual Tuition: ${school.tuition}</div>
      {/* <div className="school__timestamp">{school.timestamp }</div>      */}
      <button onClick={trashSchool}>Delete This School</button>
      <button className="clickMe" onClick={() => {history.push(`/schools/url/${school.id}`);}}>
          See more info on this school
        </button>
    </section>
  );
};
