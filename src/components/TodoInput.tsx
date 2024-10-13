// src/components/TodoInput.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Todo, Priority } from '../types/types.ts';

interface TodoInputProps {
  addTodo: (todo: Todo) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
  const [text, setText] = useState<string>('');
  const [priority, setPriority] = useState<Priority>(Priority.Medium);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handlePriorityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPriority(e.target.value as Priority);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        text,
        completed: false,
        priority,
      };
      addTodo(newTodo);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange} placeholder="Nueva tarea" />
      <select value={priority} onChange={handlePriorityChange}>
        {Object.values(Priority).map((p) => (
          <option key={p} value={p}>
            {p}
          </option>
        ))}
      </select>
      <button type="submit">Agregar</button>
    </form>
  );
};

export default TodoInput;
