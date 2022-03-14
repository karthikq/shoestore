/** @format */

import React from "react";

const OptionItem = ({ checkExists, selOptions, value }) => {
  return (
    <React.Fragment>
      <button
        type="button"
        className={selOptions.includes(value) ? "label-active" : ""}
        onClick={() => checkExists(value)}>
        {value}
      </button>
    </React.Fragment>
  );
};

export default OptionItem;
