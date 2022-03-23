/** @format */

import React, { useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import toast, { Toaster } from "react-hot-toast";
import "./createp.styles.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
const Createproduct = () => {
  const [uploadedImg, setUploadedImg] = useState("");
  const [userData, setUserData] = useState({
    p_name: "",
    p_img: "",
    p_desp: "",
  });

  const [uploadedState, setUploadedState] = useState(false);

  const handleUploadedImg = (e) => {
    setUploadedImg("");

    const file = e.target.files;
    for (let index = 0; index < file.length; index++) {
      const url = URL.createObjectURL(file[index]);
      setUploadedImg((preValue) => [...preValue, url]);
    }
    // const data = [];
    // data.push(...file);
    // console.log(data);
    // if (file.length > 3) {
    //   return toast.error("You can select only Three images");
    // } else {
    //   const newUrl = data.map((i, index) => {
    //     return URL.createObjectURL(file);
    //   });
    //   console.log(newUrl);
    // }

    // const url = URL.createObjectURL(file);
    // setUploadedImg(url);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!uploadedImg) {
      return toast.error("Image is required");
    }
  };
  console.log(uploadedImg);
  return (
    <motion.div className="create-p_container">
      <div className="create-p_contents">
        <h3>Upload Product</h3>
        <motion.form className="create-p_form">
          <motion.div className="create-p_form-contents">
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
            />{" "}
            {uploadedImg && (
              <div className="create-p_uploaded-img">
                <Carousel>
                  {uploadedImg.length >= 2 &&
                    uploadedImg.map((item) => (
                      <div>
                        <img src={item} alt="error" className="uploaded-img" />
                      </div>
                    ))}
                </Carousel>{" "}
                <Carousel>
                  {uploadedImg.length <= 1 &&
                    uploadedImg.map((item) => (
                      <div>
                        <img src={item} alt="error" className="uploaded-img" />
                      </div>
                    ))}
                </Carousel>
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
          </motion.div>
          <button className="create-p_btn" onClick={onSubmit}>
            <BiRightArrowAlt className="create-p_icon" />
          </button>
        </motion.form>
      </div>
      <Toaster />
    </motion.div>
  );
};

export default Createproduct;
