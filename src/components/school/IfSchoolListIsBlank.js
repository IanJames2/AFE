import React, { useContext, useEffect } from "react";
import { SchoolContext } from "./SchoolProvider";
import "./School.css";


export const IfSchoolListIsBlank = () => {
    const {schools, getSchools  } = useContext(SchoolContext)

    let schoolarray = useEffect(() => {
        getSchools()
      }, [])

    const ifBlank = () => {
        if(schoolarray === []) {
          return(<> <p>Testing. Please add a School</p> </>
          )
        }
    }

    ifBlank()

    return IfSchoolListIsBlank
    }