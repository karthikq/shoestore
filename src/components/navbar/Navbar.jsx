/** @format */

import React, { useState } from "react";
import "./Navbar.styles.scss";

const Navbar = () => {
  const [navState, setNavState] = useState(false);
  console.log(navState);
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
