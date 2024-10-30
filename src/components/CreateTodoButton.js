import React from 'react';
import { Link } from 'react-router-dom';

export function CreateTodoButton() {
    return <Link to='/createTodo' className='newTodo' >Create New Todo</Link>
};