import React from "react";
import { Link } from "react-router-dom";

import { checkCategory } from "../../store/actions";
import "./Home.css";

function Home(props) {
  return (
    <main>
      <div className="dashboard">
        <div className="dashboard__categories dashboard__categories_left">
          <div className="dashboard__title">
            <h3>Мелкая</h3>
            <h4>бытовая техника</h4>
          </div>
          <ul>
            {props.filters.slice(0, props.filters.length / 2 + 1).map((filter) => (
              <li className="dashboard__category" key={`l -${filter.name}`}>
                <Link
                  to="/products"
                  title={`Перейти в раздел ${filter.name}`}
                  onClick={() => props.dispatch(checkCategory(filter.name))}
                  rel="noopener noreferrer"
                >
                  {filter.name}
                </Link>
              </li>))}
          </ul>
        </div>
        <div className="dashboard__categories dashboard__categories_right">
          <div className="dashboard__title">
            <h3>Крупная</h3>
            <h4>бытовая техника</h4>
          </div>
          <ul>
            {props.filters.slice(props.filters.length / 2 + 1, props.filters.length).map((filter) => (
              <li className="dashboard__category" key={`r -${filter.name}`}>
                <Link
                  to="/products"
                  title={`Перейти в раздел ${filter.name}`}
                  onClick={() => props.dispatch(checkCategory(filter.name))}
                  rel="noopener noreferrer"
                >
                  {filter.name}
                </Link>
              </li>))}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Home;

