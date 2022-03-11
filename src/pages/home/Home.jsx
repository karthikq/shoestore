/** @format */

import React from "react";
import "./home.styles.scss";
import { BiRightArrowAlt } from "react-icons/bi";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-bg-video">
        <video autoPlay></video>
      </div>
      <div className="home-contents">
        <h1>
          EXPLORE <span>LATEST SHOES</span>
        </h1>
        <div className="explore-btn">
          <BiRightArrowAlt className="explore-icon" />
        </div>
      </div>
    </div>
  );
};

export default Home;
