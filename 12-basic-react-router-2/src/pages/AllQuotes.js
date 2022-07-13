import React from 'react';

import QuoteList from '../components/quotes/QuoteList';

const DUMMY_DATA = [
  { id: 1, author: 'dahye', text: 'text1' },
  { id: 2, author: 'dayoung', text: 'text2' },
  { id: 3, author: 'daji', text: 'text3' },
];

const AllQuotes = () => {
  return (
    <div>
      <QuoteList quotes={DUMMY_DATA}></QuoteList>
    </div>
  );
};

export default AllQuotes;
