/** @format */

import React from "react";
import "./options.styles.scss";
import { motion } from "framer-motion";
const Options = () => {
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
            <input type="checkbox" id="categ" />
            <label htmlFor="categ"> Trending </label>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Options;
