import React from "react";

import "./ProductsList.css";
import { Filter } from "../Filter/Filter";
import { VisibleProductsList } from "../VisibleProductsList/VisibleProductsList";

export const ProductsList = (props) => {
  console.log('products', props.searchedProducts);
  return (
    <div className="catalog">
      <Filter {...props} />
      <VisibleProductsList products={props.searchedProducts.length !== 0 ? props.searchedProducts : props.products} />
    </div>
  )
};
