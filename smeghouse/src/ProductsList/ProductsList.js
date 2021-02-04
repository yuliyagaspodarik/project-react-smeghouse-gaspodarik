import React from "react";

import "./ProductsList.css";
import { Filter } from "../Filter/Filter";
import { VisibleProductsList } from "../VisibleProductsList/VisibleProductsList";

export const ProductsList = ({ products, filters, searchedProducts }) => {
  return (
    <div className="catalog">
      <Filter filters={filters} />
      <VisibleProductsList products={searchedProducts.length !== 0 ? searchedProducts : products} />
    </div>
  )
};
