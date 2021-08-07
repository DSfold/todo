import React from 'react'
import  TodoItem  from './TodoItem'
import { connect } from 'react-redux'

const TodoItemsList = ({todos}) => {
    if(!todos.length){
        return <h3>Nothing here...</h3>
    }
    return (
        <div>
            {todos.map(todo => <TodoItem title={todo.title} id={todo.id} key={todo.id}/>).reverse()}
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        todos: state.todos.todos
    }
}

export default connect(mapStateToProps, null)(TodoItemsList);
