import React from "react";

import VisibleProductsList from "../VisibleProductsList/VisibleProductsList";
import "./Favorite.css";

function Favorite(props) {
  return (
    <main>
      {props.favorites.length === 0 ? <p className="favorite-message">Список избранных товаров пуст</p> :
        <VisibleProductsList products={props.favorites} dispatch={props.dispatch} />
      }
    </main>
  );
}

export default Favorite;
