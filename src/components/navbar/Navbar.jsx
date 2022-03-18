/** @format */

import React, { useEffect, useRef, useState } from "react";
import { BiHome, BiLogIn } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineHeart, AiOutlineSetting } from "react-icons/ai";

import "./Navbar.styles.scss";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [navState, setNavState] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const navRef = useRef();
  // setTimeout(() => {
  //   const home = document.querySelector(".home-container");
  //   if (navState) {
  //     home.style.marginLeft = "18rem";
  //   } else {
  //     home.style.marginLeft = "0rem";
  //   }
  // }, 10);
  const handleNavigation = (path) => {
    navigate(path);
    setNavState(!navState);
    // setTimeout(() => {
    //   document.querySelector(".animate-bar").style.left = `${100}%`;
    // }, 2000);
  };

  useEffect(() => {
    if (location.pathname === "/product/list") {
      document
        .querySelectorAll(".navspan")
        .forEach((item) => (item.style.backgroundColor = "black"));
    } else {
      document
        .querySelectorAll(".navspan")
        .forEach((item) => (item.style.backgroundColor = "white"));
    }
  }, [location.pathname]);

  document.addEventListener("click", (e) => {
    if (!e.target) return;
    if (!navRef.current.contains(e.target)) {
      setNavState(false);
    }
  });

  return (
    <div ref={navRef} className="nav-container">
      <div
        className={
          navState ? "nav-contents nav-contents-active" : "nav-contents"
        }>
        <div
          className={navState ? "nav-icon nav-icon-active" : "nav-icon"}
          onClick={() => setNavState(!navState)}>
          <span className="navspan"></span>
          <span className="navspan"></span>
          <span className="navspan"></span>
        </div>
        <div className="nav-items">
          <div className="nav-profile">
            <img src="" alt="" />
            <span>Username</span>
          </div>
          <ul>
            <li onClick={() => handleNavigation("/")}>
              <BiHome className="navbar-icon" />
              Home
            </li>
            <li onClick={() => handleNavigation("/")}>
              <VscAccount className="navbar-icon" /> Account
            </li>
            <li onClick={() => handleNavigation("/")}>
              <AiOutlineHeart className="navbar-icon" />
              Favourites
            </li>
            <li onClick={() => handleNavigation("/")}>
              <AiOutlineSetting className="navbar-icon" /> Settings
            </li>
            <li onClick={() => handleNavigation("/")}>
              <BiLogIn className="navbar-icon" />
              login
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
