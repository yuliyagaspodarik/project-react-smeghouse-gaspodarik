import React from "react";
import { Route, Switch } from "react-router-dom";

import { Products } from "../Products/Products";
import { Login } from "../Login/Login";
import { Favorite } from "../Favorite/Favorite";
import { Stock } from "../Stock/Stock";
import { Home } from "../Home/Home";

export const Main = () => (
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
      <Home/>
    </Route>
  </Switch>
);
