/** @format */

import toast from "react-hot-toast";
import { backendApi } from "../../api/api";
import { FETCH_USER, IS_NOT_AUTH, UPDATE_USER } from "../../reducers/constants";

export const fetchUserDetails = () => async (dispatch, getState) => {
  try {
    const { data } = await backendApi.get("/user/userdetails");

    dispatch({
      type: FETCH_USER,
      payload: data.userData,
    });
  } catch (error) {
    console.log(error.response);
    if (error.response) {
      dispatch({
        type: IS_NOT_AUTH,
      });
    }
  }
};
export const userAddtofav = (prodId, state) => async (dispatch, getState) => {
  try {
    let message;
    let user = getState().User.userDetails;

    if (state) {
      message = `Adding item to ${user.firstname}'s favourties`;
    } else {
      message = `Removing item from ${user.firstname}'s favourties`;
    }
    const toastToken = toast.loading(message);
    const { data } = await backendApi.patch("/user/add/fav/" + prodId);
    console.log(data);
    await dispatch({
      type: UPDATE_USER,
      payload: data.userData,
    });
    if (state) {
      message = `Item added to  ${user.firstname}'s favourites`;
    } else {
      message = `Item removed from  ${user.firstname}'s favourites`;
    }
    toast.success(message, {
      id: toastToken,
    });
  } catch (error) {
    toast.error("Error please refresh the page");
  }
};

export const addtocart = (prodId) => async (dispatch, getState) => {
  let message;
  let user = getState().User.userDetails;
  try {
    message = `Adding item to ${user.firstname}'s Cart`;

    const toastToken = toast.loading(message);
    const { data } = await backendApi.patch("/user/add/cart/" + prodId);

    await dispatch({
      type: UPDATE_USER,
      payload: data.userData,
    });

    message = `Item added to ${user.firstname}'s Cart`;

    toast.success(message, {
      id: toastToken,
    });
  } catch (error) {
    console.log(error.response);
  }
};
