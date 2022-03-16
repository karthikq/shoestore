/** @format */

export const AuthReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return [...state, "data"];

    default:
      return state;
  }
};
