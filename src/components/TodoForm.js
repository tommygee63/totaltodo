import React from 'react';

export function TodoForm({handleSubmit, handleNameChange, handleItemChange, handleClick, name, todoItems, item}) {
    return (
        <form onSubmit={handleSubmit} >
            <h2>{name}</h2>
            {!todoItems ? null : <ul>
                {todoItems.map((item, index) => {
                    return <li key={index} >{item}</li>
                })}
            </ul> }
            <input type='text' value={name} onChange={handleNameChange} placeholder='Name your To do...' />
            <br/>
            <input type='text' value={item} onChange={handleItemChange} placeholder='Add an item...' />
            <br/>
            <button onClick={handleClick} >Add To do Item</button>
            <br/>
            <input type='submit' value='Create To do' className='submit' />
        </form>
    )
};