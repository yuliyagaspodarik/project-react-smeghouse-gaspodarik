import React from "react";

import { ProductPreview } from "../ProductPreview/ProductPreview";
import "./VisibleProductsList.css";

export const VisibleProductsList = (props) => {
  return (
    <div className="catalog__products">
      {props.products.map((product) => (
        <div className="catalog__product" key={product.id}>
          <ProductPreview product={product} {...props} />
        </div>))}
    </div>
  )
};
