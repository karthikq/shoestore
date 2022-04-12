/** @format */

import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import "./login.styles.scss";
import { motion } from "framer-motion";
const Login = ({ state }) => {
  const authState = useSelector((state) => state.User.auth);
  const loginRef = useRef();
  const loginRef2 = useRef();
  const [newState, setNewState] = useState(false);

  useEffect(() => {
    if (loginRef.current) {
      loginRef.current.addEventListener("click", (e) => {
        if (!e.target) return;
        if (e.target.contains(loginRef2.current)) {
          setNewState(true);
          return;
        }
        console.log("S");
      });
    }
    setNewState(false);
    return () => {
      setNewState(false);
    };
  }, []);
  return (
    <React.Fragment>
      {state === false && authState === false && newState === false && (
        <motion.div
          ref={loginRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="login-container">
          <motion.div
            ref={loginRef2}
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            className="login-contents">
            <div className="login-list">
              <h4>Login with</h4>
              <div className="login-items">
                <img src="https://i.ibb.co/c81tWLc/google.png" alt="google" />
                <img
                  src="https://i.ibb.co/r5zc7YR/facebook-1.png"
                  alt="facebook"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </React.Fragment>
  );
};

export default Login;
