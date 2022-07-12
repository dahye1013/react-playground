import React from 'react';
import { Route } from 'react-router-dom';

/**
 * [nested router]
 * - can defined Route wherever
 * -> if they are on a component which is currently active, will be evaluated by React Router DOM
 * => defined here path active only this page
 *
 *  <Route path="/products"></Route> -> (X) not active
 *  <Route path="/welcome/products"></Route> -> (O) active
 *
 *
 */

const Welcome = () => {
  return (
    <section>
      <h1>Welcome</h1>
      {/* can define Route wherever */}
      <Route path="/welcome/new-user">
        <p>Welcome, new user</p>
      </Route>
    </section>
  );
};

export default Welcome;
