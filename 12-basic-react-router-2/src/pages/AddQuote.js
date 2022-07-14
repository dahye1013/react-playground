import React, { useEffect } from 'react';
// history of visited
import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';

import useHttp from '../hooks/useHttp';
import { addQuote } from '../lib/api';

const AddQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
    // pushes a new page on the stack of pages
    // go back from coming from
    history.push('/quotes');
    // if use replace -> redirect
  };

  useEffect(() => {
    // if success navigate away
    if (status === 'completed') {
      history.push('/quotes');
    }
  }, [status, history]); //history are never changed, but should add dependencies

  return (
    <React.Fragment>
      <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
    </React.Fragment>
  );
};

export default AddQuote;
