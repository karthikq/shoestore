/** @format */
import axios from "axios";
import { backendApi } from "../api/api";

import toast from "react-hot-toast";
import {
  CREATE_PRODUCT,
  FETCH_PRODUCTS,
  GET_PRODUCT,
  LIKE_PRODUCT,
  SINGLE_PRODUCT,
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
    const { data } = await backendApi.get("/product/get/" + p_id);

    dispatch({
      type: SINGLE_PRODUCT,
      payload: data.productData,
    });
  } catch (error) {
    console.log(error);
    toast.error("product not found");
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
  try {
    const { data } = await backendApi.patch("/product/update/view/" + product);

    dispatch({
      type: UPDATE_VIEW,
      payload: data.updatedProduct,
    });
    console.log(data);
  } catch (error) {
    console.log(error);
    // if (error) {
    //   toast.error("Product not found");
    // }
  }
};

export const updateLike = (product) => async (dispatch) => {
  try {
    const { data } = await backendApi.patch("/product/like/" + product);

    dispatch({
      type: UPDATE_VIEW,
      payload: data.updatedProduct,
    });
  } catch (error) {
    toast.error("You have already liked the post");
    // if (error) {
    //   toast.error("Product not found");
    // }
  }
};
export const addRating = (product, count) => async (dispatch) => {
  console.log("S");
  try {
    const { data } = await backendApi.patch(
      "/product/rate/" + product + "/" + count
    );
  } catch (error) {}
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
