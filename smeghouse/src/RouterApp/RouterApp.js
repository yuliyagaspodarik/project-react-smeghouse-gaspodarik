import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import { Products } from "../Products/Products.js";
import { Favorite } from "../Favorite/Favorite.js";
import { Login } from "../Login/Login.js";
import { Main } from "../Main/Main.js";
import { Stock } from "../Stock/Stock.js";

export const RouterApp = () => (
  <Router>
    <React.Fragment>
      <nav>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/products">Каталог</Link>
          </li>
          <li>
            <Link to="/login">Авторизоваться</Link>
          </li>
          <li>
            <Link to="/favorite">Избранное</Link>
          </li>
          <li>
            <Link to="/stock">Корзина</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/products">
          <Products/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/favorite">
          <Favorite/>
        </Route>
        <Route path="/stock">
          <Stock/>
        </Route>
        <Route path="/">
          <Main/>
        </Route>
      </Switch>
    </React.Fragment>
  </Router>
);
