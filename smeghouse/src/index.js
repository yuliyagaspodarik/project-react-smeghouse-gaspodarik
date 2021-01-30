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

store.dispatch({
  type: "SET_STATE",
  payload: {
    state: {
      ...getAllProducts()
      //...products
    }
  }
});

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
