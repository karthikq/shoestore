/** @format */

import axios from "axios";
import { backendUrl } from "./Backendurl";

export const backendApi = axios.create({
  baseURL: backendUrl(),
  headers: {
    "Content-type": "application/json",
  },
});
