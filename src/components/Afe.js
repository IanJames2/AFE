import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { Logout } from "./Logout";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { Logo } from "./Logo";
import { NavBar } from "./nav/NavBar";
import "./Afe.css";

export const Afe = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("afe_user")) {
          return (
            <>
              <NavBar></NavBar>
              <Logout />
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);
