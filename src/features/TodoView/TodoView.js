import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { todosSelector } from '../../app/todoSlice';

export function TodoView() {

    const {todoId} = useParams()
    const todos = useSelector(todosSelector);
    const todo = todos.find((todo) => todo.id === todoId);

    return (
        <div>
            <h2>{todo.name}</h2>
            {todo.items.map((item, index) => {
                return <p key={index} >{item}</p>
            })}
        </div>
    )
};