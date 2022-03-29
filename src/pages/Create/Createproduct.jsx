/** @format */

import React, { useEffect, useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import toast, { Toaster } from "react-hot-toast";
import { connect } from "react-redux";
import "./createp.styles.scss";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ImageSlider from "../../components/ImageSlider";
import validator from "validator";
import UploadImg from "./UploadImg";
import { createProduct } from "../../components/actions";

const Createproduct = ({ createProduct }) => {
  const navigate = useNavigate();

  const [uploadedImg, setUploadedImg] = useState("");
  const [uploadedImgState, setUploadedImgState] = useState(false);

  const [uploads, setUploads] = useState([]);
  const [uploadedUrl, setUploadedUrl] = useState("");
  const [urlarray, setUrlarray] = useState("");

  const images = [];

  const [userData, setUserData] = useState({
    p_name: "",
    p_img: [],
    p_desp: "",
    p_price: "",
    p_category: "",
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

  const onSubmit = async (e) => {
    e.preventDefault();
    setUploadedImgState(true);
    // const sliderdiv = document.querySelector(".animate-bar");

    if (!uploadedImg) {
      return toast.error("Imagefile is required");
    }

    toast.loading("Saving data");

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

  useEffect(() => {
    if (urlarray.length > 0 && urlarray.length === uploads.length) {
      toast.dismiss();

      setUserData({ ...userData, p_img: urlarray });

      createProduct(userData, urlarray, navigate);
      toast.success("data saved");
    }
  }, [urlarray]);

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
        <h3>
          {uploadedImgState ? "Uploading please wait" : "Upload your product"}
        </h3>
        {uploadedImgState ? (
          <div style={{ marginTop: "2rem" }}>
            {uploads.map((item) => (
              <>
                <UploadImg
                  file={item}
                  setUrlarray={setUrlarray}
                  urlarray={urlarray}
                  uploadsLength={uploads.length}
                  setUploadedImgState={setUploadedImgState}
                />
              </>
            ))}
          </div>
        ) : (
          <motion.form
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
              />{" "}
              <input
                type="number"
                required
                name="p_price"
                placeholder="price(Rs)"
                value={userData.p_price}
                onChange={(e) =>
                  setUserData({ ...userData, p_price: e.target.value })
                }
              />
              <input
                type="text"
                required
                name="p_category"
                placeholder="category"
                value={userData.p_category}
                onChange={(e) =>
                  setUserData({ ...userData, p_category: e.target.value })
                }
              />
              <select name="" id="">
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
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
        )}
      </div>
      <Toaster />
    </motion.div>
  );
};

export default connect(null, { createProduct })(Createproduct);
