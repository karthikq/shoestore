/** @format */

import React from "react";
import "./btn.styles.scss";

const Button = ({ state, name }) => {
  return (
    <React.Fragment>
      <span className="loading-span">
        {state && <div className="btn-loading-div"></div>} {name}
      </span>
    </React.Fragment>
  );
};

export default Button;
