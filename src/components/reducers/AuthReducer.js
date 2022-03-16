/** @format */

export const AuthReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return [...action.payload.data];

    case "SINGLE_PRODUCT":
      return action.payload.data;
    default:
      return state;
  }
};
