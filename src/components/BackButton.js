import React from 'react';
import { useNavigate } from 'react-router-dom';

export function BackButton() {

    const navigate = useNavigate()

    function handleClick() {
        navigate(-1);
    }

    return (
        <button className='navigate' onClick={handleClick} >BACK</button>
    )
};