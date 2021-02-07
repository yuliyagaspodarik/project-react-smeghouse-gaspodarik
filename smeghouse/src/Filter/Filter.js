import React from "react";

import { toggleAll, toggleFilter } from "../reducers/actions";
import { abc } from "../api/helpers";
import "./Filter.css";


export class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeAll = this.handleChangeAll.bind(this);
    this.input = React.createRef();
  }

  componentDidMount() {
    //this.input.current.checked = true;
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
        <h3>Категории</h3>
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
