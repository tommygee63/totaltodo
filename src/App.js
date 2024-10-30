import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Root } from './pages/Root';
import { CreateTodoForm } from './features/CreateTodoForm/CreateTodoForm';
import { TodoView } from './features/TodoView/TodoView';
import { AllTodos } from './features/AllTodos/AllTodos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Root />} > 
          <Route index element={<AllTodos />} />
          <Route path='/:todoId' element={<TodoView />} />
          <Route path='/createTodo' element={<CreateTodoForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
