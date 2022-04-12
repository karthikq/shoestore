/** @format */

import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import "./login.styles.scss";
import { motion } from "framer-motion";
import { backendUrl } from "../../components/api/Backendurl";
const Login = ({ state, setState }) => {
  const loginRef = useRef();
  const loginRef2 = useRef();

  useEffect(() => {
    if (loginRef.current) {
      loginRef.current.addEventListener("click", (e) => {
        if (!e.target) return;
        if (e.target.contains(loginRef2.current)) {
          setState(false);
          window.history.pushState({}, "home", "/");
          return;
        }
      });
    }
  }, [setState, state]);

  let url = backendUrl();

  return (
    <React.Fragment>
      {state && (
        <motion.div
          ref={loginRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="login-container">
          <motion.div
            ref={loginRef2}
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 0.7 }}
            className="login-contents">
            <div className="login-list">
              <h4>Login with</h4>
              <div className="login-items">
                <a href={`${url}/auth/google/login`}>
                  <img src="https://i.ibb.co/c81tWLc/google.png" alt="google" />
                </a>
                <a href={`${url}/auth/facebook/login`}>
                  <img
                    src="https://i.ibb.co/r5zc7YR/facebook-1.png"
                    alt="facebook"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </React.Fragment>
  );
};

export default Login;
