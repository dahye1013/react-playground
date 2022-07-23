import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            {/* className callback function executed in react router
              -> whenever navigation changes
            */}
            <NavLink to="/quotes" className={(navData) => (navData.isActive ? classes.active : '')}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new-quote"
              className={(navData) => (navData.isActive ? classes.active : '')}
            >
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
