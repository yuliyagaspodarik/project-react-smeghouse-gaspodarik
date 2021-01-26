import React from "react";
import { useParams } from "react-router-dom";

export const Product = () => {
  let { productId } = useParams();
  return <h3>Product ID: {productId}</h3>
};
