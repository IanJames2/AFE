import React, { useContext, useState } from "react";
import "./School.css";
// import { SchoolAppliedContext } from "../school/SchoolAppliedProvider";
import { SchoolContext } from "./SchoolProvider";
import { Link, useHistory, useParams } from "react-router-dom";

export const SchoolCard = ({ school }) => {
  const { deleteSchool } = useContext(SchoolContext);
  // const { addAppliedSchool } = useContext(SchoolAppliedContext);
  const history = useHistory();
  const trashSchool = () => {
    deleteSchool(school.id).then(() => {
      history.push("/");
    });
  };

  // const [appliedSchools, setAppliedSchools] = useState({
  //   schoolId: 0,
  //   applied: true,
  // });

  // const { appliedSchoolId } = useParams(); //* Is an object

  // const appliedSchool = { ...appliedSchools };


  //! IDK WHAT I'M DOING HERE.
  // const SubmitHandler = () => {
  //   while (appliedSchool.schoolId === "" || appliedSchool.applied === "") {
  //     while (appliedSchoolId) {
  //       const newAppliedSchool = {
  //         schoolId: parseInt(appliedSchool.schoolId),
  //         applied: true,
  //       };
  //       addAppliedSchool(newAppliedSchool).then(() =>
  //         history.push("/schools/applied")
  //       );
  //     }
  //   }
  // };

  // const Input = appliedSchool.schoolId === "" && appliedSchool.applied === "" 


  // const SubmitHandler = event => {
  //   setAppliedSchools(appliedSchool.concat(<Input key={appliedSchool.length} />))
  // }

  return (
    <section className="school">
      <h3>
        <Link to={`/schools/url/${school.id}`}>{school.institutionName}</Link>
      </h3>
      <div className="school_major">Field of Study: {school.major}</div>
      <div className="school_cost">Annual Tuition: ${school.tuition}</div>
      <button className="delete_button" onClick={trashSchool}>
        Delete This School
      </button>
      <div>
          {/* <button
            className="clickMe"
            onClick={SubmitHandler}
            onClick={() => {
              history.push(`/schools/applied`);
            }}
          >
            Click Here To Move This School To The Applied Section
          </button> */}
      </div>
    </section>
  );
};
