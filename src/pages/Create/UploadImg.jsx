/** @format */

import React from "react";
import Imageupload from "../../hooks/Imageupload";

const UploadImg = async ({ file }) => {
  const [urls] = await Imageupload(file);
  console.log(urls);
  return <div></div>;
};

export default UploadImg;
