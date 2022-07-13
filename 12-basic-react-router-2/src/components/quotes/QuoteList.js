import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuote = (quotes, isAsc) => {
  return quotes.sort((a, b) => {
    if (isAsc) {
      return a.id > b.id ? 1 : -1;
    }
    if (!isAsc) {
      return a.id < b.id ? 1 : -1;
    }
    return 0;
  });
};

const QuoteList = ({ quotes }) => {
  // manipulate browser history
  const history = useHistory();
  // currently loaded url
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get('sort') === 'asc';

  const sortedQuotes = sortQuote(quotes, isSortingAscending);

  const changeSortHandler = () => {
    /**
     * [history push]
     * - hold information
     * - actually rerender component, re evaluated
     * - two way
     */
    // 1.
    history.push({
      pathname: location.pathname,
      search: `?sort=${!isSortingAscending ? 'asc' : 'desc'}`,
    });
    // 2.
    // history.push(`${location.pathname}?sort=${!isSortingAscending ? 'asc' : 'desc'}`);
  };

  return (
    <React.Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortHandler}>
          Sort {!isSortingAscending ? 'Ascending' : 'Descending'}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem key={quote.id} id={quote.id} author={quote.author} text={quote.text} />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default QuoteList;
