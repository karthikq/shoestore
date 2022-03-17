/** @format */

import React from "react";
import "./product.styles.scss";
import Productbox from "./Productbox";

const Products = () => {
  return (
    <div className="product-container">
      <div className="product-contents">
        <h4>Most Popular</h4>
        <div className="product-trending">
          <Productbox />
          <Productbox />
          <Productbox />
          <Productbox />
          <Productbox />
          <Productbox />
        </div>
      </div>
    </div>
  );
};
export default Products;
