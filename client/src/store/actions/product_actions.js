import axios from "axios";
import {
  GET_PRODUCT_BY_SELL,
  GET_PRODUCT_BY_ARRIVAL,
  GET_BRANDS,
  GET_WOODS
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
