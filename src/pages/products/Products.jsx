/** @format */

import React from "react";
import "./product.styles.scss";
import Productbox from "./Productbox";
import { motion } from "framer-motion";

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Products = () => {
  const productref = React.useRef();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "linear" }}
      className="product-container">
      <div className="product-contents">
        <div className="product-header">
          <h4>Most Popular</h4>
          <div className="product-arrow_icons">
            <span
              className="product-arrow_icon"
              onClick={() =>
                (document.querySelectorAll(
                  ".product-trending"
                )[0].scrollLeft -= 500)
              }>
              <FiArrowLeft />
            </span>
            <span
              className="product-arrow_icon"
              onClick={() =>
                (document.querySelectorAll(
                  ".product-trending"
                )[0].scrollLeft += 500)
              }>
              <FiArrowRight />
            </span>
          </div>
        </div>
        <div productRef={productref} className="product-trending">
          <Productbox /> <Productbox /> <Productbox /> <Productbox />
          <Productbox />
        </div>
      </div>
      <div className="product-contents">
        <h4>Latest</h4>
        <div className="product-trending">
          <Productbox /> <Productbox /> <Productbox /> <Productbox />{" "}
          <Productbox />
        </div>
      </div>
    </motion.div>
  );
};
export default Products;
