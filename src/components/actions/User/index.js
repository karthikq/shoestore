/** @format */

import toast from "react-hot-toast";
import { backendApi } from "../../api/api";
import { FETCH_USER } from "../../reducers/constants";

export const fetchUserDetails = () => async (dispatch) => {
  try {
    const { data } = await backendApi.get("/user/userdetails");

    dispatch({
      type: FETCH_USER,
      payload: data,
    });
  } catch (error) {
    toast.error("please refresh and try again");
  }
};
export const userAddtofav = () => async (prodId) => {
  try {
    console.log(prodId);
    //     const { data } = await backendApi.patch("/user/add/fav/" + prodId);
    //     console.log(data);
  } catch (error) {
    toast.error("Error please refresh the page");
  }
};
