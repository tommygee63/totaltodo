import React from 'react';
import { useState } from 'react';
import { TodoForm } from '../../components/TodoForm';
import { ListView } from '../../components/ListView';
import { FormSubmitButton } from '../../components/FormSubmitButton';

export function CreateTodoForm() {
    const [todoItems, setTodoItems] = useState([]);
    const [item, setItem] = useState('')
    const [name, setName] = useState('')

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
             <FormSubmitButton setName={setName} setTodoItems={setTodoItems} name={name} todoItems={todoItems} />
        </>
    )
};