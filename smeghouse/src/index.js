import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducers/reducer";
import App from "./App";
import "./index.css";
import { getAllProducts, getAllFilters } from "./api/requests";

const store = createStore(reducer);

const initStateData = async () => {
  const products = await getAllProducts();
  const filters = await getAllFilters();

  store.dispatch({
    type: "SET_STATE",
    payload: {
      data: {products: products, filters: filters}
    }
  });
};

initStateData();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App/>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
