/** @format */

import React, { useEffect, useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import toast from "react-hot-toast";
import { connect } from "react-redux";
import "./createp.styles.scss";

import Select from "react-select";
import makeAnimated from "react-select/animated";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ImageSlider from "../../components/ImageSlider";

import UploadImg from "./UploadImg";
import { createProduct, getcsrfToken } from "../../components/actions";
const animatedComponents = makeAnimated();
const Createproduct = ({ createProduct, getcsrfToken }) => {
  const navigate = useNavigate();

  const [uploadedImg, setUploadedImg] = useState("");
  const [uploadedImgState, setUploadedImgState] = useState(false);

  const [uploads, setUploads] = useState([]);

  const [urlarray, setUrlarray] = useState("");

  const [userData, setUserData] = useState({
    p_name: "",
    p_img: [],
    p_desp: "",
    p_price: "",
    p_category: "casual",
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

  const onSubmit = async (e) => {
    e.preventDefault();
    // setUploadedImgState(true);
    // const sliderdiv = document.querySelector(".animate-bar");

    if (!uploadedImg) {
      return toast.error("Imagefile is required");
    }
    if (!userData.p_category.length === 0) {
      return toast.error("Please select a category");
    }
    if (userData.p_price <= 0) {
      return toast.error("Price cannot be less than zero");
    }
    setUploadedImgState(true);
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

  useEffect(() => {
    if (urlarray.length > 0 && urlarray.length === uploads.length) {
      toast.dismiss();

      setUserData({ ...userData, p_img: urlarray });
      toast.success("data saved");
      createProduct(userData, urlarray, navigate);
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

  const options = [
    { value: "all", label: "All", color: "#00B8D9" },
    { value: "casual", label: "Casual", color: "#00B8D9" },
    { value: "running", label: "Running", color: "#0052CC" },
    { value: "sports", label: "Sports", color: "#5243AA" },
    {
      value: "boatshoes",
      label: "Boat shoes",
      color: "#FF5630",
      isFixed: true,
    },
    { value: "flipflop", label: "Flip flop", color: "#FF8B00" },
    { value: "loafers", label: "Loafers", color: "#FFC400" },
    { value: "boots", label: "Boots", color: "#36B37E" },
    { value: "formalshoes", label: "Formal shoes", color: "#00875A" },
    { value: "sandals", label: "Sandals", color: "#253858" },
  ];

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
              <label htmlFor="upload_img" className="file-label">
                Select Image files
              </label>
              {uploads.length !== 3 && (
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
              <label className="other-label">Product name</label>
              <input
                type="text"
                required
                minLength={5}
                name="p_name"
                maxLength={12}
                value={userData.p_name}
                onChange={(e) =>
                  setUserData({ ...userData, p_name: e.target.value })
                }
              />
              <label className="other-label">
                Price{" "}
                <span style={{ fontSize: "1rem", fontWeight: "300" }}>
                  (???Rs)
                </span>{" "}
              </label>
              <input
                type="number"
                required
                name="p_price"
                value={userData.p_price}
                onChange={(e) =>
                  setUserData({ ...userData, p_price: e.target.value })
                }
              />
              <label className="other-label">Choose a category</label>
              {/* <select
                name="category"    onChange={(e) =>
                  setUserData({ ...userData, p_category: [...userData.p_category,e.target.value] })
                }
                value={userData.p_category}
               >
                <option value="sneakers">sneakers</option>
                <option value="casual">casual</option>
                <option value="rnning">Running</option>
                <option value="sports">Sports</option>
                <option value="boatshoes">Boat shoes</option>
                <option value="flipflop">Flip flop</option>
                <option value="loafers">Loafers</option>
                <option value="boots">Boots</option>
                <option value="formalshoes">Formal shoes</option>
                <option value="sandals">Sandals</option>
              </select> */}
              <Select
                className="select-input"
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={options}
                onChange={(e) => {
                  setUserData({
                    ...userData,
                    p_category: e.map((item) => item.value.toLowerCase()),
                  });
                }}
              />
              <label className="other-label">
                Product despscription (optional)
              </label>
              <textarea
                name="p_desp"
                cols="30"
                rows="5"
                onChange={(e) =>
                  setUserData({ ...userData, p_desp: e.target.value })
                }></textarea>
            </motion.div>
            <button type="submit" className="create-p_btn">
              <BiRightArrowAlt className="create-p_icon" />
            </button>
          </motion.form>
        )}
      </div>
    </motion.div>
  );
};

export default connect(null, { createProduct, getcsrfToken })(Createproduct);
