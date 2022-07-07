import React, { useContext } from 'react';

import CartItem from './CartItem';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';

const Cart = ({ onClose }) => {
  const cartContext = useContext(CartContext);
  const totalPrice = `${cartContext.totalPrice}`;
  const hasItems = cartContext.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const carItems = (
    <ul className={classes['cart-items']}>
      {cartContext.items.map((item) => (
        // [pre-config] bind null for future execution. partial application
        // ref: https://ko.javascript.info/bind#ref-435
        <CartItem
          key={item.id}
          item={item}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        >
          {item.name}
        </CartItem>
      ))}
    </ul>
  );
  return (
    <Modal onClose={onClose}>
      {carItems}
      <div className={classes.total}>
        <span>Total Price</span>
        <span>{totalPrice}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onClose}>
          Close
        </button>
        {hasItems && <button className={classes['button']}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
