// src/components/TodoList.tsx
import React from 'react';
import { Todo } from '../types/types.ts';

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => (
  <ul>
    {todos.map((todo) => (
      <li key={todo.id}>{todo.text}</li>
    ))}
  </ul>
);

export default TodoList;
