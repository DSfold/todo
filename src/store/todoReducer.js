import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./constants";

const initialState ={
    todos:[],
}

export const todoReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_TODO:
            return{
                ...state,
                todos: [...state.todos, action.payload],  
            }
            case DELETE_TODO:
                return{
                    ...state,
                   todos: [...state.todos.filter(todo=> todo.id !== action.payload)]
                }
            case EDIT_TODO:
                return{
                    ...state,
                    
            }    
        default:
            return state;
    }
   
};