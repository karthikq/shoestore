/** @format */

import React, { useContext, useEffect, useRef, useState } from "react";
import { BiHome, BiLogIn } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import {
  AiOutlineHeart,
  AiOutlineLogout,
  AiOutlineSetting,
} from "react-icons/ai";

import "./Navbar.styles.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { IoLogOutOutline } from "react-icons/io";
import { authObject } from "../../context/authContext";
import { LogoutUser } from "../actions/auth/auth";

const Navbar = ({ auth, LogoutUser, user }) => {
  const [navState, setNavState] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const navRef = useRef();

  const { state, setState } = useContext(authObject);

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
    if (!navRef.current) return;
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
        <div className="nav-items">
          {" "}
          <div
            className={navState ? "nav-icon nav-icon-active" : "nav-icon"}
            onClick={() => setNavState(!navState)}>
            <span className="navspan"></span>
            <span className="navspan"></span>
            <span className="navspan"></span>
          </div>
          {auth && (
            <div className="nav-profile">
              <img src={user.profileUrl} alt="error" />
              <span>{user.firstname}</span>
            </div>
          )}
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
            {auth && (
              <li onClick={() => handleNavigation("/create/product")}>
                <AiOutlineSetting className="navbar-icon" /> Create
              </li>
            )}
            {auth ? (
              <li
                onClick={async () => {
                  await LogoutUser(navigate);
                  handleNavigation("/");
                }}>
                <AiOutlineLogout className="navbar-icon" /> Logout
              </li>
            ) : (
              <li
                onClick={() => {
                  handleNavigation("/user/login");
                }}>
                <BiLogIn className="navbar-icon" />
                Login
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStatetoProps = (state) => {
  return {
    auth: state.User.auth,
    user: state.User.userDetails,
  };
};

export default connect(mapStatetoProps, { LogoutUser })(Navbar);
