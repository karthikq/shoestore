/** @format */

import React from "react";
import ReactDOM from "react-dom";
import Selproduct from "../selProduct/Selproduct";

const Model = (props) => {
  return ReactDOM.createPortal(
    <Selproduct />,
    document.getElementById("model")
  );
};

export default Model;
