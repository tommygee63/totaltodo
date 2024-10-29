import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Root } from './pages/Root';
import { CreateTodo } from './pages/CreateTodo';
import { Todo } from './pages/Todo';
import { Index } from './pages/Index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Root />} > 
          <Route index element={<Index />} />
          <Route path='/:todoId' element={<Todo />} />
          <Route path='/createTodo' element={<CreateTodo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
