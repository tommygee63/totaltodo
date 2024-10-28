import React from 'react'
import { NavLink } from 'react-router-dom';

export function Header() {
    return (
        <header>
            <NavLink to='/' ><h1>Total Todo</h1></NavLink>
        </header>
    )
};