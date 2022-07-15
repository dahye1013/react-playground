// sub package for link
import Link from 'next/link';
import { Fragment } from 'react';

const news = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          {/* default render an anchor element */}
          <Link href="/news/nextJs">NextJs is a good</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default news;
