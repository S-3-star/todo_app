import React from 'react'
import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import TodoItem from './TodoItem';

function TodoList() {
    const {todos}=useContext(TodoContext);
    console.log(todos);
    return (
    <div> 
        {todos.map((item)=>{
            return <TodoItem todo={item}/>;
        })}
    </div> 
);
}

export default TodoList
