import React from 'react';
import mealsImage from '../../assets/meals.jpeg';
import classes from './Header.module.css';

const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <button>Cart</button>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="a table full of delicious food!"></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
