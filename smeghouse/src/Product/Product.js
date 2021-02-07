import React from "react";
import { useParams, Link } from "react-router-dom";

import { StockButton } from "../StockButton/StockButton";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
import "./Product.css";

export const Product = (props) => {
  const {productId} = useParams();
  const product = props.products.find((product) => product.id == productId);

  return (
    <main className="product">
      <article>
        <div className="cart">
          <Link
            to="/products"
            className="cart__arrow-back"
            title="Вернуться к списку"
            rel="noopener noreferrer"
          >
            &larr;<span>Back to list</span>
          </Link>
          <div className="cart__image">
            <img src={product.url} alt="Изображение товара"/>
            <FavoriteButton select={product.select} article={product.article} dispatch={props.dispatch}/>
          </div>
          <div className="cart__info">
            <div className="cart__title">
              <h2>{product.name}</h2>
              <p>артикул {product.article}</p>
            </div>
            <div className="cart__price">
              <span>{product.price} Br</span>
            </div>
            <div>
              <StockButton className="cart__button" article={product.article} inStock={product.inStock} dispatch={props.dispatch} />
            </div>
            <div className="cart__description">
              <h4>Описание</h4>
              <p>Цвет: {product.description.color}</p>
              <p>Материал: {product.description.body}</p>
              <p>Объем: {product.description.volume} л</p>
              <p>Размеры: {product.description.size} мм</p>
              {product.description.speed ? <p>Скорости: {product.description.speed}</p> : null}
              {product.description.levels ? <p>Уровни: {product.description.levels}</p> : null}
              {product.description.temperature ? <p>Температура: {product.description.temperature}&deg;</p> : null}
              {product.description.filters ? <p>Фильтры: {product.description.filters}</p> : null}
              {product.description.rotate ? <p>Вращение: {product.description.rotate}&deg;</p> : null}
              <p>Мощность: {product.description.power} кВт</p>
              <p>Подсветка: {product.description.light ? " да" : " нет"}</p>
              <p>Дополнительно: {product.description.additionally}</p>
              <p>Производитель: {product.description.producer}</p>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
};
