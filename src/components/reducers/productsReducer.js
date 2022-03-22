/** @format */

import { productsArray } from "../Products";

export const productsReducer = (state = productsArray, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return state;

    case "SEL_PRODUCTS":
      return;
    case "FETCH_SEL_PRODUCT":
      const data = state.filter((item) => {
        return action.payload.find((i) =>
          item.keywords.includes(i) ? item : ""
        );
      });
      return action.payload;

    case "UPDATE_VIEW_COUNT":
      return state.map((item) =>
        item.p_id === action.payload.p_id
          ? { ...item, viewCount: item.viewCount + 1 }
          : item
      );

    default:
      return state;
  }
};
