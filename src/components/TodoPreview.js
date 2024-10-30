import React from 'react';
import { Link } from 'react-router-dom';

export function TodoPreview({todo}) {
    return (
        <div className='todoPreview' >
            <h2>{todo.name}</h2>
            <Link to={todo.id} className='previewLink' >View</Link>
        </div>
    )
};