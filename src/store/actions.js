import { ADD_TODO, DELETE_TODO, EDIT_TODO, HIDE_ALERT, SHOW_ALERT } from "./constants";

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

export function editTodo(itemId, title){
    return{
        type: EDIT_TODO,
        payload: {
            itemId,
            title
        },
    }
}

export function showAlert(text) {
    return dispatch =>{
       dispatch({
        type: SHOW_ALERT,
        payload: text,
    })
    setTimeout(()=>{
        dispatch(hideAlert())
    }, 3000)
    }
}

export function hideAlert() {
    return{
        type: HIDE_ALERT,
    }
}

