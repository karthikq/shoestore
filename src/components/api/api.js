/** @format */

import axios from "axios";
import { backendUrl } from "./Backendurl";

export const backendApi = axios.create({
  baseURL: backendUrl(),

  headers: {
    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    "Content-type": "application/json",
  },
});
