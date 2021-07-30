import React, { useContext } from "react";
import "./School.css";
import { SchoolContext } from "./SchoolProvider";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

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
        {/* <Link to="/register">Not a member yet?</Link> */}
      <div className="school_major">Field of Study: {school.major}</div>
      <div className="school_cost">Annual Tuition: ${school.tuition}</div>
      {/* <div className="school__timestamp">{school.timestamp }</div>      */}
      <button className="delete_button" onClick={trashSchool}>Delete This School</button>
      <button className="clickMe" onClick={() => {history.push(`/schools/url/${school.id}`);}}>
          See more info on this school
        </button>
    </section>
  );
};
