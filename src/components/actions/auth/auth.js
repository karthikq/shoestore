/** @format */

import toast from "react-hot-toast";
import { backendApi } from "../../api/api";
import { IS_NOT_AUTH, REGISTER_USER } from "../../reducers/constants";

export const LoginUser = (userData) => async (dispatch) => {
  try {
    const resp = await backendApi.post("/auth/user/login", userData);
    console.log(resp);
  } catch (error) {
    const errors = error.response;
    if (errors.status === 422) {
      toast.error("Invalid user input");
    }
  }
};
export const ResiterUser =
  (userData, handleErrors, navigate) => async (dispatch) => {
    try {
      const { data } = await backendApi.post("/auth/user/signup", userData);

      localStorage.setItem("authToken", data.token);
      await dispatch({
        type: REGISTER_USER,
        payload: data.userData,
      });
      handleErrors([]);
      navigate("/");
    } catch (error) {
      console.log(error);
      const errors = error.response;
      if (errors) {
        handleErrors(errors.data.errors);
      } else {
        toast.error("Something went wrong please refresh page and try again");
      }
    }
  };

export const LogoutUser = (navigate) => async (dispatch) => {
  try {
    localStorage.removeItem("authToken");
    const toastToken = toast.loading("Logging out");
    await dispatch({
      type: IS_NOT_AUTH,
    });
    toast.success("User successfully logged out", {
      id: toastToken,
    });
    navigate("/");
  } catch (error) {
    toast.error("Please refresh and try again");
  }
};
