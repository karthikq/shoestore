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
        <div onClick={() => setNavState(!navState)}>
          <label htmlFor="check" className="nav-icon">
            <input type="checkbox" id="check" />
            <span className="navspan"></span>
            <span className="navspan"></span>
            <span className="navspan"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
