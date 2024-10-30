import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../app/todoSlice';
import { useNavigate } from 'react-router-dom'; 
import { v4 as uuidv4 } from 'uuid';
import { TodoForm } from '../../components/TodoForm';

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

    return <TodoForm 
        handleSubmit={handleSubmit} 
        handleNameChange={handleNameChange} 
        handleItemChange={handleItemChange} 
        handleClick={handleClick} 
        todoItems={todoItems}
        name={name}
        item={item}
    />
};