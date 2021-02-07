import React from "react";
import { Route, Switch } from "react-router-dom";

import { Products } from "../Products/Products";
import { Login } from "../Login/Login";
import { Favorite } from "../Favorite/Favorite";
import { Stock } from "../Stock/Stock";
import { Home } from "../Home/Home";
import { NotFound } from "../NotFound/NotFound";

export const Main = (props) => {
  return (
  <Switch>
    <Route exact path="/">
      <Home {...props} />
    </Route>
    <Route path="/products">
      <Products {...props} />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/favorite">
      <Favorite {...props} />
    </Route>
    <Route path="/stock">
      <Stock {...props} />
    </Route>
    <Route>
      <NotFound/>
    </Route>
  </Switch>
)};
