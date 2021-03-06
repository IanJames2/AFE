import React, { useContext, useEffect } from "react";
import "./School.css";
import { SchoolAppliedContext } from "../school/SchoolAppliedProvider";

import { SchoolAppliedCard } from "./SchoolAppliedCard";

export const SchoolAppliedList = () => {
  const { appliedSchools, getAppliedSchools } = useContext(SchoolAppliedContext);

  useEffect(() => {
      console.log("AppliedSchoolList: UseEffect is being called properly in the browser");
    getAppliedSchools();
    }, []);


  return (
    <>
      {/* <h2>List of Schools {school.user.name} Has Applied For</h2> */}
      {appliedSchools.find(
        (school) => school.userId === parseInt(localStorage.getItem("afe_user"))
      ) ? (
        ""
        ) : (
        <p>Once you have applied to a school, you can add that school to your applied schools list.</p>
      )}
      <div className="schools" id="schoolListMapping">
        {appliedSchools.map((school) => {
          if (school.userId === parseInt(localStorage.getItem("afe_user"))) {
            return <SchoolAppliedCard key={school.id} school={school} />;
          }
        })}
      </div>
    </>
  );
};
