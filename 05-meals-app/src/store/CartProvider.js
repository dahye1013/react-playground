import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const { item: addedItem } = action;
    const existingCartItem = state.items.find((item) => item.id === addedItem.id);

    if (!existingCartItem) {
      return {
        items: state.items.concat(addedItem),
        totalAmount: Number(state.totalAmount) + Number(addedItem.amount),
        totalPrice: Number(state.totalPrice) + Number(addedItem.price),
      };
    }

    const filteredItems = state.items.filter((item) => item.id !== addedItem.id);
    return {
      items: [
        ...filteredItems,
        { ...existingCartItem, amount: Number(existingCartItem.amount) + Number(addedItem.amount) },
      ],
      totalAmount: Number(state.totalAmount) + Number(addedItem.amount),
      totalPrice: Number(state.totalPrice) + Number(addedItem.price),
    };
  }

  if (action.type === 'REMOVE') {
    const { id } = action;

    let existingCartItem = state.items.find((item) => item.id === id);
    existingCartItem = { ...existingCartItem, amount: (existingCartItem.amount -= 1) };

    const filteredItems = state.items.filter((item) => item.id !== id);
    return {
      items: [existingCartItem, ...filteredItems],
      totalAmount: (state.totalAmount -= 1),
      totalPrice: Number(state.totalPrice) + Number(existingCartItem.price),
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
