import React from 'react';
import type Todo from '../models/todo';
import TodoItem from './TodoItem';
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

const Todos: React.FC<{ todos: Todo[] }> = (props) => {
  return (
    <ul>
      {/* can use auto complication */}
      {props.todos.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </ul>
  );
};

export default Todos;
