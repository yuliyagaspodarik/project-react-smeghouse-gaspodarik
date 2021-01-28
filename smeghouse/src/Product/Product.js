import React from "react";
import {useParams, Link} from "react-router-dom";

export const Product = () => {
  let {productId} = useParams();
  return (
    <React.Fragment>
      <h3>Product ID: {productId}</h3>
      <Link to="/products">Back to list</Link>
    </React.Fragment>
  )
};
