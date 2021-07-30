import React from "react";
import { Route } from "react-router-dom";
import { SchoolList } from "./school/SchoolList";
import { SchoolForm } from "./school/SchoolForm";
import { SchoolDetail } from "./school/SchoolDetail";
import { SchoolProvider } from "./school/SchoolProvider";
import { SchoolTypeProvider } from "./school/SchoolTypeProvider";
import { Logout } from "./Logout";
import { HomeButton } from "./HomeButton";
import { IfSchoolListIsBlank } from "./school/IfSchoolListIsBlank";

export const ApplicationViews = () => {
  return (
    <>
      <SchoolTypeProvider>
        <SchoolProvider>
          <Route exact path="/">
            <Logout></Logout>
            <SchoolList></SchoolList>
            <IfSchoolListIsBlank></IfSchoolListIsBlank>
          </Route>
          <Route path="/add_a_school">
            <Logout></Logout>
            <HomeButton></HomeButton>
            <SchoolForm></SchoolForm>
          </Route>
          <Route path="/schools/url/:schoolId(\d+)">
            <Logout></Logout>
            <HomeButton></HomeButton>
            <SchoolDetail></SchoolDetail>
          </Route>
          <Route path="/schools/layout/:schoolId(\d+)">
            <Logout></Logout>
            <HomeButton></HomeButton>
            <SchoolForm></SchoolForm>
          </Route>
        </SchoolProvider>
      </SchoolTypeProvider>
    </>
  );
};
