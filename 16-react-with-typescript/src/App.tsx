import React from 'react';

import TodosContextProvider from './store/todos-context';

import Todos from './components/Todos';
import NewTodo from './components/NewTodo';

import './App.css';

const App = () => {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
};

export default App;
