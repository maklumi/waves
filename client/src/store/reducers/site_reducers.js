import { LOGIN_USER } from "./types";

export default function(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state };

    default:
      return state;
  }
}
