/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { Reducers } from "./components/reducers";
import { Provider } from "react-redux";
import AuthContext from "./context/authContext";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(Reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <AuthContext>
      <Router>
        <App />
      </Router>
    </AuthContext>
  </Provider>,
  document.getElementById("root")
);
