/**
 * [Switch]
 * - only active one active route at the same time
 * -> otherwise find matched all components
 */
import { Route, Switch, Redirect } from 'react-router-dom';

import MainHeader from './components/MainHeader';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Welcome from './pages/Welcome';

/**
 * register routes with React Router
 * evaluates the URL
 * -> renders the correct components base on that URL.
 * kind of activate React Router
 */

const App = () => {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            {/* if visiting '/' or '/nothing' change the url to welcome */}
            <Redirect to="/welcome" />
          </Route>
          {/* component display only when url path is same  */}
          <Route path="/welcome">
            <Welcome />
          </Route>
          {/* only lead to a match, if have an exact match(full path) */}
          <Route path="/products" exact>
            <Products />
          </Route>
          {/* [dynamic segment] */}
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
