import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { Input } from 'antd';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { addTodo, showAlert } from '../store/actions'
import { Alert } from 'antd';

const NewTodo = (props) => {
    const [title, setTitle] = useState('');
    const titleHandler = (e) =>{
        setTitle(e.target.value)
    }

    const newTodoHandler = () =>{

        if(!title.trim()){

            return props.showAlert('Title cannot be empty')

        }
            const newTodo = {
            title, 
            id: Date.now().toString(),
        }
        props.addTodo(newTodo)
        setTitle('')
    }
    
    return (

        <div className ='addTodo'>
            {props.alert && <Alert
                message="Warning"
                description={props.alert}
                type="warning"
                showIcon
                closable
            />}
            <Input placeholder='Todo title' id='title' value={title} onChange={titleHandler} style={{width : '40%', margin: '15px'}}/>
            <Button type="primary" onClick={newTodoHandler}>Add</Button>
        </div>
    )
}

const mapDispatchToProps = {
    addTodo,
    showAlert
}

const mapStateToProps = state =>({
    alert: state.alert.alert
})

export default connect (mapStateToProps, mapDispatchToProps)(NewTodo);