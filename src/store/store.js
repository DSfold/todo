import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { todoReducer } from "./todoReducer";
import { alertReducer } from "./alertReducer";
import  thunk  from 'redux-thunk'

const rootReducer = combineReducers({
    todos: todoReducer,
    alert: alertReducer
})

const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));




export default store;