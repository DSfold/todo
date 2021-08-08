import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./constants";

const initialState = {
  todos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== action.payload)],
      };
    case EDIT_TODO:
      const { payload } = action;
      const { id, title } = payload;

      const newArr = [...state.todos];
      const idx = state.todos.findIndex((todo) => todo.id === id);

      if (idx !== -1) {
        newArr[idx] = {
          ...newArr[idx],
          title,
        };
      }

      return {
        ...state,
        todos: newArr,
      };
    default:
      return state;
  }
};

export default reducer;
