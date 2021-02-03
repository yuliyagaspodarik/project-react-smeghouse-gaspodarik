import React from "react";

import "./StockButton.css";

export const StockButton = ({ className }) => (
  <button type="button" className={`button ${className}`}>В корзину</button>
);
