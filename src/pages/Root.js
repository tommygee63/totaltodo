import React from 'react';
import { Header} from '../features/Header/Header';
import { AllTodos } from '../features/AllTodos/AllTodos';

export function Root() {
    return (
        <>
            <Header />
            <AllTodos />
        </>
    )
}