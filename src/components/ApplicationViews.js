import React from "react";
import { Route } from "react-router-dom";
import { SchoolList } from "./school/SchoolList";
import { SchoolForm } from "./school/SchoolForm";
import { SchoolProvider } from "./school/SchoolProvider";

export const ApplicationViews = () => {
  return (
    <>
      <SchoolProvider>
        <Route exact path="/home">
          <SchoolList></SchoolList>
        </Route>
        <Route path="/add_a_school">
            <SchoolForm></SchoolForm>
        </Route>
      </SchoolProvider>
    </>
  );
};
