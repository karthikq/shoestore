/** @format */

import React from "react";
import { BiHeart } from "react-icons/bi";
import { BsBag } from "react-icons/bs";

const Productbox = () => {
  return (
    <div className="product-box">
      <img
        src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="shoe img"
      />
      <div className="product-details">
        <h3>Nike air</h3>
        <span>Price : Rs1000</span>
      </div>
      <div className="product-fav">
        <BiHeart className="product-fav_icon" />
      </div>
      <button>
        <span> Add to Bag</span> <BsBag />
      </button>
    </div>
  );
};

export default Productbox;
