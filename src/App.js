/** @format */

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Options from "./pages/Options/Options";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Products from "./pages/products/Products";
import { useEffect, useRef, useState } from "react";

function App() {
  const location = useLocation();
  const [navigateState, setNavigateState] = useState(false);
  const navigate = useNavigate();
  const ref = useRef();
  // window.addEventListener("popstate", (e) => {
  //   setTimeout(() => {
  //     document.querySelector(".animate-bar").style.left = `${100}%`;
  //   }, 1800);
  // });
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      document.querySelector(".animate-bar").style.left = `${100}%`;
    }
    if (path === "/categ/options") {
      document.querySelector(".animate-bar").style.left = `${-100}%`;
    }
  }, [location.pathname]);
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
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
