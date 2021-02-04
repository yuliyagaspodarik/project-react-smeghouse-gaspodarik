import React from "react";
import { connect } from "react-redux";

import "./App.css";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import { Footer } from "./Footer/Footer";

function App(props) {
  return (
    <React.Fragment>
      <Header {...props} />
      <Main id="app-content" products={props.products} filters={props.filters} searchedProducts={props.searchedProducts} />
      <Footer contacts={props.contacts} />
    </React.Fragment>
  );
}

const mapStateToProps = function (state) {
  return {
    products: state.products,
    filters: state.filters,
    contacts: state.contacts,
    searchedProducts: state.searchedProducts
  }
};

export default connect(mapStateToProps)(App);
