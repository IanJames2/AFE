import React, { useContext, useEffect, useState } from "react";
import { SchoolContext } from "./SchoolProvider";
import "./School.css";
import { useParams, useHistory } from "react-router-dom";

export const SchoolDetail = () => {
  const { getSchoolById, deleteSchool } = useContext(SchoolContext);

  const [school, setSchool] = useState({
    schoolType: {},
  });

  const { schoolId } = useParams();
  const history = useHistory();

  const deleteSchoolInvoked = () => {
    deleteSchool(school.id).then(() => {
      history.push("/");
    });
  };
  
  useEffect(() => {
    console.log("useEffect", schoolId);
    getSchoolById(schoolId).then((response) => {
      setSchool(response);
    });
  }, []);
  //TODO: Add checkbox for enrollment

  return (
    <section className="school">
      <h3 className="school__schoolName">{school.institutionName}</h3>
      <div className="school__logo">
        <a href={school.websiteURL}><img  src={school.logo} alt="logo" width="150px" height="150px"></img></a>      
      </div>
      <div className="school__schoolTypeId">
        School Type: {school.schoolType.name}
      </div>
      <div className="school__major">Field of Study: {school.major}</div>
      <div className="school__tuition">
        Annual Cost of School: ${school.tuition}
      </div>
      <div className="school__creator">Inquired by: {school.user?.name}</div>
      <button className="delete_button" onClick={deleteSchoolInvoked}>
        Delete School
      </button>
      <button
        className="clickMe"
        onClick={() => {
          history.push(`/schools/layout/${school.id}`);
        }}
      >
        Edit
      </button>
    </section>
  );
};
