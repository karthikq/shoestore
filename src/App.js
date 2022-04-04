/** @format */

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Options from "./pages/Options/Options";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Products from "./pages/products/Products";
import { useEffect, useRef, useState } from "react";
import Createproduct from "./pages/Create/Createproduct";
import { fetchProducts } from "./components/actions";
import { connect } from "react-redux";
import { Toaster } from "react-hot-toast";

function App({ fetchProducts }) {
  const location = useLocation();
  const [navigateState, setNavigateState] = useState(false);
  const navigate = useNavigate();
  const ref = useRef();
  // window.addEventListener("popstate", (e) => {
  //   setTimeout(() => {
  //     document.querySelector(".animate-bar").style.left = `${100}%`;
  //   }, 1800);
  // });
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
    const path = location.pathname;

    let bar = document.querySelector(".animate-bar");

    if (path === "/") {
      postitionofBar(bar);
    }
    if (path === "/categ/options") {
      postitionofBar(bar);
    }
    if (path === "/product/list") {
      postitionofBar(bar);
    }
    if (path === "/create/product") {
      postitionofBar(bar);
    }
  }, [location.pathname]);
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <Navbar />
      <div ref={ref} className="animate-bar"></div>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route
            path="/categ/options"
            element={
              <Options
                setNavigateState={setNavigateState}
                navigationState={navigateState}
              />
            }
          />
          <Route path="/product/list" element={<Products />} />
          <Route path="/create/product" element={<Createproduct />} />
          <Route path="/create/product" element={<Createproduct />} />
        </Routes>{" "}
      </AnimatePresence>
      <Toaster
        reverseOrder={false}
        toastOptions={{
          className: "",
          style: {
            border: "1px solid #713200",
            padding: "10px 12px",
            color: "#713200",
          },
          iconTheme: {
            primary: "#713200",
            secondary: "#FFFAEE",
          },
        }}
      />
    </div>
  );
}

export default connect(null, { fetchProducts })(App);
