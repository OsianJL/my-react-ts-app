// src/components/TodoList.tsx
import React from 'react';
import { Todo } from '../types/types.ts';

interface TodoListProps {
  todoss: Todo[];
  toggleCompleted: (id: number) => void
}

const TodoList: React.FC<TodoListProps> = ({ todoss, toggleCompleted }) => (
  <ul>
    {todoss.map((todo) => (
      <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}> <input
      type="checkbox"
      checked={todo.completed}
      onChange={() => toggleCompleted(todo.id)}
    />{todo.text}</li>
    ))}
  </ul>
);

export default TodoList;
