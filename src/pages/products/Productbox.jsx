/** @format */

import React from "react";

import { BiHeart } from "react-icons/bi";
import { BsBag } from "react-icons/bs";
import StarRatings from "react-star-ratings";
import { connect } from "react-redux";
import { updateViewCount } from "../../components/actions";
import { useNavigate } from "react-router-dom";

const Productbox = ({
  item,
  updateViewCount,
  setselproductState,
  selproductState,
}) => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <div
        className="product-box"
        onClick={() => {
          setselproductState({ ...selproductState, state: true, data: item });
          updateViewCount(item.p_id);
          navigate("/product/" + item.p_id);
        }}>
        <div className="product-img">
          <img src={item.p_img[0]} alt={item.p_id} />
        </div>

        <div className="product-details">
          <h3>{item.p_name}</h3>
          <span>Price : ₹{item.price}</span>
        </div>
        <div className="product-fav">
          <BiHeart className="product-fav_icon" />
        </div>
        <div className="product-bag_icon">
          <BsBag />
        </div>
        <div className="star-rating">
          {/* <StarRatings
            rating={item.rating}
            starRatedColor="#FFDD44"
            numberOfStars={5}
            starDimension="20px"
            starSpacing="1px"
          /> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default connect(null, { updateViewCount })(Productbox);
