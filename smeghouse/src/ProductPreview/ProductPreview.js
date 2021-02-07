import React from "react";
import {Link} from "react-router-dom";

import "./ProductPreview.css";
import { StockButton } from "../StockButton/StockButton";
import {FavoriteButton} from "../FavoriteButton/FavoriteButton";

export const ProductPreview = (props) => {
  return (
    <section>
      <div className="cart-preview">
        <div className="cart-preview__image">
          <img src={props.product.url} alt="Изображение товара" />
          <FavoriteButton product={props.product} dispatch={props.dispatch}/>
        </div>
        <div className="cart-preview__description">
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
          <StockButton className={"cart-preview__button"} />
        </div>
      </div>
    </section>
  );
};
