import React from "react";
import { Link } from "react-router-dom";


import "./Header.css";

export const Header = (props) => {
  return (
    <header>
      <div className="header">
        <p className="header__title"><span>Smeg</span>house</p>
        <nav>
          <ul className="header__menu">
            <li><Link to="/" rel="noopener noreferrer">Главная</Link></li>
            <li><Link to="/products" rel="noopener noreferrer">Каталог</Link></li>
            <li>
              <label className="header__search">
                <span/>
                <input
                  placeholder="Search"
                  onChange={(event) => {  console.log('searh in header', event.target.value);
                    props.dispatch({type: "SEARCH_PRODUCTS", payload: {data: event.target.value}})}}/>
              </label>
            </li>
          </ul>
          <ul className="header__buttons">
            <li><Link to="/login" className="fa fa-user" rel="noopener noreferrer"/></li>
            <li><Link to="/favorite" className="fa fa-heart" rel="noopener noreferrer"/></li>
            <li><Link to="/stock" className="fa fa-shopping-cart" rel="noopener noreferrer"/></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
