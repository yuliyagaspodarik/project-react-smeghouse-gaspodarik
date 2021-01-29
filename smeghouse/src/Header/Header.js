import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

export const Header = () => (
  <header>
    <div className="header">
      <p className="header__title"><span>Smeg</span>house</p>
      <nav>
        <ul className="header__menu">
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/products">Каталог</Link></li>
          <li>
            <label className="header__search">
              <span />
              <input placeholder="Search"/>
            </label>
          </li>
        </ul>
        <ul className="header__buttons">
          <li><Link to="/login" className="fa fa-user"/></li>
          <li><Link to="/favorite" className="fa fa-heart"/></li>
          <li><Link to="/stock" className="fa fa-shopping-cart"/></li>
        </ul>
      </nav>
    </div>
  </header>
);
