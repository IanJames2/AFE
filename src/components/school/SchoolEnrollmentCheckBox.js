import React, { useContext, useState, useEffect } from "react";
import { SchoolContext } from "./SchoolProvider";
import {SchoolAppliedContext} from "./SchoolAppliedProvider";
import "./School.css";
import { useHistory, useParams } from "react-router-dom";
import { SchoolList } from "./SchoolList";

export const SchoolEnrollmentCheckBox = () => {
    const { updateSchool, getSchoolById } = useContext(SchoolContext);
    const history = useHistory();
    const { schoolId } = useParams(); //* Is an object
    const [isLoading, setIsLoading] = useState(false); //? Enables and disables the button

    const [school, setSchool] = useState({
        enrollment_status: false
      });
    
      useEffect(() => {
        console.log("USE EFFECT!!!!!!!!!!!!!!!!")
        if (schoolId) {
        getSchoolById(schoolId).then((school) => {
          setSchool(school);
          setIsLoading(false);
        });
      } else {
        setIsLoading(false);
      }
    }, []);

      const ChangeHandler = (e) => {
        const newSchool = { ...school };
        newSchool[e.target.id] = e.target.value;
        console.log(newSchool);
        return setSchool(newSchool);
          };

          const SubmitHandler = (e) => {
            if (
              school.enrollment_status === false
            ) {
              window.alert(
                "To change the status of your enrollment, please click the checkbox."
              );            
            } else {
                setIsLoading(true); //? Disables the button - no extra clicks

                //!School ID Is Not Defined 😩😩😩😩😩
                
                if (schoolId) {
                  //* PUT
                  const upSchoolObjs = {
                    id: schoolId,
                    // userId: parseInt(localStorage.getItem("afe_user")),
                    // schoolTypeId: parseInt(school.schoolTypeId),
                    // logo: school.logo,
                    // institutionName: school.institutionName,
                    // major: school.major,
                    // tuition: school.tuition,
                    // websiteURL: school.websiteURL,
                    enrollment_status: true,
                  };
                  updateSchool(upSchoolObjs).then(() =>
                  history.push(`/schools/url/${schoolId}`)).then(() =>
                  history.push(`/schools/applied`)
                  );
                }
              }
            }

    return(
    <form>
        <input type="checkbox" id="enrollment_status" onChange={ChangeHandler} />
            <label> Change The Status Of Your Enrollment If You Are Enrolled At This School </label>
            <button
            className="btn btn-primary"
            disabled={isLoading} 
            onClick={(school) => {
            school.preventDefault();
            SubmitHandler();
            }}
            >Submit</button>
    </form>
    )
  }


