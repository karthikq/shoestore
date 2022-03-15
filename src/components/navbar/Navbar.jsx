/** @format */

import React, { useState } from "react";
import "./Navbar.styles.scss";

const Navbar = () => {
  const [navState, setNavState] = useState(false);

  // setTimeout(() => {
  //   const home = document.querySelector(".home-container");
  //   if (navState) {
  //     home.style.marginLeft = "18rem";
  //   } else {
  //     home.style.marginLeft = "0rem";
  //   }
  // }, 10);

  return (
    <div className="nav-container">
      <div
        className={
          navState ? "nav-contents nav-contents-active" : "nav-contents"
        }>
        <label htmlFor="check" className="nav-icon">
          <input
            type="checkbox"
            id="check"
            onClick={() => setNavState(!navState)}
          />
          <span className="navspan"></span>
          <span className="navspan"></span>
          <span className="navspan"></span>
        </label>
        <div className="nav-items">
          <div className="nav-profile">
            <img src="" alt="" />
            <span>Username</span>
          </div>
          <ul>
            <li>Account</li>
            <li>Favourites</li>
            <li>Settings</li>
            <li>login</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
