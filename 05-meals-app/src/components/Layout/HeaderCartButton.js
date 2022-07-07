import React, { useState, useEffect, useContext } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = ({ onClick }) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartContext = useContext(CartContext);
  const { items } = cartContext;
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return Number(curNumber) + Number(item.amount);
  }, 0);

  const buttonClass = `${classes.button} ${btnIsHighlighted && classes.bump}`;

  // not always add bump classes - only btnIsHighlighted
  useEffect(() => {
    if (items.length === 0) return;
    setBtnIsHighlighted(true);

    /**
     * [clean up]
     * - after bump animation is done
     * 1. reset button class name
     * 2. clean up timeout
     */
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={buttonClass} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
