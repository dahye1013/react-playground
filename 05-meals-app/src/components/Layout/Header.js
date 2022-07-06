import React, { Fragment } from 'react';
import mealsImage from '../../assets/meals.jpeg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = ({ onShowCart }) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={onShowCart}>Cart</HeaderCartButton>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="a table full of delicious food!"></img>
      </div>
    </Fragment>
  );
};

export default Header;
