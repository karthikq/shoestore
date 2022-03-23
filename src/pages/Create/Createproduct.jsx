/** @format */

import React, { useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import "./createp.styles.scss";

const Createproduct = () => {
  const [uploadedImg, setUploadedImg] = useState("");

  const handleUploadedImg = (e) => {
    setUploadedImg("");
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setUploadedImg(url);
  };
  const onSubmit = (e) => {
    e.preventDefult();
  };

  return (
    <div className="create-p_container">
      <div className="create-p_contents">
        <h3>Upload Product</h3>
        <form className="create-p_form">
          <div className="create-p_form-contents">
            <input type="text" placeholder="Name" />
            <label htmlFor="upload_img">Select Image</label>
            <input
              type="file"
              id="upload_img"
              className="upload_img"
              onChange={handleUploadedImg}
            />
            {uploadedImg && (
              <div className="create-p_uploaded-img">
                <img src={uploadedImg} alt="error" className="uploaded-img" />
              </div>
            )}
            <textarea
              name="p_desp"
              cols="30"
              rows="8"
              placeholder="description(optional)"></textarea>
          </div>
          <button className="create-p_btn" onClick={onSubmit}>
            <BiRightArrowAlt className="create-p_icon" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Createproduct;
