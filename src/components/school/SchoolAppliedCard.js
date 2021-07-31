import React, { useContext, useState } from "react";
import { useHistory, Link, useParams } from "react-router-dom";
import { SchoolAppliedContext } from "../school/SchoolAppliedProvider";


export const SchoolAppliedCard = ({ school }) => {
  const { addAppliedSchool } = useContext(SchoolAppliedContext);
  const { deleteSchool } = useContext(SchoolAppliedContext);
  const history = useHistory();
  const trashSchool = () => {
    deleteSchool(school.id).then(() => {
      history.push("/");
    });
  };

  const [appliedSchools ] = useState({
    schoolId: 0,
    applied: true
  });

  const { appliedSchoolId } = useParams(); //* Is an object

  const appliedSchool = { ...appliedSchools };

  const DeleteHandler = () => {
  if (
    appliedSchool.schoolId === "" ||
    appliedSchool.applied === "" 
    ) {
      if (appliedSchoolId) { 
        //! ADD
      const newAppliedSchool = {
        schoolId: parseInt(appliedSchool.schoolId),
        applied: true
      }
      addAppliedSchool(newAppliedSchool).then(() => history.push("/schools/applied"));
      }
  }
}


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
        Enrollment Status: {school.enrollment_status}
      </div>
      {/* <div className="school__timestamp">{school.timestamp }</div>      */}
      <button className="delete_button" onClick={trashSchool}>
        Delete This School
      </button>
      <button
        className="clickMe"
        onClick={() => {
          DeleteHandler();
          history.push(`/`);
        }}
      >
        Click Here To Move This School To Your School Draft List
      </button>
    </section>
  );
};
