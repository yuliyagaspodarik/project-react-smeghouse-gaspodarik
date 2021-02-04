import React from "react";

import { ProductPreview } from "../ProductPreview/ProductPreview";
import "./VisibleProductsList.css"

export const VisibleProductsList = ({ products }) => {
  return (
    <div className="catalog__products">
      {products.map((product) => (
        <div className="catalog__product" key={product.id}>
          <ProductPreview product={product}/>
        </div>))}
    </div>
  )
};
