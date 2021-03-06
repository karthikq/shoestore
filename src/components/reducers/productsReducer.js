/** @format */

import { productsArray } from "../Products";
import {
  CREATE_PRODUCT,
  FETCH_PRODUCTS,
  GET_PRODUCT,
  LIKE_PRODUCT,
  SINGLE_PRODUCT,
  UPDATE_VIEW,
} from "./constants";

const intialState = [{}];

export const productsReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return action.payload.products;

    case "SEL_PRODUCTS":
      return;

    case GET_PRODUCT:
      return action.payload;

    case UPDATE_VIEW:
      return state.map((item) =>
        item.p_id === action.payload.p_id ? action.payload : item
      );

    case CREATE_PRODUCT:
      return [...state, action.payload];

    case SINGLE_PRODUCT:
      return [action.payload];
    default:
      return state;
  }
};
