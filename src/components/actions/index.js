/** @format */
import axios from "axios";

export const fetchProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get("http://localhost:5000/products/all");
    console.log(data);
    dispatch({
      type: "FETCH_PRODUCTS",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
