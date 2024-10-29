import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { todosSelector } from '../../app/todoSlice';

export function AllTodos() {

    const todos = useSelector(todosSelector);

    return (
        <>
            {!todos ? <Link to='/createTodo' >Create Todo</Link> : <div>
                {todos.map((todo) => {
                    return <Link to={todo.id} key={todo.name} ><div>
                        <h2>{todo.name}</h2>
                        <ul>
                            {todo.items.map((item) => {
                                return <li key={item} >{item}</li>
                            })}
                        </ul>
                    </div></Link>
                })}
                <Link to='/createTodo' >Create Todo</Link>
            </div>}
        </>
    )
}