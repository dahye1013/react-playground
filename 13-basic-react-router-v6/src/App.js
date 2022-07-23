import { Route, Routes, Navigate, Link } from 'react-router-dom';

import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';
import NewQuote from './pages/NewQuote';
import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';
import Comments from './components/comments/Comments';

function App() {
  /**
   *
   * - don't need to pass pointer
   *  -> pass dynamic value to element : JSX Element
   * - internal changes evaluate path, picking a route to load changed
   *  -> v5 need exact,  v6 not need exact
   *  => always exact match
   *
   * - nested route changed
   *  -> start with nesting route
   */

  return (
    <Layout>
      <Routes>
        {/* push navigation to page on navigation stack before redirect  */}
        <Route path="/" element={<Navigate replace to="/quotes" />} />
        <Route path="/quotes" element={<AllQuotes />} />
        {/* dynamic routing */}
        <Route path="/quotes/:quoteId" element={<QuoteDetail />}>
          {/* Nested Route */}
          <Route
            path=""
            element={
              <div className="centered">
                <Link className="btn--flat" to={`comments`}>
                  Load Comments
                </Link>
              </div>
            }
          />
          <Route path={`comments`} element={<Comments />} />
        </Route>
        <Route path="/new-quote" element={<NewQuote />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
