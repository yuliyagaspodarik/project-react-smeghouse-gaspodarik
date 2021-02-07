import React from "react";

import "./StockButton.css";
import {addToStock} from "../reducers/actions";

export const StockButton = (props) => (
  <button
    type="button"
    className={`${props.className} ${!props.inStock ? "button" : "button-changed"}`}
    onClick={() => props.dispatch(addToStock(props.article))}
  >
    {!props.inStock ? "В корзину" : "выложить"}
  </button>
);
