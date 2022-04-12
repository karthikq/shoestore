/** @format */

import { FETCH_USER, IS_AUTH, IS_NOT_AUTH, UPDATE_USER } from "./constants";

/** @format */
const initialState = {
  auth: false,
  userDetails: {},
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_AUTH:
      return { ...state, auth: true };
    case IS_NOT_AUTH:
      return { ...state, auth: false };

    case FETCH_USER:
      return { ...state, userDetails: action.payload };

    case UPDATE_USER:
      return { ...state, userDetails: action.payload };

    default:
      return state;
  }
};
