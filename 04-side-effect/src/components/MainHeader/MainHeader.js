import React, { useContext } from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';
import AuthContext from '../../store/auth-context';
const MainHeader = () => {
  const context = useContext(AuthContext);
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation isLoggedIn={context.isLoggedIn} onLogout={context.onLogout} />
    </header>
  );
};

export default MainHeader;
