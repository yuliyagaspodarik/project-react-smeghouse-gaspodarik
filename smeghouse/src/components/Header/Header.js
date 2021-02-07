import React from "react";
import { Link } from "react-router-dom";

import Search from "./Search/Search";
import "./Header.css";

function Header(props) {
  return (
    <header>
      <div className="header">
        <p className="header__title"><span>Smeg</span>house</p>
        <nav>
          <ul className="header__menu">
            <li><Link to="/" rel="noopener noreferrer" title="Перейти на главную">Главная</Link></li>
            <li><Link to="/products" rel="noopener noreferrer" title="Перейти к списку продуктов">Каталог</Link></li>
            <li><Search dispatch={props.dispatch} /></li>
          </ul>
          <ul className="header__buttons">
            <li><Link to="/login" className="fa fa-user" rel="noopener noreferrer" title="Авторизоваться" /></li>
            <li><Link to="/favorite" className="fa fa-heart" rel="noopener noreferrer" title="Избранное"/></li>
            <li>
              <Link to="/stock" className="fa fa-shopping-cart" rel="noopener noreferrer" title="Корзина">
                <span className="header__stock">{props.stock.length !== 0 ? props.stock.length : null}</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
