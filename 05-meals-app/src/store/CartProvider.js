import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
  totalPrice: 0,
};

const calcTotalAmount = (items = []) => {
  return items.reduce((acc, cur) => acc + Number(cur['amount']), 0);
};
const calcTotalPrice = (items = []) => {
  return items.reduce((acc, cur) => acc + Number(cur['price']) * Number(cur['amount']), 0);
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const { item: addedItem } = action;
    const existingCartItem = state.items.find((item) => item.id === addedItem.id);

    const newItems = !existingCartItem
      ? state.items.concat(addedItem)
      : state.items
          .filter((item) => item.id !== addedItem.id)
          .concat({
            ...existingCartItem,
            amount: Number(existingCartItem.amount) + Number(addedItem.amount),
          });

    return {
      items: newItems,
      totalAmount: calcTotalAmount(newItems),
      totalPrice: calcTotalPrice(newItems),
    };
  }

  if (action.type === 'REMOVE') {
    const { id } = action;

    const existingCartItem = state.items.find((item) => item.id === id);
    const hasAmount = existingCartItem.amount > 1;
    const filteredCartItems = state.items.filter((item) => item.id !== id);
    const newItems = !hasAmount
      ? filteredCartItems
      : filteredCartItems.concat({
          ...existingCartItem,
          amount: (existingCartItem.amount -= 1),
        });

    return {
      items: newItems,
      totalAmount: calcTotalAmount(newItems),
      totalPrice: calcTotalPrice(newItems),
    };
  }

  return defaultCartState;
};

// allows to wrap any components that should be access to this context
const CartProvider = ({ children }) => {
  const [cartState, dispatchCartState] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartState({ type: 'ADD', item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartState({ type: 'REMOVE', id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    totalPrice: cartState.totalPrice,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
};

export default CartProvider;
