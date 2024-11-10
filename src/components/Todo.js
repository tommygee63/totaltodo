import React from 'react';
import { useState, useRef } from 'react';

export function Todo({item}) {
    const [isChecked, setIsChecked] = useState(false);
    const ref = useRef();
    const toCheck = useRef();

    function handleClick() {

        if (isChecked === true) {
            ref.current.style.backgroundColor = 'black';
            toCheck.current.style.textDecoration = 'none';
            setIsChecked(!isChecked);
        } else {
            ref.current.style.backgroundColor = '#0C0';
            toCheck.current.style.textDecoration = 'line-through';
            setIsChecked(!isChecked);
        }
    };

    return (
        <>
        <p ref={toCheck} className='item' >{item}</p> <button ref={ref} className='checkbox' onClick={handleClick} ></button><br/>
        </>
    )

}