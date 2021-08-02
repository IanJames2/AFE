import React, { useContext, useEffect } from "react";
import { SchoolContext } from "./SchoolProvider";
import { SchoolCard } from "./SchoolCard";
import { useHistory } from "react-router-dom";
import "./School.css";

export const SchoolList = () => {
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
      <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search School Here"
          aria-label="Search"
        ></input>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Find A School
        </button>
      </form>
      <p>  </p>

      <h2>List of Schools For Consideration</h2>

      <button
        className="clickMe"
        onClick={() => {
          history.push("/add_a_school");
        }}
      >
        Add A School
      </button>

      {schools.find(
        (school) => school.userId === parseInt(localStorage.getItem("afe_user"))
      ) ? (
        ""
      ) : (
        <p>Please add a school.</p>
      )}
      <div className="schools" id="schoolListMapping">
        {schools.map((school) => {
          if (school.userId === parseInt(localStorage.getItem("afe_user"))) {
            return <SchoolCard key={school.id} school={school} />;
          }
        })}
      </div>
    </>
  );
};
