// src/App.tsx
import React, { useState } from 'react';
import { Todo } from './types/types.ts';
import './styles/App.css'
import TodoList from './components/TodoList.tsx';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  function getTodos () {
    setTodos(todos)
  }


  return (
    <div>
      <h1>Lista de Tareas</h1>
      <input onKeyDown={getTodos}></input>
      <TodoList todos={todos}/>
    </div>
  );
};

export default App;

