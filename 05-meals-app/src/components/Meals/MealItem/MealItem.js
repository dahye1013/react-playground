import React, { useContext } from 'react';

import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

const MealItem = ({ meal }) => {
  const cartContext = useContext(CartContext);
  const { id, name, description, price } = meal;
  const computedPrice = `${price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartContext.addItem({ id, name, amount, price });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{computedPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
