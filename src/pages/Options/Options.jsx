/** @format */

import React, { useState } from "react";
import "./options.styles.scss";
import { motion } from "framer-motion";
import OptionItem from "./OptionItem";
const Options = () => {
  const [selOptions, setSelOptions] = useState([]);
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
  console.log(selOptions);
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "100vw" }}
      transition={{ duration: 0.8, easings: "easeInOut" }}
      className="options-container">
      <div className="options-contents">
        <h2>Select a category</h2>
        <div className="options-list">
          <form>
            <OptionItem
              checkExists={checkExists}
              selOptions={selOptions}
              value="Trending"
            />
            <OptionItem
              checkExists={checkExists}
              selOptions={selOptions}
              value="Casual"
            />
            <OptionItem
              checkExists={checkExists}
              selOptions={selOptions}
              value="Running"
            />
            <OptionItem
              checkExists={checkExists}
              selOptions={selOptions}
              value="Sports"
            />
            <OptionItem
              checkExists={checkExists}
              selOptions={selOptions}
              value="Sports"
            />
            <OptionItem
              checkExists={checkExists}
              selOptions={selOptions}
              value="Sports"
            />
            <OptionItem
              checkExists={checkExists}
              selOptions={selOptions}
              value="Sports"
            />
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Options;
