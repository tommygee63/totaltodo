import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../app/todoSlice';
import { useNavigate } from 'react-router-dom'; 
import { v4 as uuidv4 } from 'uuid';
import { TodoForm } from '../../components/TodoForm';
import { ListView } from '../../components/ListView';

export function CreateTodoForm() {
    const [todoItems, setTodoItems] = useState([]);
    const [item, setItem] = useState('')
    const [name, setName] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate();

    /*function handleSubmit(e) {
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
    };*/

    function handleNameChange(e) {
        setName(e.target.value);
    };

    function handleItemChange(e) {
        setItem(e.target.value);
    };

    function handleSubmit(e) {
        e.preventDefault()
        setTodoItems((prev) => {
            return [...prev, item];
        });
        setItem('');
    };


    return (
        <>
            <h2>{name}</h2>
            {!todoItems ? null : <ul>
                {todoItems.map((item, index) => {
                    return <ListView key={index} item={item} setTodoItems={setTodoItems} />
                })}
            </ul> }
            <TodoForm 
        handleSubmit={handleSubmit} 
        handleNameChange={handleNameChange} 
        handleItemChange={handleItemChange} 
        name={name}
        item={item}
             />
        </>
    )
};