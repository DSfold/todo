import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import todos from "./todo/reducer";
import alert from "./alert/reducer";
import search from "./search/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  todos,
  alert,
  search,
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
