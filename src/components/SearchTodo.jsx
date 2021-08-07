import React from 'react'
import { Input } from 'antd';
import 'antd/dist/antd.css';

const SearchTodo = (props) => {
    const { Search } = Input;

    return (
        <div>
             <Search placeholder="input search text"  style={{ width: 200, marginTop: '20px', marginLeft: '110em'}} />
        </div>
    )
}

export default SearchTodo;
