/** @format */

import React from "react";

import { BiHeart } from "react-icons/bi";
import { BsBag } from "react-icons/bs";
import StarRatings from "react-star-ratings";

const Productbox = () => {
  return (
    <div className="product-box">
      <div className="product-img">
        <img
          src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="shoe img"
        />
      </div>
      <div className="product-details">
        <h3>Nike air</h3>
        <span>Price : Rs1000</span>
      </div>
      <div className="product-fav">
        <BiHeart className="product-fav_icon" />
      </div>
      <button>
        <BsBag className="product-bag_icon" />
      </button>
      <div className="star-rating">
        <StarRatings
          rating={4}
          starRatedColor="#FFDD44"
          numberOfStars={5}
          name="rating"
          starDimension="20px"
          starSpacing="1px"
        />
      </div>
    </div>
  );
};

export default Productbox;
