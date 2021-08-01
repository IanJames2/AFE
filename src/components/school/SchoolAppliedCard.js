import React, { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { SchoolAppliedContext } from "./SchoolAppliedProvider";

export const SchoolAppliedCard = ({ school, appliedSchool }) => {
  const { deleteAppliedSchool } = useContext(SchoolAppliedContext);
  const history = useHistory();

  //! School and appliedSchools is undefined in this module!!! 😩😩😩😩😩

  //!Cannot read id of undefined!!!!! 😩😩😩😩😩
  const DeleteHandler = () => {
    deleteAppliedSchool(appliedSchool.id).then(() => {
      history.push("/schools/applied");
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
            alt="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fatlantic-speed.com%2Fimages%2FF198648690.jpg&f=1&nofb=1"
            width="150px"
            height="150px"
          ></img>
        </a>
      </div>
      <div className="school_enrollment">
        Enrollment Status: {school.enrollment_status}
      </div>
      <button
        className="clickMe"
        onClick={DeleteHandler}>
        Click Here To Move This School To Your School Draft List
      </button>
    </section>
  );
};
