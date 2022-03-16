/** @format */

export const AuthReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return [...state, action.payload.data];

    default:
      return state;
  }
};
