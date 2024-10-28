import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../app/todoSlice';
import { useNavigate } from 'react-router-dom'; 
import { v4 as uuidv4 } from 'uuid';

export function CreateTodoForm() {
    const [todoItems, setTodoItems] = useState([]);
    const [item, setItem] = useState('')
    const [name, setName] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleSubmit(e) {
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

    function handleNameChange(e) {
        setName(e.target.value);
    };

    function handleItemChange(e) {
        setItem(e.target.value);
    };

    function handleClick(e) {
        e.preventDefault()
        setTodoItems((prev) => {
            return [...prev, item];
        });
        setItem('');
    };

    return (
        <form onSubmit={handleSubmit} >
            <h2>{name}</h2>
            {!todoItems ? null : <ul>
                {todoItems.map((item, index) => {
                    return <li key={index} >{item}</li>
                })}
            </ul> }
            <input type='text' value={name} onChange={handleNameChange} placeholder='Name your Todo...' />
            <input type='text' value={item} onChange={handleItemChange} />
            <button onClick={handleClick} >Add Todo Item</button>
            <input type='submit' value='Create Todo' />
        </form>
    )
};