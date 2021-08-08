import { SHOW_ALERT, HIDE_ALERT } from "./constants";

const initialState = {
  alert: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        alert: action.payload,
      };
    case HIDE_ALERT:
      return {
        ...state,
        alert: null,
      };
    default:
      return state;
  }
};

export default reducer;
