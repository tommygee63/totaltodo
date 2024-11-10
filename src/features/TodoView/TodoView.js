import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { todosSelector } from '../../app/todoSlice';
import { CreateTodoButton } from '../../components/CreateTodoButton';
import { Todo } from '../../components/Todo';

export function TodoView() {

    const {todoId} = useParams()
    const todos = useSelector(todosSelector);
    const todo = todos.find((todo) => todo.id === todoId);

    return (
        <>
        <div className='todoView' >
            <h2>{todo.name}</h2>
            {todo.items.map((item, index) => {
                return <Todo item={item} key={index} />
            })}
        </div>
        <CreateTodoButton />
        </>
    )
};