import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { SchoolContext } from "./SchoolProvider";
import { Link } from "react-router-dom";


export const SchoolAppliedCard = ({ school }) => {
    const { schools, getSchools } = useContext(SchoolContext);

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
        <Link to={`/schools/url/${school.id}`}>{school.institutionName}</Link>
      </h3>
      {/* <Link to="/register">Not a member yet?</Link> */}
      <div className="school__logo">
        <a href={school.websiteURL}>
          <img
            src={school.logo}
            alt="images/AFE.png"
            width="150px"
            height="150px"
          ></img>
        </a>
      </div>
      <div className="school_enrollment">
        Enrollment Status: ${school.enrollment_status}
      </div>
      {/* <div className="school__timestamp">{school.timestamp }</div>      */}
      <button className="delete_button" onClick={trashSchool}>
        Delete This School
      </button>
      <button
        className="clickMe"
        onClick={() => {
          history.push(`/`);
        }}
      >
        Click Here To Move This School To Your School Draft List
      </button>
    </section>
  );
};
