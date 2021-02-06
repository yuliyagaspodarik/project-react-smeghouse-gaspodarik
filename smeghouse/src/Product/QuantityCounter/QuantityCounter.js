import React, { useState } from "react";

import "./QuantityCounter.css";

export function QuantityCounter() {
  const [count, setCount] = useState(1);
  return (
    <div className="quantity-counter">
      <button
        className="quantity-counter__button"
        disabled={count === 0}
        aria-label="Decrement value"
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
      <div id="quantity-counter__content">
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
  )
}
