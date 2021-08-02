import React, { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { SchoolAppliedContext } from "./SchoolAppliedProvider";

export const SchoolAppliedCard = ({ school, appliedSchool }) => {
  const { appliedSchools, getAppliedSchools, deleteAppliedSchool } = useContext(SchoolAppliedContext);
  const history = useHistory();

  const DeleteHandler = () => {
      getAppliedSchools().then(
      deleteAppliedSchool(appliedSchool.id)).then(() => {
      history.push("/schools/applied");
    });
  };

  return (
    <>
    <section className="school">
      <h3>
        <Link to={`/schools/url/${school.id}`}>{school.school.institutionName}</Link>
      </h3>
      {/* <Link to="/register">Not a member yet?</Link> */}
      <div className="school__logo">
        <a href={school.school.websiteURL}>
          <img
            src={school.school.logo}
            alt="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fatlantic-speed.com%2Fimages%2FF198648690.jpg&f=1&nofb=1"
            width="150px"
            height="150px"
          />
        </a>
      </div>
      <div className="school_enrollment">
        Enrollment Status: 
          {appliedSchools.find(
            (school) => (school.userId) === school.school.enrollment_status === false
            ) ? (
              " Not enrolled"
            ) : (
              "Enrolled."
          )}
      </div>
      <button className="clickMe" onClick={DeleteHandler}>
        Click Here To Move This School To Your School Draft List
      </button>
    </section>
    </>
  );
};
