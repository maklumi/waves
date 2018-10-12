import axios from "axios";
import {
  ADD_PRODUCT,
  CLEAR_PRODUCT,
  GET_PRODUCT_BY_SELL,
  GET_PRODUCT_BY_ARRIVAL,
  GET_BRANDS,
  GET_WOODS,
  GET_PRODUCTS_TO_SHOP
} from "./types";
import { PRODUCT_SERVER } from "../../components/utils/misc";

export function getProductBySell() {
  const request = axios
    .get(`${PRODUCT_SERVER}/articles?sortBy=sold&order=desc&limit=4`)
    .then(response => response.data);

  return {
    type: GET_PRODUCT_BY_SELL,
    payload: request
  };
}

export function getProductByArrival() {
  const request = axios
    .get(`${PRODUCT_SERVER}/articles?sortBy=createdAt&order=desc&limit=10`)
    .then(response => response.data);

  return {
    type: GET_PRODUCT_BY_ARRIVAL,
    payload: request
  };
}

export function getProductsToShop(
  skip,
  limit,
  filters = [],
  previousState = []
) {
  const data = { limit, skip, filters };

  const request = axios.post(`${PRODUCT_SERVER}/shop`, data).then(response => {
    let newState = [...previousState, ...response.data.articles];

    return {
      size: response.data.articles.length,
      articles: newState
    };
  });

  return {
    type: GET_PRODUCTS_TO_SHOP,
    payload: request
  };
}

export function addProduct(data) {
  const request = axios
    .post(`${PRODUCT_SERVER}/article`, data)
    .then(response => response.data);

  return {
    type: ADD_PRODUCT,
    payload: request
  };
}

export function clearProduct() {
  return {
    type: CLEAR_PRODUCT,
    payload: ""
  };
}

/**
|--------------------------------------------------
|  CATEGORIES
|--------------------------------------------------
*/

export const getBrands = () => {
  const request = axios
    .get(`${PRODUCT_SERVER}/brands`)
    .then(response => response.data);

  return {
    type: GET_BRANDS,
    payload: request
  };
};

export const getWoods = () => {
  const request = axios
    .get(`${PRODUCT_SERVER}/woods`)
    .then(response => response.data);

  return {
    type: GET_WOODS,
    payload: request
  };
};
