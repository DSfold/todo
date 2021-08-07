import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { Card, Input } from 'antd';
import { connect } from 'react-redux';
import {deleteTodo, editTodo} from '../store/actions'
import { Button } from 'antd';
import 'antd/dist/antd.css';

const TodoItem = (props) => {
    const[editMode, setEditMode] = useState(false);
    const[title, setTitle] = useState(props.title)

    const activateEditMode = () =>{
        setEditMode(true);
    }
    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const deactivateEditMode = () =>{
        setEditMode(false);
        props.editTodo(props.id, title)
    }

    const handleDelete = () => {
        props.deleteTodo(props.id)
    }

    return (
        <div>
            <Card id={props.id} style={{ width: '45%', margin: 'auto', marginBottom:'5px'}}> 
                {!editMode && <span onDoubleClick={activateEditMode} style={{marginRight:'45em', fontWeight:'bolder', fontSize:'15px'}}>{props.title}</span>}
                {editMode && <Input autoFocus={true} onChange={handleChange} onBlur={deactivateEditMode} style={{width:'25em', marginRight:'45em', fontWeight:'bolder', fontSize:'15px'}} value={title}/>}
                <Button type="primary" danger onClick={handleDelete} style={{marginLeft: '50em'}}>Delete</Button>
            </Card>
        </div>
    )
}

const mapDispatchToProps = {
    deleteTodo,
    editTodo,
}

export default connect(null, mapDispatchToProps)(TodoItem);
