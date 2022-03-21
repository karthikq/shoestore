/** @format */

import { productsArray } from "../Products";

export const productsReducer = (state = productsArray, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return state;

    case "SEL_PRODUCTS":
      return;
    case "FETCH_SEL_PRODUCT":
      return state.map((item, index) =>
        item.keywords.includes(action.payload) ? item : ""
      );
    default:
      return state;
  }
};
