import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducers/reducer";
import App from "./App";
import "./index.css";
import {getAllProducts, getAllFilters, getContacts} from "./api/requests";

const store = createStore(reducer);

const initStateData = async () => {
  /*const products = await getAllProducts();
  const filters = await getAllFilters();
  const contacts = await getContacts();*/
  const data = {
    products: await getAllProducts(),
    filters: await getAllFilters(),
    contacts: await getContacts()
  };

  store.dispatch({
    type: "SET_STATE",
    payload: {
      data: data
      /*data: {products: products, filters: filters, contacts: contacts}*/
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
