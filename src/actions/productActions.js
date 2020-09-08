import { FETCH_PRODUCTS } from "../types";

export const fetchProducts = () => async (dispatch) => {
  console.log('Somthing');
  const res = await fetch("/api/products");
  const data = await res.json();
  //console.log(data);
  dispatch({
    type: FETCH_PRODUCTS,
    payload: data,
  });
};