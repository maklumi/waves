import {
  GET_CART_ITEMS,
  REMOVE_CART_ITEM,
  ADD_TO_CART,
  ON_SUCCESS_BUY,
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  UPDATE_DATA_USER,
  CLEAR_UPDATE_USER_DATA,
  LOGOUT_USER
} from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    case REGISTER_USER:
      return { ...state, registerSuccess: action.payload };
    case AUTH_USER:
      return { ...state, userData: action.payload };
    case LOGOUT_USER:
      return { ...state };
    case ADD_TO_CART:
      return {
        ...state,
        userData: {
          ...state.userData,
          cart: action.payload
        }
      };
    case GET_CART_ITEMS:
      return { ...state, cartDetail: action.payload };
    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartDetail: action.payload.cartDetail,
        userData: {
          ...state.userData,
          cart: action.payload.cart
        }
      };
    case ON_SUCCESS_BUY:
      return {
        ...state,
        successBuy: action.payload.success,
        userData: {
          ...state.userData,
          cart: action.payload.cart
        },
        cartDetail: action.payload.cartDetail
      };
    case UPDATE_DATA_USER:
      return { ...state, updateUser: action.payload };
    case CLEAR_UPDATE_USER_DATA:
      return { ...state, updateUser: action.payload };
    default:
      return state;
  }
}
