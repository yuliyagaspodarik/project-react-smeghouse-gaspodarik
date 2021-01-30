import React from "react";

import "./App.css";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import { Footer } from "./Footer/Footer";

function App(props) {
  return (
    <React.Fragment>
      <p>App {props.products}</p>
      <Header />
      <Main {...props} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
