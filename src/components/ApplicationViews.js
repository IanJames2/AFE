import React from "react";
import { Route } from "react-router-dom";
import { SchoolList } from "./school/SchoolList";
import { SchoolForm } from "./school/SchoolForm";
import { SchoolDetail } from "./school/SchoolDetail";
import { SchoolProvider } from "./school/SchoolProvider";
import { SchoolTypeProvider } from "./school/SchoolTypeProvider";
import { HomeButton } from "./HomeButton";

export const ApplicationViews = () => {
  <Route>
    render={() => {
      if (localStorage.getItem("afe_user")) {
        return (
        window.location.reload()
        )
      }
    }
  }
  </Route>
  return (
    <>
      <SchoolTypeProvider>
        <SchoolProvider>
          <Route exact path="/">
            <SchoolList></SchoolList>
          </Route>
          <Route path="/add_a_school">
            <HomeButton></HomeButton>
            <SchoolForm></SchoolForm>
          </Route>
          <Route path="/schools/url/:schoolId(\d+)">
            <HomeButton></HomeButton>
            <SchoolDetail></SchoolDetail>
          </Route>
          <Route path="/schools/layout/:schoolId(\d+)">
            <HomeButton></HomeButton>
            <SchoolForm></SchoolForm>
          </Route>
        </SchoolProvider>
      </SchoolTypeProvider>
    </>
  );
};
