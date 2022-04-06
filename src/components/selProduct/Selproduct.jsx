/** @format */

import React, { useEffect, useState } from "react";
import {
  AiFillHeart,
  AiOutlineClose,
  AiOutlineEye,
  AiOutlineShoppingCart,
  AiTwotoneLike,
} from "react-icons/ai";
import "./selproduct.styles.scss";
import { motion } from "framer-motion";
import StarRatings from "react-star-ratings";
import { BiLike } from "react-icons/bi";
import _ from "lodash";
import ImageSlider from "../ImageSlider";
import { connect, useDispatch } from "react-redux";
import {
  addRating,
  singleProduct,
  updateLike,
  updateViewCount,
} from "../actions";
import { useNavigate, useParams } from "react-router-dom";
import LikedUser from "../LikedUsers/LikedUser";

const Selproduct = ({ setselproductState, selproductState, selproduct }) => {
  const [newRating, setNewRating] = useState();
  // const [selProduct, setSelproduct] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeproductRating = (newrating, name) => {
    setNewRating(newrating);
    dispatch(addRating(selproduct.p_id, newRating));
  };
  const { id } = useParams();

  useEffect(() => {
    dispatch(singleProduct(id));
  }, [id]);

  const totalLikes = _.sum(selproduct.likes?.map((item) => item.count));

  return (
    <React.Fragment>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="selproduct-container"
        role={"presentation"}>
        <div className="selproduct-contents">
          <div className="selproduct-close">
            <AiOutlineClose
              className="selproduct-close_icon"
              onClick={() => navigate("/product/list")}
            />
          </div>
          <div className="selproduct-img">
            {/* <img src={selproductState.data.p_img[0]} alt="err" /> */}
            <ImageSlider
              imagesArray={selproduct.p_img}
              imgClass="selproduct-main_img"
            />
          </div>
          <div className="selproduct-details">
            <h2>{selproduct.p_name}</h2>{" "}
            <span className="p_desp">{selproduct.p_desp}</span>
            <div className="sel-product_rating">
              <StarRatings
                // rating={Math.floor(selproduct.totalRating)}
                starRatedColor="#e02957"
                numberOfStars={5}
                starDimension="20px"
                starSpacing="1px"
                name="rating"
                changeRating={changeproductRating}
              />
              <span>{selproduct.totalRating?.toFixed(2)}</span>
            </div>
            <div className="selproduct-actions">
              <div className="selproduct-like_div">
                {selproduct.likes?.find(
                  (user) =>
                    user.userId._id?.toString() === "624d6bac98087cf929ee867a"
                ) ? (
                  <AiTwotoneLike
                    className="selproduct-like_icon"
                    onClick={() => {
                      dispatch(updateLike(selproduct.p_id));
                    }}
                  />
                ) : (
                  <BiLike
                    className="selproduct-like_icon"
                    onClick={() => {
                      dispatch(updateLike(selproduct.p_id));
                    }}
                  />
                )}
                <span> {totalLikes}</span>
              </div>
              <AiFillHeart className="selproduct-fav_icon" />{" "}
              <AiOutlineShoppingCart className="selproduct-cart_icon" />{" "}
            </div>
            <div className="sel-product-views_container">
              <AiOutlineEye className="sel-product_views" />
              <span>{selproduct.viewCount}</span>
            </div>
            <div className="selproduct-usage">
              <h3> {selproduct.likes?.length > 0 && "Likes"}</h3>
              <div className="selproduct-likes">
                {selproduct.likes?.map(({ userId }) => (
                  <LikedUser
                    avatar=""
                    name={userId.username}
                    key={userId._id}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </React.Fragment>
  );
};

const mapStatetoProps = (state) => {
  return {
    selproduct: state.Products[0],
  };
};

export default connect(mapStatetoProps)(Selproduct);
