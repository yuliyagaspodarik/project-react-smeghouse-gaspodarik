import React from 'react';
import { useParams, Link } from "react-router-dom";

export const Product = ({ products }) => {
  const { productId } = useParams();
  const product = products.find((product) => product.id == productId);

  return (
    <main>
      <h3>Product ID: {productId}</h3>
      <p>{product.name}</p>
      <Link to="/products">Back to list</Link>
    </main>
  )
};
