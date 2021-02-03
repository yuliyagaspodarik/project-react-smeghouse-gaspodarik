import React from "react";
import { Link } from "react-router-dom";

import "./ProductPreview.css";
import {StockButton} from "../StockButton/StockButton";

export const ProductPreview = ({ product }) => {
  return (
  <section>
    <div className="cart-preview">
      <div className="cart-preview__image">
        <img src={product.url} alt="Изображение товара" />
        <span className={!product.select ? 'fa-heart-o' : ' fa-heart'} />
    </div>
    <div className="cart-preview__description">
      <p>{product.price} Br</p>
      <h4>{product.name}</h4>
    </div>
    <div>
      <Link to={`/products/${product.id}`} className="cart-preview__link" title="Перейти на страницу товара">
        подробнее
      </Link>
      <StockButton className={"cart-preview__button"} />
    </div>
  </div>
  </section>
  );
};
