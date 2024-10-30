import React from 'react';
import { useSelector } from 'react-redux';
import { todosSelector } from '../../app/todoSlice';
import { CreateTodoButton } from '../../components/CreateTodoButton';
import { NoTodos } from '../../components/NoTodos';
import { TodoPreview } from '../../components/TodoPreview';

export function AllTodos() {

    const todos = useSelector(todosSelector);


    if (todos.length === 0) {
        return (
            <div>
                <NoTodos />
                <CreateTodoButton />
            </div>
        )
    };

    return (
        <div>
            <div className='todoContainer' >
            {todos.map((todo, index) => {
                return <TodoPreview todo={todo} key={index} />
                })}
            </div>
            <CreateTodoButton />
        </div>
    )
};