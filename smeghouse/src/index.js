import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "./reducers/reducer";
import App from "./App";
import "./index.css";
import { getData } from "./api/requests";

const store = createStore(reducer);

const initStateData = async () => {
  const data = {
    products: await getData("products"),
    filters: await getData("filters"),
    contacts: await getData("contacts")
  };

  store.dispatch({
    type: "SET_STATE",
    payload: {
      data: data
    }
  });
};

initStateData();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
