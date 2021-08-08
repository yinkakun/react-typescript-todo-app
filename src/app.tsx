import React, { useState } from 'react';
import './app.css';

import { TodoList } from './todo-list';
import { TodoForm } from './todo-form';

type Todo = { id: number; text: string };

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos(previousTodos => [
      ...previousTodos,
      { id: todos.length + 1, text },
    ]);
  };

  const deleteTodo = (id: number) => {
    setTodos(previousTodos => previousTodos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
