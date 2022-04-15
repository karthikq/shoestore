/** @format */

import axios from "axios";
import { backendUrl } from "./Backendurl";

const token = localStorage.getItem("authToken");

export const backendApi = axios.create({
  baseURL: backendUrl(),

  headers: {
    Authorization: `Bearer ${token}`,
    "Content-type": "application/json",
  },
});
