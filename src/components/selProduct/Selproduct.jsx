/** @format */

import React, { useEffect, useState } from "react";
import {
  AiFillHeart,
  AiOutlineClose,
  AiOutlineEye,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import "./selproduct.styles.scss";
import { motion } from "framer-motion";
import StarRatings from "react-star-ratings";
import { BiLike } from "react-icons/bi";
import { IconContext } from "react-icons/lib";
import ImageSlider from "../ImageSlider";
import { useDispatch } from "react-redux";
import { updateViewCount } from "../actions";

const Selproduct = ({ setselproductState, selproductState }) => {
  const [newRating, setNewRating] = useState();
  const dispatch = useDispatch();

  const changeproductRating = (newrating, name) => {
    setNewRating(newrating);
  };

  return (
    <React.Fragment>
      {selproductState.state && (
        <motion.div
          // initial={{ x: "100%" }}
          // animate={{ x: 0 }}
          // exit={{ x: "-100%" }}
          // transition={{ duration: 0.8 }}
          className="selproduct-container"
          role={"presentation"}>
          <div className="selproduct-contents">
            <div className="selproduct-close">
              <AiOutlineClose
                className="selproduct-close_icon"
                onClick={() =>
                  setselproductState({ ...selproductState, state: false })
                }
              />
            </div>
            <div className="selproduct-img">
              {/* <img src={selproductState.data.p_img[0]} alt="err" /> */}
              <ImageSlider
                imagesArray={selproductState.data.p_img}
                imgClass="selproduct-main_img"
              />
            </div>
            <div className="selproduct-details">
              <h2>{selproductState.data.p_name}</h2>{" "}
              <span>{selproductState.data.p_desp}</span>
              <div className="sel-product_rating">
                <StarRatings
                  rating={newRating}
                  starRatedColor="#e02957"
                  numberOfStars={5}
                  starDimension="20px"
                  starSpacing="1px"
                  name="rating"
                  changeRating={changeproductRating}
                />
                <span>{newRating}</span>
              </div>
              <div className="selproduct-actions">
                <BiLike className="selproduct-like_icon" />
                <AiFillHeart className="selproduct-fav_icon" />
                <AiOutlineShoppingCart className="selproduct-cart_icon" />{" "}
              </div>
              <div className="sel-product-views_container">
                <AiOutlineEye className="sel-product_views" />
                <span>{selproductState.data.viewCount}</span>
              </div>
              <div className="selproduct-usage">
                <h3>Likes</h3>
                <div className="selproduct-likes">
                  <div className="selproduct-likes_user">
                    <img
                      src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="err"
                    />
                    <span>username</span>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}{" "}
    </React.Fragment>
  );
};

export default Selproduct;
