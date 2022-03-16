/** @format */

import React from "react";
import "./home.styles.scss";
import { BiRightArrowAlt } from "react-icons/bi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProducts } from "../../components/actions";

const Home = ({ products, fetchProducts }) => {
  const navigate = useNavigate();
  console.log(products);
  return (
    <motion.div
      initial={{ x: "0", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100vw" }}
      transition={{ duration: 0.6, ease: "linear" }}
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
        <div className="explore-btn">
          <BiRightArrowAlt
            className="explore-icon"
            onClick={() => {
              fetchProducts();
              // navigate("/categ/options");
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};
const mapStatetoProps = (state) => {
  return { products: state.Products };
};
export default connect(mapStatetoProps, { fetchProducts })(Home);
