/** @format */

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./options.styles.scss";
import { motion } from "framer-motion";

import { BiCategoryAlt, BiRightArrowAlt } from "react-icons/bi";

import OptionItem from "./OptionItem";
import { useNavigate } from "react-router-dom";

const Options = () => {
  const [selOptions, setSelOptions] = useState([]);
  const [btnState, setBtnState] = useState(false);
  const navigate = useNavigate();

  const checkExists = (value) => {
    const val = selOptions?.find((item) => item === value);
    if (val) {
      const data = selOptions?.filter((item) => {
        return item !== value;
      });
      setSelOptions(data);
    } else {
      return setSelOptions([...selOptions, value]);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();

    toast.dismiss();
    if (selOptions.length === 0) {
      return toast.error("Select at least one item");
    } else {
      setBtnState(true);
      toast.loading("Finding best products");
      setTimeout(() => {
        navigate("/products");
        toast.dismiss();
      }, 1500);
    }
  };
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "100vw" }}
      transition={{ duration: 0.7, ease: "linear" }}
      className="options-container">
      <div className="options-contents">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}>
          <BiCategoryAlt className="option-cat-icon" /> Select a
          <span>Category</span>
        </motion.h2>
        <div className="options-list">
          <form onSubmit={onSubmit}>
            <div className="options-btn-list">
              <OptionItem
                checkExists={checkExists}
                selOptions={selOptions}
                value="Sneakers"
                id={1}
              />
              <OptionItem
                checkExists={checkExists}
                selOptions={selOptions}
                value="Casual"
                id={2}
              />
              <OptionItem
                checkExists={checkExists}
                selOptions={selOptions}
                value="Running"
                id={3}
              />
              <OptionItem
                checkExists={checkExists}
                selOptions={selOptions}
                value="Sports"
                id={4}
              />
              <OptionItem
                checkExists={checkExists}
                selOptions={selOptions}
                value="Boat shoes"
                id={5}
              />
              <OptionItem
                checkExists={checkExists}
                selOptions={selOptions}
                value="Flip flops"
                id={6}
              />
              <OptionItem
                checkExists={checkExists}
                selOptions={selOptions}
                value="Loafers"
                id={7}
              />
              <OptionItem
                checkExists={checkExists}
                selOptions={selOptions}
                value="Boots"
                id={8}
              />
              <OptionItem
                checkExists={checkExists}
                selOptions={selOptions}
                value="Formal Shoes"
                id={9}
              />
              <OptionItem
                checkExists={checkExists}
                selOptions={selOptions}
                value="Sandals & Floaters"
                id={10}
              />
            </div>

            <motion.button
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ y: 50 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className={
                btnState ? "options-btn-active options-btn" : "options-btn"
              }
              type="submit">
              {btnState ? (
                <div class="lds-ring">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              ) : (
                <BiRightArrowAlt className="options-arrow-icon" />
              )}
            </motion.button>
          </form>
        </div>
      </div>
      <Toaster />
    </motion.div>
  );
};

export default Options;
