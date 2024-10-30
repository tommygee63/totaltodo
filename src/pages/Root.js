import React from 'react';
import { Header} from '../features/Header/Header';
import { Outlet } from 'react-router-dom';

export function Root() {
    return (
        <>
            <header>
                <Header />
            </header>

            <main>
                <Outlet />
            </main>
        </>
    )
};