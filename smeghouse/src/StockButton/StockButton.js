import React from "react";

import "./StockButton.css";
import {addToStock} from "../reducers/actions";

export const StockButton = (props) => (
  <button
    type="button"
    className={`button ${props.className}`}
    onClick={() => props.dispatch(addToStock(props.article))}
  >
    В корзину
  </button>
);
