import React from "react";

import Filter from "../Filter/Filter";
import VisibleProductsList from "../VisibleProductsList/VisibleProductsList";
import "./ProductsList.css";

function ProductsList(props) {
  return (
    <main>
      <div className="catalog">
        <Filter filters={props.filters} dispatch={props.dispatch} />
        <VisibleProductsList products={props.searchedProducts} dispatch={props.dispatch} />
      </div>
    </main>
  );
}

export default ProductsList;
