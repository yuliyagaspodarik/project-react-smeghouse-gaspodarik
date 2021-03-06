import React from "react";
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import Product from "../Product/Product";
import ProductsList from "../ProductsList/ProductsList";

function Products(props) {
  let match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={match.path}>
        <ProductsList {...props} />
      </Route>
      <Route path={`${match.path}/:productId`}>
        <Product products={props.products} dispatch={props.dispatch} />
      </Route>
    </Switch>
  );
}

export default Products;
