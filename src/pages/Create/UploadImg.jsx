/** @format */

import React, { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";
import Imageupload from "../../hooks/Imageupload";

const UploadImg = ({
  file,
  setUploadedImgState,
  uploadsLength,
  setUrlarray,
  urlarray,
}) => {
  const [pro, setpro] = useState(0);

  // // for (let index = 0; index < file.length; index++) {
  // //   console.log(file[index]);
  // // }

  useEffect(() => {
    Imageupload(file, setUrlarray, setpro);
    return () => {
      setUploadedImgState(false);
      setpro(0);
      setUrlarray("");
    };
  }, [file]);

  return (
    <div className="upload-container">
      <div className="upload-contents">
        <img src={URL.createObjectURL(file)} alt="err" />
        <div className="progress-bar">
          <p style={{ width: pro + "%" }}></p>
        </div>
      </div>
      {pro !== "100.00" && (
        <div className="upload-loader_container">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default UploadImg;
