import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "./reducers/reducer";
import { initState } from "./reducers/actions";
import { getData } from "./api/requests";
import App from "./app/App";
import "./index.css";

const store = createStore(reducer);

(async function initStateData() {
  const data = {
    products: await getData("products"),
    filters: await getData("filters"),
    contacts: await getData("contacts")
  };

  store.dispatch(initState(data));
})();

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
