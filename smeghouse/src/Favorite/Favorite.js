import React from "react";

import { VisibleProductsList } from "../VisibleProductsList/VisibleProductsList";
import "./Favorite.css";

export const Favorite = (props) => (
  <main>
    {props.favorites.length === 0 ? <p className="favorite-message">Список избранных товаров пуст</p> :
      <VisibleProductsList {...props} products={props.favorites}/>
    }
  </main>
);
