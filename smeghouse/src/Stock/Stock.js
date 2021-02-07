import React from 'react';

import { VisibleProductsList } from "../VisibleProductsList/VisibleProductsList";
import "./Stock.css";

export const Stock = (props) => (
  <main>
    <h2 className="stock__title">Корзина</h2>
    <VisibleProductsList {...props} products={props.stock} />
  </main>
);
