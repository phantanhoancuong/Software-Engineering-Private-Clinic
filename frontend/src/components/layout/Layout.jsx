import React from "react";

import "./layout.css";

import { Header } from "../index";
import { Outlet } from "react-router-dom";

class Layout extends React.Component {
  render() {
    return (
      <div className="layout">
        <Header />
        <div className="layout-page">
          <div className="page">
            <Outlet />
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
