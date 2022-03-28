/** @format */

import React from "react";
import Imageupload from "../../hooks/Imageupload";

const UploadImg = async ({ file }) => {
  Imageupload(file);

  return <div></div>;
};

export default UploadImg;
