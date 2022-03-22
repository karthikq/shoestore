/** @format */

import React from "react";

import { BiHeart } from "react-icons/bi";
import { BsBag } from "react-icons/bs";
import StarRatings from "react-star-ratings";
import { connect } from "react-redux";
import { updateViewCount } from "../../components/actions";

const Productbox = ({ item, updateViewCount }) => {
  return (
    <React.Fragment>
      <div className="product-box" onClick={() => updateViewCount(item)}>
        <div className="product-img">
          <img src={item.imageUrl} alt={item.p_id} />
        </div>

        <div className="product-details">
          <h3>{item.p_name}</h3>
          <span>Price : {item.p_price}</span>
        </div>
        <div className="product-fav">
          <BiHeart className="product-fav_icon" />
        </div>
        <div className="product-bag_icon">
          <BsBag />
        </div>
        <div className="star-rating">
          <StarRatings
            rating={item.rating}
            starRatedColor="#FFDD44"
            numberOfStars={5}
            starDimension="20px"
            starSpacing="1px"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default connect(null, { updateViewCount })(Productbox);
