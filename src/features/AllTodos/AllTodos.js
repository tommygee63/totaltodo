import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { todosSelector } from '../../app/todoSlice';

export function AllTodos() {

    const todos = useSelector(todosSelector);

    return (
        <main>
            {!todos ? <Link to='/createTodo' >Create Todo</Link> : <div>
                {todos.map((todo) => {
                    return <div>
                        <h2>{todo.name}</h2>
                        <ul>
                            {todo.items.map((item) => {
                                return <li>{item}</li>
                            })}
                        </ul>
                    </div>
                })}
                <Link to='/createTodo' >Create Todo</Link>
            </div>}
        </main>
    )
}