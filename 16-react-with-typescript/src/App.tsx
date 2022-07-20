import React, { useState } from 'react';

import Todos from './components/Todos';
import NewTodo from './components/NewTodo';

import Todo from './models/todo';

import './App.css';

const App = () => {
  /**
   * - useState out of box is generic function
   * - can set type of data
   */
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (id: string) => {
     setTodos((prevTodos) => {
      return prevTodos.filter((todo) => id !== todo.id);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos todos={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
};

export default App;
