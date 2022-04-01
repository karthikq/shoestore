/** @format */
import axios from "axios";
import { backendApi } from "../api/api";
import { productsArray } from "../Products";
import {
  CREATE_PRODUCT,
  FETCH_PRODUCTS,
  GET_PRODUCT,
  UPDATE_VIEW,
} from "../reducers/constants";

export const fetchProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get("http://localhost:5000/product/all");

    dispatch({
      type: FETCH_PRODUCTS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const singleProduct = (p_id) => async (dispatch, getState) => {
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
export const fetchselProduct = () => async (dispatch, getState) => {
  const products = sessionStorage.getItem("data").split(",");
  await dispatch(fetchProducts());
  const data = getState().Products.filter((item) => {
    return products.find((i) => (item.keywords.includes(i) ? item : ""));
  });

  dispatch({
    type: GET_PRODUCT,
    payload: data,
  });
};

export const updateViewCount = (product) => async (dispatch) => {
  dispatch({
    type: UPDATE_VIEW,
    payload: product,
  });
};

export const getcsrfToken = () => async (dispatch) => {
  const { data } = await backendApi.get("/getcsrftoken");

  return data;
};

export const createProduct =
  (productDetails, urlarray, navigate) => async (dispatch) => {
    productDetails.p_img = urlarray;

    try {
      await backendApi.post("/product/create", productDetails);
    } catch (error) {
      console.log(error);
    }
    await dispatch({
      type: CREATE_PRODUCT,
      payload: productDetails,
    });
    navigate("/");
  };
