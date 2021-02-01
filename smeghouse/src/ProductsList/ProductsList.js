import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

import "./ProductsList.css";
import {Product} from "../Product/Product.js";

export const ProductsList = (props) => {
  console.log('products', props);
  let match = useRouteMatch();

  return (
    <div className="catalog">
      <div className="catalog__categories">
        <h3>Категории</h3>
        <ul>
          {props.filters.map((filter) => (
            <li key={filter}><label className="catalog__categories-item"><input type="checkbox" name={filter}/>{filter}
            </label></li>))}
        </ul>
      </div>
      <div className="catalog__products">
        <ul>
          {props.products.map((product) => (
            <li className="catalog__item" key={product.id}>
              <Link to={`${match.url}/${product.id}`}>{product.name}</Link>
            </li>))}
        </ul>
      </div>
    </div>
  )
};
