/** @format */

import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRotue = ({ component: Component, ...rest }) => {
  const authState = useSelector((state) => state.User.auth);
  const navigate = useNavigate();
  if (!authState) {
    return navigate("/");
  }
  return <Component {...rest} />;
};

export default ProtectedRotue;
