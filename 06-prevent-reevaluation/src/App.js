import React, { useState, useCallback } from 'react';

import Button from './components/UI/Button/Button';
import DemoOutput1 from './components/Demo/DemoOutput1';
import DemoOutput2 from './components/Demo/DemoOutput2';
import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  // [manage state]
  // - when state props, context changed that component will be re-evaluated and re-executed
  // - always coming down to state change
  console.log('App is evaluated!');

  /**
   * [useCallback]
   * - new function every time this parent component execution
   * - this function never changed can reuse same function
   * -> save function should not be created
   * => save function in memory
   *
   * (about dependencies)
   * - functions are closures
   * - they close over the values that are available in their environment
   * -> 'allowToggle' dependency can be changed
   * => when it changed keep in closure
   *
   */
  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((preShowParagraph) => !preShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Check evaluated</h1>
      <p>See the console</p>
      <DemoOutput1 show={showParagraph}></DemoOutput1>
      <DemoOutput2 text="HI! this is dahye" />
      <Button onClick={toggleParagraphHandler}>Click Me</Button>
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
    </div>
  );
}

export default App;
