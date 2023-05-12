import React from "react";

import { Footer, Header} from "./containers";
import { Navbar } from "./components";


import "./Setting.css";

const Setting = () => {
  return (
    <div className="Setting">
      <Header />
      <Intro />
      {/* <Footer /> */}
    </div>
  );
};

export default Setting;
