import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../app/todoSlice';

export function FormSubmitButton({setName, setTodoItems, name, todoItems}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleClick(e) {
        e.preventDefault();

        let id = uuidv4();

        dispatch(addTodo({
            name: name,
            id: id,
            items: todoItems
        }));
        setName('')
        setTodoItems([])
        navigate('/')
    };

    return <button onClick={handleClick} className='submit' >Create To Do</button>
};