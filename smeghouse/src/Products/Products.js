import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

import "./Products.css";
import {Product} from "../Product/Product.js";
import {ProductsList} from "../ProductsList/ProductsList";

export const Products = (props) => {
  let match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={match.path}>
        <ProductsList products={props.products} filters={props.filters}/>
      </Route>
      <Route path={`${match.path}/:productId`}>
        <Product/>
      </Route>
    </Switch>
  )
};
