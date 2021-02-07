import React from "react";

import "./ProductsList.css";
import { Filter } from "../Filter/Filter";
import { VisibleProductsList } from "../VisibleProductsList/VisibleProductsList";

export const ProductsList = (props) => {
  return (
    <main>
      <div className="catalog">
        <Filter {...props} />
        <VisibleProductsList {...props} products={props.searchedProducts} />
      </div>
    </main>
  )
};
