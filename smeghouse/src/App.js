import React from "react";
import { connect } from "react-redux";

import "./App.css";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import { Footer } from "./Footer/Footer";

function App(props) {
  console.log('app',{...props.products});
  return (
    <React.Fragment>
      <Header />
      <Main products={props.products} />
      <Footer />
    </React.Fragment>
  );
}

const mapStateToProps = function (state) {
  return {
    products: state
  }
};

export default connect(mapStateToProps)(App);
