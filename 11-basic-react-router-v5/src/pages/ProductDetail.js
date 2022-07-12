import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const params = useParams();
  console.log(params);
  return (
    <section>
      <h1>{params.productId}</h1>
    </section>
  );
};

export default ProductDetail;
