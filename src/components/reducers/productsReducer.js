/** @format */

import { productsArray } from "../Products";
const intialState = [
  {
    p_id: 1,
    p_name: "Colorful sneaker",
    p_img: [],
    p_desp: "",
    rating: 4,
    viewCount: 1,
    keywords: ["all", "sneakers"],
  },
];
export const productsReducer = (state = intialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return state;

    case "SEL_PRODUCTS":
      return;
    case "FETCH_SEL_PRODUCT":
      return action.payload;

    case "UPDATE_VIEW_COUNT":
      return state.map((item) =>
        item.p_id === action.payload.p_id
          ? { ...item, viewCount: item.viewCount + 1 }
          : item
      );
    case "CREATE_PRODUCT":
      return [...state, action.payload];
    default:
      return state;
  }
};
