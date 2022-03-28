/** @format */

import React, { useEffect } from "react";
import Imageupload from "../../hooks/Imageupload";

const UploadImg = ({ file }) => {
  const [url, setUrl] = React.useState("");
  // for (let index = 0; index < file.length; index++) {
  //   console.log(file[index]);
  // }

  useEffect(() => {
    Imageupload(file, setUrl);
  }, [file]);
  console.log(url);
  return (
    <div>
      <h2>Uploading</h2>
    </div>
  );
};

export default UploadImg;
