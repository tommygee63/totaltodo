import React from 'react';

export function TodoForm({handleSubmit, handleNameChange, handleItemChange, name, item}) {
    return (
        <form onSubmit={handleSubmit} >
            <input type='text' value={name} onChange={handleNameChange} placeholder='Name your To do...' required />
            <br/>
            <input type='text' value={item} onChange={handleItemChange} placeholder='Add an item...' required />
            <br/>
            <input type='submit' value='Add To Do Item' />
            <br/>
        </form>
    )
};