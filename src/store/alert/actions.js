import { HIDE_ALERT, SHOW_ALERT } from "./constants";


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