import { EDIT_SEARCH } from "./constants";

const initialState = {
  search: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_SEARCH:
      const { payload } = action;
      const { value = "" } = payload;

      return {
        ...state,
        search: value,
      };

    default:
      return state;
  }
};

export default reducer;
