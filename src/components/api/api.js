/** @format */

import axios from "axios";

const url = () => {
  if (process.env.NODE_ENV === "production") {
    return "https://murmuring-reef-49332.herokuapp.com";
  } else {
    return "http://localhost:5000";
  }
};
export const backendApi = axios.create({
  baseURL: url(),
  headers: {
    "Content-type": "application/json",
  },
});
