import React from "react";

import { addToFavorite } from "../reducers/actions";

export const FavoriteButton = (props) => {
  return (
    <span
      className={!props.product.select ? "fa-heart-o" : "fa-heart"}
      onClick={() => props.dispatch(addToFavorite(props.product.article))}
    />
  )
};
