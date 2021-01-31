import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

import {Product} from "../Product/Product.js";

export const Products = (props) => {
  console.log('products', props);

  let match = useRouteMatch();

  return (
    <div>
      <h2>Products</h2>
      <ul>
        <li>
          <Link to={`${match.url}/1`}>Product 1</Link>
        </li>
        <li>
          <Link to={`${match.url}/2`}>Product 2</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/:productId`}>
          <Product/>
        </Route>
        <Route path={match.path}>
          <h3>Please use correct product</h3>
        </Route>
      </Switch>
    </div>)
};
