/** @format */

import React, { useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import toast, { Toaster } from "react-hot-toast";
import "./createp.styles.scss";

import { motion } from "framer-motion";

import ImageSlider from "../../components/ImageSlider";
import Imageupload from "../../hooks/Imageupload";
import UploadImg from "./UploadImg";

const Createproduct = () => {
  const [uploadedImg, setUploadedImg] = useState("");
  const [uploadedImgState, setUploadedImgState] = useState(false);

  const [uploads, setUploads] = useState([]);
  const [uploadedUrl, setUploadedUrl] = useState("");

  const images = [];
  const [userData, setUserData] = useState({
    p_name: "",
    p_img: [],
    p_desp: "",
  });

  const handleUploadedImg = (e) => {
    setUploadedImg("");

    const file = e.target.files;

    if (file.length > 3) {
      return toast.error("You can select only Three images");
    } else {
      for (let index = 0; index < file.length; index++) {
        const url = URL.createObjectURL(file[index]);
        setUploadedImg((preValue) => [...preValue, url]);
      }
      setUploads((preValue) => [...file]);
    }
  };

  const cb = (url) => {
    images.push(url);

    if (uploads.length === images.length) {
      toast.dismiss();
      toast.success("Data saved");
      const element = document.querySelector(".animate-bar");
      element.style.left = `${-100}%`;
      element.innerHTML = "";
      console.log(userData);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setUploadedImgState(true);
    // const sliderdiv = document.querySelector(".animate-bar");

    // if (!uploadedImg) {
    //   return toast.error("Imagefile is required");
    // }
    // toast.loading("Saving data");

    // sliderdiv.style.left = `${0}%`;

    // const innerDiv = `<div class="innerdiv-loader">
    // <p>Uploading all Images please wait...</p>
    // <span class="percentage-up"></span>
    // <div class="loader">Loading...</div>
    // </div>`;
    // sliderdiv.innerHTML = innerDiv;

    // const perValue = document.querySelector(".percentage-up");

    // setTimeout(() => {
    //   sliderdiv.style.left = `${-100}%`;
    // }, 5000);
  };
  console.log(uploads);
  // function loop() {
  //   // return uploads.forEach((item) => {
  //   //   return <UploadImg file={item} />;
  //   // });
  //   for (let index = 0; index < uploads.length; index++) {
  //     return <UploadImg file={uploads[index]} />;
  //   }
  // }
  return (
    <motion.div className="create-p_container">
      <div className="create-p_contents">
        <h3>Upload your product</h3>
        {uploadedImgState && <UploadImg file={uploads} />}
        <motion.form
          noValidate
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{
            duration: 0.5,
            ease: "linear",
            layout: { ease: "anticipate" },
          }}
          onSubmit={onSubmit}
          className="create-p_form">
          <motion.div layout className="create-p_form-contents">
            <label htmlFor="upload_img">Select Image</label>
            {!uploadedImg && (
              <span className="create-p_span">
                You can select upto 3 images
              </span>
            )}
            <input
              type="file"
              multiple
              accept=".jpeg, .png, .jpg"
              id="upload_img"
              className="upload_img"
              onChange={handleUploadedImg}
            />
            {uploadedImg && (
              <div
                className={
                  uploadedImg
                    ? "create-p_uploaded-img create-p_uploaded-img-active"
                    : "create-p_uploaded-img"
                }>
                <ImageSlider
                  imagesArray={uploadedImg}
                  imgClass="uploaded-img"
                />
              </div>
            )}
            <input
              type="text"
              required
              minLength={5}
              name="p_name"
              placeholder="product name"
              value={userData.p_name}
              onChange={(e) =>
                setUserData({ ...userData, p_name: e.target.value })
              }
            />
            <textarea
              name="p_desp"
              cols="30"
              rows="5"
              onChange={(e) =>
                setUserData({ ...userData, p_desp: e.target.value })
              }
              placeholder="description(optional)"></textarea>
          </motion.div>
          <button type="submit" className="create-p_btn">
            <BiRightArrowAlt className="create-p_icon" />
          </button>
        </motion.form>
      </div>
      <Toaster />
    </motion.div>
  );
};

export default Createproduct;
