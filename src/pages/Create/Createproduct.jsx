/** @format */

import React, { useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import toast, { Toaster } from "react-hot-toast";
import "./createp.styles.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCards } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Createproduct = () => {
  const [uploadedImg, setUploadedImg] = useState("");
  const [userData, setUserData] = useState({
    p_name: "",
    p_img: "",
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
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!uploadedImg) {
      return toast.error("Imagefile is required");
    }
  };

  return (
    <motion.div className="create-p_container">
      <div className="create-p_contents">
        <h3>Upload your product</h3>
        <motion.form layout className="create-p_form">
          <motion.div className="create-p_form-contents">
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
                <Swiper
                  effect={"cards"}
                  navigation={true}
                  modules={[Navigation, EffectCards]}
                  className="mySwiper">
                  {uploadedImg.length >= 2 &&
                    uploadedImg.map((item) => (
                      <SwiperSlide>
                        <img src={item} alt="error" className="uploaded-img" />
                      </SwiperSlide>
                    ))}
                </Swiper>{" "}
                <Swiper className="mySwiper">
                  {uploadedImg.length <= 1 &&
                    uploadedImg.map((item) => (
                      <SwiperSlide>
                        <img src={item} alt="error" className="uploaded-img" />
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            )}
            <input
              type="text"
              placeholder="Product name"
              required
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
