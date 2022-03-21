/** @format */
import axios from "axios";
import { productsArray } from "../Products";

export const fetchProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get("http://localhost:5000/product/all");

    // dispatch({
    //   type: "FETCH_PRODUCTS",
    //   payload: data,
    // });
  } catch (error) {
    console.log(error);
  }
};

export const singleProduct = (p_id) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      "http://localhost:5000/product/get/" + p_id
    );
    console.log(data);

    dispatch({
      type: "SINGLE_PRODUCT",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const fetchselProduct = (products) => async (dispatch) => {
  // return {
  //   type: "FETCH_SEL_PRODUCT",
  //   payload: products,
  // };

  const res = productsArray.filter((item) => {
    return products.find((i) => item.keywords.includes(i)) ? item : "";
  });
  console.log(res);
};
