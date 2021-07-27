import React from "react";
import { Route, Redirect } from "react-router-dom";
import { SchoolList } from "./school/SchoolList";
import { SchoolForm } from "./school/SchoolForm";
import { SchoolProvider } from "./school/SchoolProvider";
import { Logout } from "./Logout";

export const ApplicationViews = () => {
  return (
    <>
      <Redirect to="/home" />

      <SchoolProvider>
        <Route exact path="/home">
          <Logout></Logout>
          <SchoolList></SchoolList>
        </Route>
        <Route path="/add_a_school">
          <Logout></Logout>
          <SchoolForm></SchoolForm>
        </Route>
      </SchoolProvider>
    </>
  );
};
