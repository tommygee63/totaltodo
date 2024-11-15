import React from 'react';
import { useNavigate } from 'react-router-dom';

export function ForwardButton() {

    const navigate = useNavigate()

    function handleClick() {
        navigate(+1);
    }

    return (
        <button className='navigate' onClick={handleClick} >Forward</button>
    )
};