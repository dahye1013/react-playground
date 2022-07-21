/**
 * Wrapper Component
 * - doesn't have own logic
 * -> cant test conjunction of components
 */

const Output = (props) => {
  return <p>{props.children}</p>;
};

export default Output;
