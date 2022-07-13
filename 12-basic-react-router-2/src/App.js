import { Switch, Route, Redirect } from 'react-router-dom';

import AllQuotes from './pages/AllQuotes';
import AddQuote from './pages/AddQuote';
import QuoteDetail from './pages/QuoteDetail';
import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/addQuote">
          <AddQuote />
        </Route>
        {/* wild card character signals to react router that any path URL 
          -> consider no router matched
        */}
        <Route path="/*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
