import React, { useContext, useEffect } from "react";
import "./School.css";
import { SchoolAppliedContext } from "../school/SchoolAppliedProvider";
import { SchoolAppliedCard } from "./SchoolAppliedCard";


export const SchoolAppliedList = () => {
  const { appliedSchools, getAppliedSchools } = useContext(SchoolAppliedContext);


  useEffect(() => {
    console.log(
      "SchoolList: UseEffect is being called properly in the browser"
    );
    getAppliedSchools();
  }, []);

  return (
    <>
            {/* <h2>List of Schools {schools.user.name} Has Applied For</h2> */}

      {appliedSchools.find(
        (school) => school.userId === parseInt(localStorage.getItem("afe_user"))
      ) ? (
        ""
        ) : (
        <p>Apply to at least one school to have a chance of getting your degree</p>
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
