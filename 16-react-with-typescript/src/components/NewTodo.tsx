import React, { useRef, useContext } from 'react';
import classes from './NewTodo.module.css';

import { TodosContext } from '../store/todos-context';

const NewTodo: React.FC = () => {
  const todoContext = useContext(TodosContext);

  // useRef hook need to set the concrete type of ref
  // -> at the beginning there is no connection
  // => should set initial value as null
  // ref: https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const todoFormRef = useRef<HTMLFormElement>(null);

  // [React.FormEvent] special type of React event
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    todoContext.addTodo(enteredText);
    todoFormRef.current!.reset();
  };

  return (
    <form onSubmit={submitHandler} className={classes.form} ref={todoFormRef}>
      <label>Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
