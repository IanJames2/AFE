import React from "react";
import { Route } from "react-router-dom";
import { SchoolList } from "./school/SchoolList";
import { SchoolProvider } from "./school/SchoolProvider";

export const ApplicationViews = () => {
  return (
    <>
      <SchoolProvider>
        <Route exact path="/home">
          <SchoolList></SchoolList>
        </Route>
      </SchoolProvider>
    </>
  );
};
