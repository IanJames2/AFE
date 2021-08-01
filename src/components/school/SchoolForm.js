import React, { useContext, useState, useEffect } from "react";
import { SchoolContext } from "../school/SchoolProvider";
import { SchoolTypeContext } from "../school/SchoolTypeProvider";
import "./School.css";
import { useHistory, useParams } from "react-router-dom";

export const SchoolForm = () => {
  const { addSchool, updateSchool, getSchoolById } = useContext(SchoolContext);
  const { schoolTypes, getSchoolTypes } = useContext(SchoolTypeContext);



  const [school, setSchool] = useState({
    schoolTypeId: 0,
    logo: "",
    institutionName: "",
    major: "",
    tuition: 0,
    websiteURL: "",
  });

  const [isLoading, setIsLoading] = useState(false); //? Enables and disables the button

  const { schoolId } = useParams(); //* Is an object

  const history = useHistory();

  useEffect(() => {
    console.log("USE EFFECT!!!!!!!!!!!!!!!!")
    getSchoolTypes()
    {
      if (schoolId) {
        getSchoolById(schoolId).then((school) => {
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
      if (schoolId) {
        //! PUT
        const upSchoolObjs = {
          id: schoolId,
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
          history.push(`/schools/url/${schoolId}`)
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
        addSchool(newSchool).then(() => history.push("/"));
      }
    }
  };
  return (
    <form className="schoolForm">
      <h2 className="schoolForm__title">
        {schoolId ? "Edit The School" : "Add A School"}
      </h2>
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
            {schoolTypes.map((sch) => (
              <option key={sch.id} value={sch.id}>
                {sch.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label className="label_header_for_logo"htmlFor="name">School Logo:</label>
          <input
            type="text"
            id="logo"
            required
            autoFocus
            className="form-control"
            placeholder="Enter School Logo Url Here"
            onChange={ChangeHandler}
            defaultValue={school.logo}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label className="label_header_for_name" htmlFor="name">School Name:</label>
          <input
            type="text"
            id="institutionName"
            required
            autoFocus
            className="form-control"
            placeholder="Enter School Name:"
            onChange={ChangeHandler}
            defaultValue={school.institutionName}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label className="label_header_for_subject" htmlFor="name">School Major:</label>
          <input
            type="text"
            id="major"
            required
            autoFocus
            className="form-control"
            placeholder="Enter School Major"
            onChange={ChangeHandler}
            defaultValue={school.major}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label className="label_header_for_cost" htmlFor="name">School Tuition Per Semester:</label>
          <input
            type="text"
            id="tuition"
            required
            autoFocus
            className="form-control"
            placeholder="Enter School Tuition"
            onChange={ChangeHandler}
            defaultValue={school.tuition}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label className="label_header_for_link" htmlFor="name">School Website Link:</label>
          <input
            type="text"
            id="websiteURL"
            required
            autoFocus
            className="form-control"
            placeholder="Enter School Website Link"
            onChange={ChangeHandler}
            defaultValue={school.websiteURL}
          />
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
        {schoolId ? "Update The School" : "Add A School"}
      </button>
    </form>
  );
};


