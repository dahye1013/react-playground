import React from 'react';
import type Todo from '../models/todo';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';
/**
 * [React.FC]
 * - generic type assignment
 * - type defined in this React package or to be precise by this typescriptreact package
 * -> own props, this functional component (with built-in based props like the children prop)
 * -> type FC<P = {}> = FunctionComponent<P>;
 *
 * - add angled bracket or after FC can define own props
 * -> create own generic function
 * => not generate new generic, using internally generic type
 * -- we can't let TypeScript infer that generic type
 * -> merge base object type, with the children property
 * @param props
 * @returns
 */

const Todos: React.FC<{ todos: Todo[]; onRemoveTodo: (id: string) => void }> = (props) => {
  return (
    <ul className={classes.todos}>
      {/* can use auto complication */}
      {props.todos.map((todo) => (
        // pre-config using by bind
        <TodoItem key={todo.id} todo={todo} onRemoveTodo={props.onRemoveTodo.bind(null, todo.id)} />
      ))}
    </ul>
  );
};

export default Todos;
