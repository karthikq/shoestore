/** @format */

import React, { useEffect, useRef, useState } from "react";

import "./login.styles.scss";

import { backendUrl } from "../../components/api/Backendurl";

import AuthForm from "./AuthForm";
const Login = ({ state, setState }) => {
  // useEffect(() => {
  //   if (loginRef.current) {
  //     loginRef.current.addEventListener("click", (e) => {
  //       if (!e.target) return;
  //       if (e.target.contains(loginRef2.current)) {
  //         return setState(false);
  //         // window.history.pushState({}, "home", "/");
  //       }
  //     });
  //   }
  // }, [setState, state]);
  const handleLogin = (data) => {
    console.log(data);
  };

  return (
    <React.Fragment>
      <AuthForm
        loginState={true}
        handleAuth={handleLogin}
        values={{
          header: "Log into your Account",
          span: "Don't have an Account?",
          path: "/user/register",
          text: "Sign Up",
          name: "Log In",
        }}
      />
    </React.Fragment>
  );
};

export default Login;
