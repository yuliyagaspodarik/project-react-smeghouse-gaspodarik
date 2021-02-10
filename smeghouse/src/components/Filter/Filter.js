import React from "react";

import { toggleAll, toggleFilter } from "../../store/actions";
import abc from "../../api/helpers";
import "./Filter.css";

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeAll = this.handleChangeAll.bind(this);
    this.input = React.createRef();
  }

  handleChange(event) {
    this.props.dispatch(toggleFilter(event.target));
    if (!event.target.checked && this.input.current.checked) this.input.current.checked = !this.input.current.checked;
  }

  handleChangeAll() {
    this.props.dispatch(toggleAll(this.input.current.checked));
  }

  render() {
    return (
      <div className="catalog__categories">
        <h2>Категории</h2>
        <label className="catalog__categories-item">
          <input
            type="checkbox"
            ref={this.input}
            onChange={this.handleChangeAll}
          />
          Все
        </label>
        <ul>
          {this.props.filters.sort(abc).map((filter) => (
            <li key={filter.name}>
              <label className="catalog__categories-item">
                <input
                  type="checkbox"
                  name={filter.name}
                  checked={filter.checked}
                  onChange={this.handleChange}
                />
                {filter.name}
              </label>
            </li>))}
        </ul>
      </div>
    )
  }
}

export default Filter;
