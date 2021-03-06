/** @format */

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Options from "./pages/Options/Options";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Products from "./pages/products/Products";
import { useContext, useEffect, useRef, useState } from "react";
import Createproduct from "./pages/Create/Createproduct";
import { fetchProducts } from "./components/actions";
import { connect, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import Selproduct from "./pages/selProduct/Selproduct";
import { fetchUserDetails } from "./components/actions/User";
import Login from "./pages/auth/Login";
import AnimatedBar from "./hooks/AnimatedBar";
import queryString from "query-string";
import { authObject } from "./context/authContext";
import Register from "./pages/auth/Register";
import ProtectedRotue from "./components/Routes/ProtectedRotue";

function App({ fetchProducts, fetchUserDetails }) {
  const authState = useSelector((state) => state.User.auth);
  AnimatedBar(fetchProducts);

  const { state, setState } = useContext(authObject);

  const location = useLocation();
  const [navigateState, setNavigateState] = useState(false);

  const navigate = useNavigate();

  // useEffect(() => {
  //   const { loginState } = queryString.parse(location.search);
  //   if (loginState === "false") {
  //     setAuthState(true);
  //   } else {
  //     setAuthState(false);
  //   }
  // }, [location]);
  useEffect(() => {
    const { token } = queryString.parse(location.search);

    if (token) {
      localStorage.setItem("authToken", token);

      setTimeout(() => {
        window.history.pushState({}, "home", "/");
      }, 2000);
      window.onload = function () {
        if (!window.location.hash) {
          window.location = window.location + "#loaded";
          window.location.reload();
        }
      };
    }
    const authToken = localStorage.getItem("authToken");

    if (authToken) {
      fetchUserDetails();
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="animate-bar"></div>
      {/* <Login state={state} setState={setState} /> */}
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
          <Route path="/single/product/:id" element={<Selproduct />} />

          <Route
            path="/create/product"
            element={
              <ProtectedRotue isAllowed={authState}>
                <Createproduct />
              </ProtectedRotue>
            }
          />
          <Route
            path="/user/login"
            element={
              <ProtectedRotue isAllowed={!authState}>
                <Login />
              </ProtectedRotue>
            }
          />
          <Route
            path="/user/register"
            element={
              <ProtectedRotue isAllowed={!authState}>
                <Register />
              </ProtectedRotue>
            }
          />
        </Routes>{" "}
      </AnimatePresence>
      <Toaster
        reverseOrder={false}
        toastOptions={{
          className: "",
          style: {
            border: "1px solid #1C1616",
            padding: "10px 12px",
            color: "#1C1616",
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
