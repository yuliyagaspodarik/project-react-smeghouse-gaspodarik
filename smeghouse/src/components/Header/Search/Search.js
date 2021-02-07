import React from "react";
import { useHistory } from "react-router-dom";

import { searchProducts } from "../../../reducers/actions";
import "./Search.css";

function Search(props) {
  const history = useHistory();

  function handleChange(event) {
    props.dispatch(searchProducts(event.target.value));
    history.push("/products");
  }

  return (
    <label className="header__search">
      <span/>
      <input
        placeholder="Search"
        onChange={handleChange}
      />
    </label>
  );
}

export default Search;
