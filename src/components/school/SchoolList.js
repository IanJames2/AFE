import React, { useContext, useEffect } from "react";
import { SchoolContext } from "./SchoolProvider";
import { SchoolCard } from "./SchoolCard";
import { useHistory } from 'react-router-dom';
import "./School.css";

export const SchoolList = () => {
    const { schools, getSchools,  } = useContext(SchoolContext)

    const history = useHistory()

    useEffect(() => {
        console.log("SchoolList: UseEffect is being called properly in the browser")
        getSchools()
    }, [])
    
    return (
  <>
        <h2>List of Schools</h2>
        <button
          className="clickMe"
          onClick={() => {
            history.push("/add_a_school");
          }}
        >
          Add A School
        </button>
        {schools.find(school => school.userId === parseInt(localStorage.getItem("afe_user"))) ? "" : <p>Please add a school.</p>}
        <div className="schools" id="schoolListMapping">   
          {schools.map((school) => {
              if(school.userId === parseInt(localStorage.getItem("afe_user"))) {
            return (<SchoolCard key={school.id} school={school} />
              );
          } 
        }) 
      }
        </div>
  </>
    );
  }
  