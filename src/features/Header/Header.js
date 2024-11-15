import React from 'react'
import { Link } from 'react-router-dom';
import { ForwardButton } from '../../components/ForwardButton';
import { BackButton } from '../../components/BackButton';

export function Header() {
    return(
        <>
        <BackButton />
        <Link to='/' className='link' ><h1>-- Total To Do --</h1></Link>
        <ForwardButton />
        </>
    )
};