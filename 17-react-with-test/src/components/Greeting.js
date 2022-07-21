import { useState } from 'react';

import Output from './Output';
const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };
  return (
    <>
      <h2>Hello World</h2>
      {!changedText && <Output> 'good to see you'</Output>}
      {changedText && <Output>'Hi, this is dahye'</Output>}
      <p>learn react</p>
      <button onClick={changeTextHandler}>Change</button>
    </>
  );
};

export default Greeting;
