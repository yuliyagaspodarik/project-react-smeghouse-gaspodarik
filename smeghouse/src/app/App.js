import React from "react";
import { connect } from "react-redux";

import Header from "../components/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import "./App.css";

function App(props) {
  return (
    <React.Fragment>
      <Header stock={props.stock} dispatch={props.dispatch} />
      <Main {...props} />
      <Footer contacts={props.contacts} />
    </React.Fragment>
  );
}

const mapStateToProps = function (state) {
  return {
    products: state.products,
    filters: state.filters,
    contacts: state.contacts,
    searchedProducts: state.searchedProducts,
    favorites: state.favorites,
    stock: state.stock
  }
};

export default connect(mapStateToProps)(App);
