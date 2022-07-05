import React from 'react';
import CartIcon from '../Cart/Cart';
import classes from './HeaderCartButton.module.css';
const HeaderCartButton = ({ badge }) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span>3</span>
    </button>
  );
};

export default HeaderCartButton;
