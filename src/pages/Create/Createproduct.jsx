/** @format */

import React, { useState } from "react";
import "./createp.styles.scss";

const Createproduct = () => {
  const [uploadedImg, setUploadedImg] = useState("");
  return (
    <div className="create-p_container">
      <div className="create-p_contents">
        <h3>Upload Product</h3>
        <div className="create-p_form">
          <input type="text" placeholder="Name" />
          <label htmlFor="upload_img">Select Image</label>
          <input type="file" id="upload_img" className="upload_img" />
          <img src="" alt="error" className="uploaded-img" />
          <textarea name="p_desp" cols="30" rows="8"></textarea>
        </div>
      </div>
    </div>
  );
};

export default Createproduct;
