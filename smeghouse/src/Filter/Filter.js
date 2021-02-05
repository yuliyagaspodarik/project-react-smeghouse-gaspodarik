import React from "react";

import {toggleAll, toggleFilter} from "../reducers/actions";
import "./Filter.css";

export const Filter = (props) => {
  function handleChange(event) {
    props.dispatch(toggleFilter(event.target));
  }

  function handleChangeAll(event) {
    props.dispatch(toggleAll(event.target));
  }

  return (
    <div className="catalog__categories">
      <h3>Категории</h3>
      <label>
        <input
          type="checkbox"
          name="Все"
          onChange={handleChangeAll}
        />
        Все
      </label>
      <ul>
        {props.filters.map((filter) => (
          <li key={filter.name}>
            <label className="catalog__categories-item">
              <input
                type="checkbox"
                name={filter.name}
                checked={filter.checked}
                onChange={handleChange}
              />
              {filter.name}
            </label>
          </li>))}
      </ul>
    </div>
  )
};
