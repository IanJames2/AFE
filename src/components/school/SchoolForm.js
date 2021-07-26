import React, { useContext, useState, useEffect } from "react"
import { SchoolContext } from "../school/SchoolProvider"
import "./School.css"
import { useHistory, useParams } from 'react-router-dom';

//TODO:SchoolType needs a dropdown. Circle back to this!
export const SchoolForm = () => {
  const { addSchool, updateSchool, getSchoolById } = useContext(SchoolContext)
  const [school, setSchool] = useState({
    schoolTypeId: 0,
    logo: "",
    institutionName: "",
    major: "",
    tuition: 0,
    websiteURL: ""
  });

  const [isLoading, setIsLoading] = useState(false); //? Enables and disables the button

  const {schoolId} = useParams(); //* Is an object

  const history = useHistory();

  useEffect(() => {
    {
      if (schoolId){
        getSchoolById(schoolId)
        .then(school => {
            setSchool(school)
            setIsLoading(false)
        })
      } else {
        setIsLoading(false)
      }
    }
  }, []) 
  
  console.log(school)



  const ChangeHandler = (e) => {
    const newSchool = { ...school }
    newSchool[e.target.id] = e.target.value
    console.log(newSchool)
    setSchool(newSchool)
  }
  
  const SubmitHandler = () => {
    if (school.schoolTypeId === ""
    || school.logo === "" 
    || school.institutionName === "" 
    || school.major === "" 
    || school.tuition === ""
    || school.websiteURL === "") {
      window.alert("Please make sure every field has a value. This is for your own good!")
    } else {
      setIsLoading(true); //? Disables the button - no extra clicks
      if (schoolId) {
        //! PUT
        const upSchoolObjs = {
          id: schoolId,
        //   userId: localStorage.setItem("afe_user", schoolId.afe_user),
          userId: localStorage.setItem("afe_user", school.afe_user),
        //   userId: parseInt(localStorage.setItem("afe_user")),
          schoolTypeId: 1,
          logo: school.logo,
          institutionName: school.institutionName,
          major: school.major,
          tuition: school.tuition,
          websiteURL: school.websiteURL,
          enrollment_status: false
        }
        updateSchool(upSchoolObjs)
        .then(() => history.push(`/schools/layout/${schoolId}`))
      } else {
        const newSchool = {
            userId: localStorage.setItem("afe_user"),
            schoolTypeId: 1,
            logo: school.logo,
            institutionName: school.institutionName,
            major: school.major,
            tuition: school.tuition,
            websiteURL: school.websiteURL,
            enrollment_status: false
          }
        //! ADD
        addSchool(newSchool)
          .then(() => history.push("/home"))
          }
        }
      }
    return (
      <form className="schoolForm">
        <h2 className="schoolForm__title">{schoolId ? "Edit The School" : "Add A School" }</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="name">School Type:</label>
            <input type="text" id="schoolTypeId" required autoFocus className="form-control" 
            placeholder="Enter School Type" 
            onChange={ChangeHandler} 
            defaultValue={school.schoolTypeId}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="name">School Logo:</label>
            <input type="text" id="logo" required autoFocus className="form-control" 
            placeholder="Enter School Logo Url Here" 
            onChange={ChangeHandler} 
            defaultValue={school.logo}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="name">School Name:</label>
            <input type="text" id="institutionName" required autoFocus className="form-control" 
            placeholder="Enter School Name:" 
            onChange={ChangeHandler} 
            defaultValue={school.institutionName}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="name">School Major:</label>
            <input type="text" id="major" required autoFocus className="form-control" 
            placeholder="Enter School Major" 
            onChange={ChangeHandler} 
            defaultValue={school.major}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="name">School Tuition:</label>
            <input type="text" id="tuition" required autoFocus className="form-control" 
            placeholder="Enter School Tuition" 
            onChange={ChangeHandler} 
            defaultValue={school.tuition}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="name">School Website Link:</label>
            <input type="text" id="websiteURL" required autoFocus className="form-control" 
            placeholder="Enter School Website Link" 
            onChange={ChangeHandler} 
            defaultValue={school.websiteURL}/>
          </div>
        </fieldset>
        <button className="btn btn-primary" 
        disabled={isLoading} //?What is this? Look it up later
        onClick={school => {
          school.preventDefault() 
          SubmitHandler()
          }}>
        {schoolId ? "Update The School" : "Add A School" }
            </button>
      </form>
    )
  }

  /*
- 2
- https://www.mtsu.edu/_resources/root_images/mt-logo-mtsu.svg
- Middle Tennessee State University
- Computer Science
- 1,567
- https://www.mtsu.edu/
  */