import React from "react";

import { addToStock } from "../../../store/actions";
import "./StockButton.css";

function StockButton(props) {
  return (
    <button
      type="button"
      className={`${props.className} ${!props.inStock ? "button" : "button-changed"}`}
      onClick={() => props.dispatch(addToStock(props.article))}
    >
      {!props.inStock ? "В корзину" : "выложить"}
    </button>
  );
}

export default StockButton;
