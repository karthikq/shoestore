/** @format */

import React from "react";
import {
  AiFillHeart,
  AiOutlineClose,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import "./selproduct.styles.scss";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Selproduct = ({ setselproductState }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
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
          <img
            src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="err"
          />
        </div>
        <div className="selproduct-details">
          <h2>Title</h2>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
            non error adipisci ab. Cum tempore, voluptatum ducimus, ut, nemo
            magni rerum nobis atque ad reiciendis illum laudantium nihil modi
            facilis.
          </span>
          <div className="selproduct-actions">
            <AiFillHeart className="selproduct-fav_icon" />
            <AiOutlineShoppingCart className="selproduct-cart_icon" />
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
              <div className="selproduct-likes_user">
                <img
                  src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="err"
                />
                <span>username</span>
              </div>{" "}
              <div className="selproduct-likes_user">
                <img
                  src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="err"
                />
                <span>username</span>
              </div>{" "}
              <div className="selproduct-likes_user">
                <img
                  src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="err"
                />
                <span>username</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Selproduct;
