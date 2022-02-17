import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import SiteLayout from "../components/SiteLayout/SiteLayout";
import Backdrop from "../components/UI/Backdrop";
import { AuthContext } from "../Contexts/AuthContext";

function login() {
    console.log("rendering login");
  return (
    <AuthContext.Consumer>
      {(value) => {
        return (
          <SiteLayout>
            <LoginForm />
          </SiteLayout>
        );
      }}
    </AuthContext.Consumer>
  );
}

export default login;
