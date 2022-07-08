import { useState, useEffect } from 'react';
/**
 * @description
 * custom hooks must start with 'use'
 * - hard rule have to follow
 * -> signals to react that it will be a custom hook
 * -> give react guarantee will use this function by respecting these rules of hooks
 *      (just as you use to build in hooks)
 * otherwise if using react hooks in custom hook and using custom hooks in wrong place
 * -> it would implicitly use to build in hooks
 * {@link https://ko.reactjs.org/docs/hooks-custom.html}
 *
 * - custom hook parameter can be indicator how to control this logic
 */

const useCounter = (forward = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + (forward ? +1 : -1));
    }, 1000);

    return () => clearInterval(interval);
  }, [forward]);

  return {
    counter,
  };
};

export default useCounter;
