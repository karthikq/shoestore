/** @format */

import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./options.styles.scss";
import { motion } from "framer-motion";

import { BiRightArrowAlt } from "react-icons/bi";

import OptionItem from "./OptionItem";

const Options = () => {
  const [selOptions, setSelOptions] = useState([]);
  const [btnState, setBtnState] = useState(false);
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
    setBtnState(true);
    toast.dismiss();
    if (selOptions.length === 0) {
      return toast.error("Select at least one item");
    }
  };
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "100vw" }}
      transition={{ duration: 0.8, easings: "easeInOut" }}
      className="options-container">
      <div className="options-contents">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}>
          Select a Category
        </motion.h2>
        <div className="options-list">
          <form onSubmit={onSubmit}>
            <div className="options-btn-list">
              <OptionItem
                checkExists={checkExists}
                selOptions={selOptions}
                value="Trending"
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
                value="Sports"
                id={5}
              />
              <OptionItem
                checkExists={checkExists}
                selOptions={selOptions}
                value="Sports"
                id={6}
              />
              <OptionItem
                checkExists={checkExists}
                selOptions={selOptions}
                value="Sports"
                id={7}
              />
            </div>

            <motion.button
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ y: 50 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="options-btn"
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
