/** @format */
import axios from "axios";
import { backendApi } from "../api/api";
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
export const fetchselProduct = () => async (dispatch) => {
  const products = sessionStorage.getItem("data").split(",");
  const data = productsArray.filter((item) => {
    return products.find((i) => (item.keywords.includes(i) ? item : ""));
  });

  dispatch({
    type: "FETCH_SEL_PRODUCT",
    payload: data,
  });
};

export const updateViewCount = (product) => async (dispatch) => {
  dispatch({
    type: "UPDATE_VIEW_COUNT",
    payload: product,
  });
};
export const getcsrfToken = () => async (dispatch) => {
  const { data } = await backendApi.get("/getcsrftoken");
  console.log(data);
  backendApi.defaults.headers.post["x-csrf-token"] = data.CSRFToken;
};

export const createProduct =
  (productDetails, urlarray, navigate) => async (dispatch) => {
    productDetails.p_img = urlarray;

    try {
      const resp = await backendApi.post("/product/create", productDetails);
    } catch (error) {
      console.log(error);
    }
    // await dispatch({
    //   type: "CREATE_PRODUCT",
    //   payload: productDetails,
    // });
    // navigate("/");
  };
