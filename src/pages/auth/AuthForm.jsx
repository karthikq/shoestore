/** @format */

import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import "./login.styles.scss";
import { motion } from "framer-motion";
import { backendUrl } from "../../components/api/Backendurl";

import { Link, useNavigate } from "react-router-dom";
const AuthForm = ({ loginState, handleAuth, values }) => {
  const loginRef = useRef();
  const loginRef2 = useRef();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmPassowrd: "",
    firstname: "",
    lastname: "",
  });

  //   useEffect(() => {
  //     if (loginRef.current) {
  //       loginRef.current.addEventListener("click", (e) => {
  //         if (!e.target) return;
  //         if (e.target.contains(loginRef2.current)) {
  //           return setState(false);
  //           // window.history.pushState({}, "home", "/");
  //         }
  //       });
  //     }
  //   }, [setState, state]);

  let url = backendUrl();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };

  return (
    <React.Fragment>
      <motion.div
        ref={loginRef}
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // exit={{ opacity: 0 }}
        className="login-container">
        <video autoPlay className="login-video_player">
          <source src="../videos/4.mp4" />
        </video>
        <motion.div
          ref={loginRef2}
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-100%" }}
          transition={{ duration: 0.7 }}
          className="login-contents">
          <div className="login-list">
            <h4>{values.header}</h4>
            <span className="login-span">
              {values.span} <Link to={values.path}>{values.text}</Link>
            </span>
            <div className="social-login">
              <span className="social-span">Or continue with</span>
              <div className="social-login_icons">
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
            <div className="login-items">
              <form onSubmit={handleSubmit}>
                {!loginState && (
                  <div className="login-item_header">
                    <input
                      type="text"
                      placeholder="First name"
                      className="login-item_header-input"
                      name="firstname"
                      required
                      minLength={3}
                      onChange={(e) =>
                        setUserData({ ...userData, firstname: e.target.value })
                      }
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      name="lastname"
                      className="login-item_header-input"
                      onChange={(e) =>
                        setUserData({ ...userData, lastname: e.target.value })
                      }
                    />
                  </div>
                )}
                <div className="login_input-box">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="login_input"
                    onChange={(e) =>
                      setUserData({ ...userData, email: e.target.value })
                    }
                  />
                </div>
                <div className="login_input-box">
                  <input
                    type="text"
                    placeholder="Password"
                    name="password"
                    className="login_input"
                    onChange={(e) =>
                      setUserData({ ...userData, password: e.target.value })
                    }
                  />
                </div>
                {!loginState && (
                  <div className="login_input-box">
                    <input
                      type="text"
                      name="confirmPassword"
                      placeholder="Confirm password"
                      className="login_input"
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          confirmPassword: e.target.value,
                        })
                      }
                    />
                  </div>
                )}

                {loginState && (
                  <div className="login-forgot_pass">
                    <span>
                      <Link to="/user/reset/password">Forgot password?</Link>
                    </span>{" "}
                  </div>
                )}

                <div className="login-actions">
                  <button className="login_action-btn"> {values.name}</button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </React.Fragment>
  );
};

export default AuthForm;
