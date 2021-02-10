import React from "react";

import { addToFavorite } from "../../../store/actions";

function FavoriteButton(props) {
  return (
    <span
      className={!props.select ? "fa-heart-o" : "fa-heart"}
      onClick={() => props.dispatch(addToFavorite(props.article))}
    />
  );
}

export default FavoriteButton;
