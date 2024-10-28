import React from 'react';
import { Header} from '../features/Header/Header';
import { CreateTodoForm } from '../features/CreateTodoForm/CreateTodoForm';

export function CreateTodo() {
    return (
        <>
            <Header />
            <CreateTodoForm />
        </>
    )
};