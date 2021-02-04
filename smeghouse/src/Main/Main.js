import React from "react";
import { Route, Switch } from "react-router-dom";

import { Products } from "../Products/Products";
import { Login } from "../Login/Login";
import { Favorite } from "../Favorite/Favorite";
import { Stock } from "../Stock/Stock";
import { Home } from "../Home/Home";
import {NotFound} from "../NotFound/NotFound";

export const Main = (props) => {
  return (
  <Switch>
    <Route exact path="/">
      <Home filters={props.filters}/>
    </Route>
    <Route path="/products">
      <Products products={props.products} filters={props.filters} searchedProducts={props.searchedProducts}/>
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/favorite">
      <Favorite />
    </Route>
    <Route path="/stock">
      <Stock />
    </Route>
    <Route>
      <NotFound/>
    </Route>
  </Switch>
)};
