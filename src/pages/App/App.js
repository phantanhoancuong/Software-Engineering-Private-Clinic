import React from "react";

import { Footer, Header, Intro, AppointmentView } from "../../containers";
import { Navbar } from "../../components";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header /> 
      <Intro /> 
      <AppointmentView /> 

      {/* <AppointmentView /> */}
    </div>
  );
};

export default App;
