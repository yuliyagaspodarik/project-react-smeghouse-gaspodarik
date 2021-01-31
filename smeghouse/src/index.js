import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./store/reducer";
import App from "./App";
import "./index.css";
import {getAllProducts} from "./api/requests";

const store = createStore(reducer);

const initStateData = async () => {
  const products = await getAllProducts();

  store.dispatch({
    type: "SET_STATE",
    payload: {
      data: products
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
