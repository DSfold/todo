import React from 'react'
import 'antd/dist/antd.css';
import { Card } from 'antd';

export const TodoItem = (todo) => {

    const currentDate = new Date().toLocaleString();
    

    return (
        <div>
            <Card title={todo.title} style={{ width: '45%', margin: 'auto', marginBottom:'5px'}}> 
                 {currentDate}
            </Card>
        </div>
    )
}
