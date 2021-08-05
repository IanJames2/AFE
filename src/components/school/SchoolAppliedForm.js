import React, { useContext, useState, useEffect } from "react";
import { SchoolAppliedContext } from "../school/SchoolProvider";
import "./School.css";
import { useHistory, useParams } from "react-router-dom";

//TODO: Must Finish
export const SchoolAppliedForm = () => {
  const { appliedSchools, addAppliedSchool, getAppliedSchools } =
    useContext(SchoolAppliedContext);

  const [school, setSchool] = useState({
    schoolId: 0,
    applied: true,
  });

  const [isLoading, setIsLoading] = useState(false); //? Enables and disables the button

  const { schoolAppliedId } = useParams(); //* Is an object

  const history = useHistory();

  useEffect(() => {
    console.log("USE EFFECT!!!!!!!!!!!!!!!!");
    getAppliedSchools();
    {
      if (schoolAppliedId) {
        getSchoolById(schoolAppliedId).then((school) => {
          setSchool(school);
          setIsLoading(false);
        });
      } else {
        setIsLoading(false);
      }
    }
  }, []);

  console.log(school);

  const ChangeHandler = (e) => {
    const newSchool = { ...school };
    newSchool[e.target.id] = e.target.value;
    console.log(newSchool);
    setSchool(newSchool);
  };

  const SubmitHandler = () => {
    if (
      school.schoolTypeId === "" ||
      school.logo === "" ||
      school.institutionName === "" ||
      school.major === "" ||
      school.tuition === "" ||
      school.websiteURL === ""
    ) {
      window.alert(
        "Please make sure every field has a value. This is for your own good!"
      );
    } else {
      setIsLoading(true); //? Disables the button - no extra clicks
      if (schoolAppliedId) {
        //! PUT
        const upSchoolObjs = {
          id: schoolAppliedId,
          userId: parseInt(localStorage.getItem("afe_user")),
          schoolTypeId: parseInt(school.schoolTypeId),
          logo: school.logo,
          institutionName: school.institutionName,
          major: school.major,
          tuition: school.tuition,
          websiteURL: school.websiteURL,
          enrollment_status: false,
        };
        updateSchool(upSchoolObjs).then(() =>
          history.push(`/schools/url/${schoolAppliedId}`)
        );
      } else {
        const newSchool = {
          userId: parseInt(localStorage.getItem("afe_user")),
          schoolTypeId: parseInt(school.schoolTypeId),
          logo: school.logo,
          institutionName: school.institutionName,
          major: school.major,
          tuition: parseInt(school.tuition),
          websiteURL: school.websiteURL,
          enrollment_status: false,
        };
        //! ADD
        addAppliedSchool(newSchool).then(() => history.push("/"));
      }
    }
  };
  return (
    <form className="schoolForm">
      <fieldset>
        <div className="form-group">
          <select
            name="schoolType"
            id="schoolTypeId"
            className="form-control"
            value={school.schoolTypeId}
            onChange={ChangeHandler}
          >
            <option value="0">Select The Type of School Below</option>
            {appliedSchools.map((sch) => (
              <option key={sch.id} value={sch.id}>
                {sch.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>

      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={(school) => {
          school.preventDefault();
          SubmitHandler();
        }}
      >
        Add This School To Your Applied List
      </button>
    </form>
  );
};
