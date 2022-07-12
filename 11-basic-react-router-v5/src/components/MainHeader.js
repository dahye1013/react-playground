import React from 'react';
/**
 * [NavLink]
 * - replace standard link
 * - create anchor tag
 * - prevents the browser default
 * - set css class on the active anchor tag
 */
import { NavLink } from 'react-router-dom';
/**
 * [Link]
 * prevent browser default and instead manually update URL
 * ( normal a tag reload page and lose app state )
 * -> kind of fake navigation
 */
// import { Link } from 'react-router-dom';

import classes from './MainHeader.module.css';
const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            {/* activeClassName -> when active special classes added */}
            <NavLink activeClassName={classes.active} to="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/products">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
