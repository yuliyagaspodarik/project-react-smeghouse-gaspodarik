import React from "react";
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import "./Products.css";
import { Product } from "../Product/Product.js";
import { ProductsList } from "../ProductsList/ProductsList";

export const Products = ({ products, filters }) => {
  let match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={match.path}>
        <ProductsList products={products} filters={filters}/>
      </Route>
      <Route path={`${match.path}/:productId`}>
        <Product products={products}/>
      </Route>
    </Switch>
  )
};
