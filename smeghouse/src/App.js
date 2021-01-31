import React from "react";
import { connect } from "react-redux";

import "./App.css";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import { Footer } from "./Footer/Footer";

function App(props) {
  console.log('app', props.products, props.filters);
  return (
    <React.Fragment>
      <Header />
      <Main products={props.products} filters={props.filters}/>
      <Footer />
    </React.Fragment>
  );
}

const mapStateToProps = function (state) {
  return {
    products: state.products,
    filters: state.filters
  }
};

export default connect(mapStateToProps)(App);
