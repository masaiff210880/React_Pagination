import {
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
} from "./actionType";
import axios from "axios";
export const getProducts = (page)=>(dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .get(`http://localhost:3000/products?_page=${page}&_limit=4`)
    .then((response) => {
      dispatch({ type: PRODUCT_SUCCESS, payload: response.data });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};
