/** @format */

import React from "react";

import { BiHeart } from "react-icons/bi";
import { BsBag } from "react-icons/bs";
import StarRatings from "react-star-ratings";
import { connect, useSelector } from "react-redux";
import { singleProduct, updateViewCount } from "../../components/actions";
import { useNavigate } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { addtocart, userAddtofav } from "../../components/actions/User";

const Productbox = ({
  item,
  userData,
  updateViewCount,
  userAddtofav,
  addtocart,
  setselproductState,

  selproductState,
}) => {
  const navigate = useNavigate();
  // const products = useSelector((state) => state.Products);
  // console.log(products);

  return (
    <React.Fragment>
      <div className="product-box">
        <div
          className="product-img"
          onClick={async () => {
            await updateViewCount(item.p_id);
            navigate("/single/product/" + item.p_id);
          }}>
          {item.p_img?.length >= 0 && (
            <img src={item.p_img[0]} alt={item.p_id} />
          )}
        </div>

        <div className="product-details">
          <h3>{item.p_name}</h3>
          <span>Price: ₹{item.price}</span>
        </div>
        <div className="product-fav">
          {userData.favProducts?.find(
            (prod) => prod.product._id === item._id
          ) ? (
            <AiFillHeart
              className="product-fav_icon user-fav"
              onClick={() => userAddtofav(item._id, false)}
            />
          ) : (
            <BiHeart
              className="product-fav_icon"
              onClick={() => userAddtofav(item._id, true)}
            />
          )}
        </div>
        <div className="product-bag_icon">
          <BsBag onClick={() => addtocart(item._id)} />
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
const mapStatetoProps = (state) => {
  return {
    userData: state.User.userDetails,
  };
};

export default connect(mapStatetoProps, {
  updateViewCount,
  userAddtofav,
  addtocart,
})(Productbox);
