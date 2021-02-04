import React from "react";
import "./Filter.css";

export const Filter = ({ filters }) => (
  <div className="catalog__categories">
    <h3>Категории</h3>
    <ul>
      {filters.map((filter) => (
        <li key={filter}>
          <label className="catalog__categories-item"><input type="checkbox" name={filter}/>{filter}</label>
        </li>))}
    </ul>
  </div>
);
