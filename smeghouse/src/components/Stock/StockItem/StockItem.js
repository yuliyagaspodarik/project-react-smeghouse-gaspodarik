import React, { useState } from "react";

import ProductPreview from "../../ProductPreview/ProductPreview";
import "./StockItem.css";

function StockItem(props) {
  const [count, setCount] = useState(1);

  return (
    <div className="stock-products__item">
      <div className="stock-products__item-product">
        <ProductPreview
          product={props.product}
          dispatch={props.dispatch}
        />
      </div>
      <div className="stock-products__item-counter">
        <div className="quantity-counter">
          <button
            className="quantity-counter__button"
            disabled={count === 0}
            aria-label="Decrement value"
            onClick={() => setCount(count - 1)}
          >
            -
          </button>
          <div className="quantity-counter__content">
            {count}
          </div>
          <button
            className="quantity-counter__button"
            aria-label="Increment value"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>
        <div className="quantity-price">
          Стоимость: <span>{props.product.price * count} Br</span>
        </div>
      </div>
    </div>
  );
}

export default StockItem;
