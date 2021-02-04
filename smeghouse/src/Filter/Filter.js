import React from "react";

import { checkFilter } from "../reducers/actions";
import "./Filter.css";

export const Filter = (props) => {
  function handleClick(event) {
    props.dispatch(checkFilter(event.target));
  }

  console.log('filter', props.filters);
  return (
    <div className="catalog__categories">
      <h3>Категории</h3>
      <ul>
        {props.filters.map((filter) => (
          <li key={filter.name}>
            <label className="catalog__categories-item">
              <input
                type="checkbox"
                name={filter.name}
                onClick={handleClick}
              />
              {filter.name}
            </label>
          </li>))}
      </ul>
    </div>
  )
};
