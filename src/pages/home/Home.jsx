/** @format */

import React, { useEffect, useState } from "react";
import "./home.styles.scss";
import { BiRightArrowAlt } from "react-icons/bi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProducts, singleProduct } from "../../components/actions";

const Home = ({ products, fetchProducts, singleProduct }) => {
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
    singleProduct(5);
  }, []);

  return (
    <motion.div
      initial={{ x: "0", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "linear" }}
      className="home-container">
      <div className="home-bg-video">
        <video autoPlay>
          <source src="../videos/3.mp4" />
        </video>
      </div>
      <div className="home-contents">
        <h1>
          EXPLORE <span>LATEST SHOES</span>
        </h1>
        <div
          className="explore-btn"
          onClick={() => {
            document.querySelector(".animate-bar").style.left = `${-100}%`;
            navigate("/categ/options");
          }}>
          <BiRightArrowAlt className="explore-icon" />
        </div>
      </div>
    </motion.div>
  );
};
const mapStatetoProps = (state) => {
  return { products: state.Products };
};

export default connect(mapStatetoProps, { fetchProducts, singleProduct })(Home);
