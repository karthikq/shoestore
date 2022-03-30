/** @format */

import axios from "axios";

export const backendApi = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-type": "application/json",
  },
});
