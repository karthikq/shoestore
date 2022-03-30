/** @format */

import React, { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";
import Imageupload from "../../hooks/Imageupload";
import imageCompression from "browser-image-compression";

const UploadImg = ({ file, setUploadedImgState, setUrlarray }) => {
  const [pro, setpro] = useState(0);

  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 720,
    useWebWorker: true,
  };

  // // for (let index = 0; index < file.length; index++) {
  // //   console.log(file[index]);
  // // }

  useEffect(() => {
    handleImageUpload();
    return () => {
      setUploadedImgState(false);
    };
  }, [file]);

  async function handleImageUpload() {
    const compressedFile = await imageCompression(file, options);
    Imageupload(compressedFile, setUrlarray, setpro);
  }
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
