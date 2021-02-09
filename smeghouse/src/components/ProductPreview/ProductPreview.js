import React from "react";
import { Link } from "react-router-dom";

import StockButton from "../buttons/StockButton/StockButton";
import FavoriteButton from "../buttons/FavoriteButton/FavoriteButton";
import "./ProductPreview.css";

function ProductPreview(props) {
  return (
    <section id="product">
      <div id="cart-preview" className="cart-preview">
        <div id="cart-preview__image" className="cart-preview__image">
          <img src={props.product.url} alt="Изображение товара"/>
          <FavoriteButton
            select={props.product.select}
            article={props.product.article}
            dispatch={props.dispatch}
          />
        </div>
        <div id="cart-preview__description" className="cart-preview__description">
          <p>{props.product.price} Br</p>
          <h4>{props.product.name}</h4>
        </div>
        <div>
          <Link
            to={`/products/${props.product.id}`}
            className="cart-preview__link"
            title="Перейти на страницу товара"
            rel="noopener noreferrer"
          >
            подробнее
          </Link>
          <StockButton
            className="cart-preview__button"
            article={props.product.article}
            inStock={props.product.inStock}
            dispatch={props.dispatch}
          />
        </div>
      </div>
    </section>
  );
}

export default ProductPreview;
