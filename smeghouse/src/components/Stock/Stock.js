import React from "react";

import StockItem from "./StockItem/StockItem";
import "./Stock.css";

function Stock(props) {
  return (
    <main>
      {props.stock.length === 0 ? <p className="stock-message">Ваша корзина пуста</p> :
        <div className="stock-products">
          {props.stock.map((product) => <StockItem product={product} dispatch={props.dispatch} key={product.id} />)}
        </div>
      }
    </main>
  );
}

export default Stock;
