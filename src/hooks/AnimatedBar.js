/** @format */

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

const AnimatedBar = (fetchProducts, fetchUserDetails) => {
  const location = useLocation();
  const [authState, setAuthState] = useState(null);

  function postitionofBar(bar) {
    const position = document
      .querySelector(".animate-bar")
      .style.left.split("%")[0];

    if (position === "-100") {
      bar.style.left = `${100}%`;
    }
    if (position === "100") {
      bar.style.left = `${-100}%`;
    }
    if (position === "0") {
      bar.style.left = `${-100}%`;
    }
    if (!position) {
      bar.style.left = `${-100}%`;
    }
  }
  useEffect(() => {
    fetchUserDetails();
    const path = location.pathname;

    let bar = document.querySelector(".animate-bar");

    if (path === "/") {
      postitionofBar(bar);
    }
    if (path === "/categ/options") {
      fetchProducts();
      postitionofBar(bar);
    }
    if (path === "/product/list") {
      postitionofBar(bar);
    }
    if (path === "/create/product") {
      postitionofBar(bar);
    }
  }, [location.pathname]);

  const parsed = queryString.parse(location.search);

  if (parsed.loginState) {
    return parsed.loginState === "true" ? true : false;
  } else {
    return;
  }
};

export default AnimatedBar;
