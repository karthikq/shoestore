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
import Selproduct from "./components/selProduct/Selproduct";
import { fetchUserDetails } from "./components/actions/User";
import Login from "./pages/auth/Login";
import AnimatedBar from "./hooks/AnimatedBar";
import queryString from "query-string";

function App({ fetchProducts, fetchUserDetails }) {
  AnimatedBar(fetchProducts, fetchUserDetails);
  const [authState, setAuthState] = useState(false);

  const location = useLocation();
  const [navigateState, setNavigateState] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const { loginState } = queryString.parse(location.search);
    if (loginState === "false") {
      setAuthState(true);
    } else {
      setAuthState(false);
    }
  }, [location]);
  useEffect(() => {
    window.history.pushState({}, "home", "/");
    setAuthState(false);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="animate-bar"></div>
      <Login state={authState} setState={setAuthState} />
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
          <Route path="/product/:id" element={<Selproduct />} />
          <Route path="/create/product" element={<Createproduct />} />
          <Route path="/create/product" element={<Createproduct />} />

          {/* <Route path="/user/login" element={<Login />} /> */}
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

export default connect(null, { fetchProducts, fetchUserDetails })(App);
