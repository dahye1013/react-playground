import React from 'react';
import { Route, Link, useParams, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_DATA = [
  { id: '1', author: 'dahye', text: 'text1' },
  { id: '2', author: 'dayoung', text: 'text2' },
  { id: '3', author: 'daji', text: 'text3' },
];

const QuoteDetail = () => {
  // [useRouteMatch] not about url , internally managed data React router. can find current definition of link
  const match = useRouteMatch();
  const params = useParams();
  console.log(match);
  const findQuote = DUMMY_DATA.find((item) => item.id === params.quoteId);

  if (!findQuote) {
    return <p>not found quote</p>;
  }

  return (
    <React.Fragment>
      <h1>Quote Detail Page</h1>
      <p>{params.quoteId}</p>
      <HighlightedQuote text={findQuote.text} author={findQuote.author} />
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
