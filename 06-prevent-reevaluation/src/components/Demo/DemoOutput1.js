import React from 'react';

/**
 * @description
 * [child evaluate sample]
 * - when component rendered initially
 * - when state (props) changed
 * -> because child are part of parent function body
 * => when parent function runs, child component functions also run again
 * @param {show} boolean
 * @returns
 */
const DemoOutput1 = ({ show }) => {
  console.log('[child] demo1 evaluated');

  return <p>{show && 'Hi! This is dahye!'}</p>;
  // - p tag always exist, only content is updated
  // => dom not update whole things
};

export default DemoOutput1;
