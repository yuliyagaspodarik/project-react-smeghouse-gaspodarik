import React from "react";

import "./Search.css";

export const Search = (props) => {
  return (
    <label className="header__search">
      <span/>
      <input
        placeholder="Search"
        onChange={(event) => {  console.log('searh in header', event.target.value);
          props.dispatch({type: "SEARCH_PRODUCTS", payload: {data: event.target.value}})}}/>
    </label>
  )
};
