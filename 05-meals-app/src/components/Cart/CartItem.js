import classes from './CartItem.module.css';

const CartItem = ({ item, onAdd, onRemove }) => {
  const price = `$${item.price}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{item.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {item.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemove.bind(null, item.id)}>−</button>
        <button onClick={onAdd.bind(null, item)}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
