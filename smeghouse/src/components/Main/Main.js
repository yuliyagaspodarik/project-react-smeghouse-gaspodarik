import React from "react";
import { Route, Switch } from "react-router-dom";

import Products from "../Products/Products";
import Login from "../Login/Login";
import Favorite from "../Favorite/Favorite";
import Stock from "../Stock/Stock";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";

function Main(props) {
  return (
    <Switch>
      <Route exact path="/">
        <Home filters={props.filters} dispatch={props.dispatch} />
      </Route>
      <Route path="/products">
        <Products {...props} />
      </Route>
      <Route path="/login">
        <Login {...props} />
      </Route>
      <Route path="/favorite">
        <Favorite favorites={props.favorites} dispatch={props.dispatch} />
      </Route>
      <Route path="/stock">
        <Stock stock={props.stock} dispatch={props.dispatch} />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Main;
