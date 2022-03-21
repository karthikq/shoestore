/** @format */

import { productsArray } from "../Products";

export const productsReducer = (state = productsArray, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return state;

    case "SEL_PRODUCTS":
      return;
    case "FETCH_SEL_PRODUCT":
      return state.filter((item) => {
        return action.payload.find((i) => item.keywords.includes(i))
          ? item
          : "";
      });
    default:
      return state;
  }
};
