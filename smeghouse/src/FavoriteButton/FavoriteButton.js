import React from "react";

import { addToFavorite } from "../reducers/actions";

export const FavoriteButton = (props) => {
  return (
    <span
      className={!props.select ? "fa-heart-o" : "fa-heart"}
      onClick={() => props.dispatch(addToFavorite(props.article))}
    />
  )
};
