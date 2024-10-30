import React from 'react';
import { Link } from 'react-router-dom';

export function TodoPreview({todo}) {
    return (
        <Link to={todo.id} key={todo.id} ><div>
                    <h2>{todo.name}</h2>
                    <ul>
                        {todo.items.map((item) => {
                            return <li key={item} >{item}</li>
                        })}
                    </ul>
                    </div>
            </Link>
    )
};