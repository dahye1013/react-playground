import Card from './Card';
import useCounter from '../hooks/useCounter';

const ForwardCounter = () => {
  // `useCounter` state and effect will be tied to component
  // -> if custom hook in multiple components?
  // [O] every components receive own state
  // [X] not share state or effect across components
  const { counter } = useCounter();
  return <Card>{counter}</Card>;
};

export default ForwardCounter;
