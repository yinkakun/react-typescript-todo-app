import React from 'react';

interface TodoListProps {
  todos: { id: number; text: string }[];
  deleteTodo: (id: number) => void;
}

const TodoList = ({ todos, deleteTodo }: TodoListProps) => {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => deleteTodo(todo.id)}>delete</button>
        </li>
      ))}
    </ul>
  );
};

export { TodoList };
