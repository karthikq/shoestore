/** @format */

import toast from "react-hot-toast";
import { backendApi } from "../../api/api";
import { FETCH_USER, UPDATE_USER } from "../../reducers/constants";

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
export const userAddtofav = (prodId, state) => async (dispatch, getState) => {
  try {
    let message;
    let user = getState().User.userDetails;

    if (state) {
      message = `Adding item to ${user.username} favourties`;
    } else {
      message = `Removing item from ${user.username} favourties`;
    }
    const toastToken = toast.loading(message);
    const { data } = await backendApi.patch("/user/add/fav/" + prodId);

    await dispatch({
      type: UPDATE_USER,
      payload: data.userData,
    });
    if (state) {
      message = `Item added to  ${user.username} favourites`;
    } else {
      message = `Item removed from  ${user.username} favourites`;
    }
    toast.success(message, {
      id: toastToken,
    });
  } catch (error) {
    toast.error("Error please refresh the page");
  }
};
