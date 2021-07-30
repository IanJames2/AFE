import React, { useContext, useEffect } from "react";
import "./School.css";
import { SchoolContext } from "./SchoolProvider";
import { useHistory } from "react-router-dom";
import { SchoolAppliedCard } from "./SchoolAppliedCard";


export const SchoolApplied = () => {
  const { schools, getSchools } = useContext(SchoolContext);

  const history = useHistory();

  useEffect(() => {
    console.log(
      "SchoolList: UseEffect is being called properly in the browser"
    );
    getSchools();
  }, []);

  return (
    <>
            <h2>List of Schools {schools.user.name} Has Applied For</h2>

      {schools.find(
        (school) => school.userId === parseInt(localStorage.getItem("afe_user"))
      ) ? (
        ""
        ) : (
        <p>Apply to at least one school to have a chance of getting your degree</p>
      )}
      <div className="schools" id="schoolListMapping">
        {schools.map((school) => {
          if (school.userId === parseInt(localStorage.getItem("afe_user"))) {
            return <SchoolAppliedCard key={school.id} school={school} />;
          }
        })}
      </div>
    </>
  );
};
