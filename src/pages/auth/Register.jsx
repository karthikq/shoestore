/** @format */

import React from "react";
import AuthForm from "./AuthForm";

const Register = () => {
  const handleRegister = (data) => {
    console.log(data);
  };
  return (
    <React.Fragment>
      <AuthForm
        loginState={false}
        handleAuth={handleRegister}
        values={{
          header: "Create new account",
          span: "Already have an Account?",
          path: "/user/login",
          text: "Log In",
          name: "Create Account",
        }}
      />
    </React.Fragment>
  );
};

export default Register;
