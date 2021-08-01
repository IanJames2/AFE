import React from "react";
import { Route } from "react-router-dom";
import { SchoolList } from "./school/SchoolList";
import { SchoolForm } from "./school/SchoolForm";
import { SchoolDetail } from "./school/SchoolDetail";
import { SchoolProvider } from "./school/SchoolProvider";
import { UserProvider } from "./userprovider/UserProvider";
import { SchoolTypeProvider } from "./school/SchoolTypeProvider";
import { HomeButton } from "./HomeButton";
import { SchoolAppliedList } from "./school/SchoolAppliedList";
import { SchoolAppliedProvider } from "./school/SchoolAppliedProvider";

export const ApplicationViews = () => {
  <Route>
    render=
    {() => {
      if (localStorage.getItem("afe_user")) {
        return window.location.reload();
      }
    }}
  </Route>;
  return (
    <>
      <SchoolAppliedProvider>
        <UserProvider>
          <SchoolTypeProvider>
            <SchoolProvider>
              <Route exact path="/">
                <SchoolList></SchoolList>
              </Route>
              <Route path="/add_a_school">
                <SchoolForm></SchoolForm>
              </Route>
              <Route path="/schools/url/:schoolId(\d+)">
                <SchoolDetail></SchoolDetail>
              </Route>
              <Route path="/schools/layout/:schoolId(\d+)">
                <SchoolForm></SchoolForm>
              </Route>
              <Route path="/schools/applied">
                <SchoolAppliedList></SchoolAppliedList>
              </Route>
            </SchoolProvider>
          </SchoolTypeProvider>
        </UserProvider>
      </SchoolAppliedProvider>
    </>
  );
};
