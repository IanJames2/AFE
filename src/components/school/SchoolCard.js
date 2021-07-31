import React, { useContext } from "react";
import "./School.css";
import { SchoolContext } from "./SchoolProvider";
import { Link, useHistory } from "react-router-dom";

export const SchoolCard = ({ school }) => {
  const { deleteSchool } = useContext(SchoolContext);
  const history = useHistory();
  const trashSchool = () => {
    deleteSchool(school.id).then(() => {
      history.push("/");
    });
  };

  return (
    <section className="school">
        <h3>
          <Link to={`/schools/url/${school.id}`}>
            {school.institutionName}
          </Link>
        </h3>
      <div className="school_major">Field of Study: {school.major}</div>
      <div className="school_cost">Annual Tuition: ${school.tuition}</div>
      <button className="delete_button" onClick={trashSchool}>Delete This School</button>
      <div>
      <button className="clickMe" onClick={() => {history.push(`/schools/applied`);}}>
          Click Here To Move This School To The Applied Section
        </button>
      </div>
    </section>
  );
};
