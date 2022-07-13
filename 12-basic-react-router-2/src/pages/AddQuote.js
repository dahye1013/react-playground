import React from 'react';
// history of visited
import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';

const AddQuote = () => {
  const history = useHistory();
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    // pushes a new page on the stack of pages
    // go back from coming from
    history.push('/quotes');
    // if use replace -> redirect
  };
  return (
    <React.Fragment>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </React.Fragment>
  );
};

export default AddQuote;
