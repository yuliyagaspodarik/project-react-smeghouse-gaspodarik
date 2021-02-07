import React from "react";

import { VisibleProductsList } from "../VisibleProductsList/VisibleProductsList";
import "./Favorite.css";

export const Favorite = (props) => {
  return (
    <main>
      <h2 className="favorite__title">Избранное</h2>
      <VisibleProductsList {...props} products={props.favorites} />
    </main>
  )
};
