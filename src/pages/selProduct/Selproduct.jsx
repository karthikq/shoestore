/** @format */

import React, { useEffect, useState } from "react";
import {
  AiFillHeart,
  AiOutlineClose,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiTwotoneLike,
} from "react-icons/ai";
import "./selproduct.styles.scss";
import { motion } from "framer-motion";
import StarRatings from "react-star-ratings";
import { BiLike } from "react-icons/bi";
import _ from "lodash";
import ImageSlider from "../../components/ImageSlider";
import { connect, useDispatch } from "react-redux";

import {
  addRating,
  removeRating,
  singleProduct,
  updateLike,
  updateViewCount,
} from "../../components/actions";
import { useNavigate, useParams } from "react-router-dom";
import LikedUser from "../../components/LikedUsers/LikedUser";
import { userAddtofav } from "../../components/actions/User";
import ReactConfitte from "../../components/ReactConfitte";

const Selproduct = ({
  setselproductState,
  selproductState,
  selproduct,
  user,
}) => {
  const [addUserRating, setAddUserRating] = useState(false);
  const [confettiState, setconfettiState] = useState(false);

  // const [selProduct, setSelproduct] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeproductRating = async (newrating, name) => {
    await dispatch(addRating(selproduct.p_id, parseInt(newrating)));
    setAddUserRating(false);
    setconfettiState(true);
    setTimeout(() => {
      setconfettiState(false);
    }, [4000]);
  };
  const { id } = useParams();

  useEffect(() => {
    dispatch(singleProduct(id));
  }, [id]);

  const totalLikes = _.sum(selproduct.likes?.map((item) => item.count));

  return (
    <React.Fragment>
      <ReactConfitte state={confettiState} setState={setconfettiState} />
      {selproduct && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="selproduct-container"
          role={"presentation"}>
          <motion.div layout="position" className="selproduct-contents">
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
                {selproduct && (
                  <StarRatings
                    rating={
                      addUserRating
                        ? 0
                        : Math.floor(
                            selproduct.totalRating ? selproduct.totalRating : 0
                          )
                    }
                    starRatedColor="#e02957"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="1px"
                    name="rating"
                    changeRating={addUserRating ? changeproductRating : false}
                  />
                )}
                <span>{selproduct.totalRating?.toFixed(2)}</span>
                {selproduct.rating?.find(
                  (user) => user?.user._id === user._id
                ) ? (
                  <p
                    onClick={() => {
                      setAddUserRating(true);
                      dispatch(removeRating(selproduct.p_id));
                    }}>
                    change rating
                  </p>
                ) : (
                  !addUserRating && (
                    <p onClick={() => setAddUserRating(true)}>Add rating</p>
                  )
                )}
              </div>
              <div className="selproduct-actions">
                <div className="selproduct-like_div">
                  {selproduct?.likes?.find(
                    (user) => user.userId._id === user._id
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
                {user &&
                user.favProducts?.find(
                  (item) => item.product === selproduct._id
                ) ? (
                  <AiFillHeart
                    className="selproduct-fav_icon"
                    onClick={() =>
                      dispatch(userAddtofav(selproduct._id, false))
                    }
                  />
                ) : (
                  <AiOutlineHeart
                    className="selproduct-cart_icon"
                    onClick={() => dispatch(userAddtofav(selproduct._id, true))}
                  />
                )}{" "}
                <AiOutlineShoppingCart className="selproduct-cart_icon" />
              </div>
              <div className="sel-product-views_container">
                <AiOutlineEye className="sel-product_views" />
                <span>{selproduct.viewCount}</span>
              </div>
              <div className="selproduct-usage">
                <h3> {selproduct.likes?.length > 0 && "Likes"}</h3>
                <div className="selproduct-likes">
                  {selproduct.likes?.map(
                    ({ userId }) =>
                      userId && (
                        <LikedUser
                          avatar=""
                          name={userId.username}
                          key={userId._id}
                        />
                      )
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </React.Fragment>
  );
};

const mapStatetoProps = (state) => {
  return {
    selproduct: state.Products[0],
    user: state.User.userDetails,
  };
};

export default connect(mapStatetoProps)(Selproduct);
