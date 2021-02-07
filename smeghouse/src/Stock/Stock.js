import React from "react";

import { StockItem } from "./StockItem/StockItem";
import "./Stock.css";

export const Stock = (props) => (
  <main>
    {props.stock.length === 0 ? <p className="stock-message">Ваша корзина пуста</p> :
      <div className="stock-products">
        {props.stock.map((product) => <StockItem product={product} dispatch={props.dispatch}/>)}
      </div>
    }
  </main>
);
