import React from 'react';

/**
 * @description
 * [child evaluate sample2]
 * - no props component or props are primitive value case
 * -> output will never changed (state managed in app component)
 * -> in this case re-evaluate is waste
 *
 * check console without Memo
 */
const DemoOutput2 = ({ text }) => {
  console.log('[child] memoization demo2 evaluated');

  return <p>{text}</p>;
};

/**
 * [React.memo]
 * - check the new value for all those props and compare to previous value
 * - if the value of a prop changed this component re-executed
 *
 * - parent component changed, but prop value did not changed?
 * => component execution will be skipped
 *
 * - optimization in place
 * => avoids unnecessary re-rendering
 *
 * 중요🚨 !! but!! not using all component
 * -> optimization is comes at a cost
 * => whenever parent component is changed compare new props to previous props value
 * -> it's performance cost
 * => depends on number of props and complexity of component, number of child component
 *
 * [using good case]
 * - good for huge component tree
 * => with a lot for children, on a high level in the component tree
 * => in this case avoid unnecessary re-render cycles
 *
 * [not good case]
 * - if parent state changed, and props values are going to change
 * -> child need re-evaluation
 * => memo not make sense
 * - small app, small render tree? -> useless
 */
export default React.memo(DemoOutput2);
