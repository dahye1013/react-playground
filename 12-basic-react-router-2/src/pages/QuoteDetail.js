import React, { useEffect } from 'react';
import { Route, Link, useParams, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';

import useHttp from '../hooks/useHttp';
import { getSingleQuote } from '../lib/api';

const QuoteDetail = () => {
  const { sendRequest, status, data: loadedSingleQuote, error } = useHttp(getSingleQuote, true);
  // [useRouteMatch] not about url , internally managed data React router. can find current definition of link
  const match = useRouteMatch();
  const params = useParams();

  const { quoteId } = params;

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === 'error') {
    return <p className="centered">{error}</p>;
  }

  if (!loadedSingleQuote) {
    return <p>not found quote</p>;
  }

  return (
    <React.Fragment>
      <h1>Quote Detail Page</h1>
      <p>{quoteId}</p>
      <HighlightedQuote text={loadedSingleQuote.text} author={loadedSingleQuote.author} />
      {/* conditionally render different content based on the URL 
       -> without manage some complex state 
       reference - https://v5.reactrouter.com/web/example/nesting
      */}
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comment
          </Link>
        </div>
      </Route>
      {/* load components dynamic */}
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </React.Fragment>
  );
};

export default QuoteDetail;
