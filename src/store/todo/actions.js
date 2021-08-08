import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./constants";

export function addTodo(title) {
    return{
        type: ADD_TODO,
        payload: title,
    }
}

export function deleteTodo(itemId){
    return{
        type: DELETE_TODO,
        payload: itemId,
    }
}

export function editTodo(id, title){
    return{
        type: EDIT_TODO,
        payload: {
            id,
            title
        },
    }
}