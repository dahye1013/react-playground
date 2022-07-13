import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';
const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <span className={classes.logo}>quote</span>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink activeClassName={classes.nav} to="/quotes">
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/addQuote">Add a Quote</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
