import React, { useEffect } from 'react';

import QuoteList from '../components/quotes/QuoteList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import useHttp from '../hooks/useHttp';
import { getAllQuotes } from '../lib/api';

const AllQuotes = () => {
  const { sendRequest, data: loadedQuotes, status, error } = useHttp(getAllQuotes, true);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === 'error') {
    return <p className="centered focused">{error}</p>;
  }

  if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />;
  }

  return (
    <div>
      <QuoteList quotes={loadedQuotes}></QuoteList>
    </div>
  );
};

export default AllQuotes;
