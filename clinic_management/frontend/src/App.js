import React from "react";

import { Footer, Header, Intro } from "./containers";
import { Navbar } from "./components";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Navbar />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
