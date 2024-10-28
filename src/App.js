import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Root } from './pages/Root';
import { CreateTodo } from './pages/CreateTodo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Root />} />
        <Route path='todo/:todoTitle' element={null} />
        <Route path='createTodo' element={<CreateTodo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
