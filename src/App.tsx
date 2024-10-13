import React, { useState } from 'react';
import { Todo } from './types/types.ts';
import TodoInput from './components/todoInput.tsx'
import TodoList from './components/TodoList.tsx';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  console.log(todos)

  const addTodo = (todo: Todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const toggleCompleted = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todoss={todos} toggleCompleted = {toggleCompleted} />
    </div>
  );
};

export default App;

