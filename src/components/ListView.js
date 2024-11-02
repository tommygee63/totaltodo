import React from 'react';

export function ListView({item, setTodoItems}) {

    function handleClick() {
        setTodoItems((prev) => {
            return prev.filter(todo => todo !== item)
        })
    }

    return (
        <li>{item} <button onClick={handleClick} >Remove Item</button></li>
    )
};