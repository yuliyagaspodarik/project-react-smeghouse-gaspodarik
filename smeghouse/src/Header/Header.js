import {Link} from "react-router-dom";
import React from "react";

import "./Header.css";

export const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/products">Каталог</Link></li>
        <li><Link to="/login">Авторизоваться</Link></li>
        <li><Link to="/favorite">Избранное</Link></li>
        <li><Link to="/stock">Корзина</Link></li>
      </ul>
    </nav>
  </header>
);
