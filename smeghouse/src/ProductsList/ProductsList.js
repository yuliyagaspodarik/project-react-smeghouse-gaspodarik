import React from "react";

import "./ProductsList.css";
import { ProductPreview } from "../ProductPreview/ProductPreview";

export const ProductsList = ({ products, filters }) => {
  return (
    <div className="catalog">
      <div className="catalog__categories">
        <h3>Категории</h3>
        <ul>
          {filters.map((filter) => (
            <li key={filter}><label className="catalog__categories-item"><input type="checkbox" name={filter}/>{filter}
            </label></li>))}
        </ul>
      </div>
      <div className="catalog__products">
        {products.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          // a должно быть равным b
          return 0;
        }).map((product) => (
          <div className="catalog__item" key={product.id}>
            <ProductPreview product={product}/>
          </div>))}
      </div>
    </div>
  )
};
