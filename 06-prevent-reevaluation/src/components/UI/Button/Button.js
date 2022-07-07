import React from 'react';

import classes from './Button.module.css';

const Button = ({ onClick, type, disabled, children }) => {
  return (
    <button
      type={type || 'button'}
      className={classes.button}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
