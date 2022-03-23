/** @format */

import React, { useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import toast, { Toaster } from "react-hot-toast";
import "./createp.styles.scss";

const Createproduct = () => {
  const [uploadedImg, setUploadedImg] = useState("");
  const [userData, setUserData] = useState({
    p_name: "",
    p_img: "",
    p_desp: "",
  });

  // const [uploadedState, setUploadedState] = useState(false);

  const handleUploadedImg = (e) => {
    const file = e.target.files[0];
    console.log(e.target.files);
    // const url = URL.createObjectURL(file);
    // setUploadedImg(url);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (!uploadedImg) {
      return toast.error("Image is required");
    }
  };

  return (
    <div className="create-p_container">
      <div className="create-p_contents">
        <h3>Upload Product</h3>
        <form className="create-p_form">
          <div className="create-p_form-contents">
            <input
              type="text"
              placeholder="Name"
              required
              onChange={(e) =>
                setUserData({ ...userData, p_name: e.target.value })
              }
            />
            <label htmlFor="upload_img">Select Image</label>
            <input
              type="file"
              multiple
              accept=".jpeg, .png, .jpg"
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
              onChange={(e) =>
                setUserData({ ...userData, p_desp: e.target.value })
              }
              placeholder="description(optional)"></textarea>
          </div>
          <button className="create-p_btn" onClick={onSubmit}>
            <BiRightArrowAlt className="create-p_icon" />
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default Createproduct;
