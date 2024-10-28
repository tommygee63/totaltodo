import React from 'react';
import { TodoView } from '../features/TodoView/TodoView';
import { Header } from '../features/Header/Header';

export function Todo() {
    return(
        <>
        <Header />
        <TodoView />
    </>
    )
}