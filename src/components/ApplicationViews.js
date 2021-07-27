import React from "react";
import { Route, Redirect } from "react-router-dom";
import { SchoolList } from "./school/SchoolList";
import { SchoolForm } from "./school/SchoolForm";
import { SchoolDetail } from "./school/SchoolDetail";
import { SchoolProvider } from "./school/SchoolProvider";
import { Logout } from "./Logout";

export const ApplicationViews = () => {
  return (
    <>

      <SchoolProvider>
        <Route exact path="/home">
          <Logout></Logout>
          <SchoolList></SchoolList>
        </Route>
        <Route path="/add_a_school">
          <Logout></Logout>
          <SchoolForm></SchoolForm>
        </Route>
        <Route path="/schools/url/:schoolId(\d+)">
          <Logout></Logout>
          <SchoolDetail></SchoolDetail>
        </Route>
        <Route path="/schools/layout/:schoolId(\d+)">
          <Logout></Logout>
          <SchoolForm></SchoolForm>
        </Route>
      </SchoolProvider>
    </>
  );
};
