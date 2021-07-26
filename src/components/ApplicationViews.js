import React from "react";
import { Route } from "react-router-dom";
import { SchoolProvider } from "./school/SchoolProvider";

export const ApplicationViews = () => {
  return (
    <>
      <SchoolProvider>
        <Route exact path="/schools">
            
        </Route>
      </SchoolProvider>
    </>
  );
};
