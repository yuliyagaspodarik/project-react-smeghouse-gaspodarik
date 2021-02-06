import React from "react";
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import "./Products.css";
import { Product } from "../Product/Product.js";
import { ProductsList } from "../ProductsList/ProductsList";

export const Products = (props) => {
  let match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={match.path}>
        <ProductsList {...props} />
      </Route>
      <Route path={`${match.path}/:productId`}>
        <Product products={props.products} />
      </Route>
    </Switch>
  )
};
