import React from 'react';
import { Link } from 'react-router-dom';

export function TodoPreview({todo}) {

    return (
        <Link className='todoPreview' to={todo.id} >
            <h2>{todo.name}</h2>
            {todo.items.map((item, index) => {
                return <p key={index} >{item}</p>
            })}
        </Link>
    )
};