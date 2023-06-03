import React from "react";

import "./layout.css";

import { HeaderUser, Navbar } from "../index";
import { Outlet } from "react-router-dom";

class LayoutUser extends React.Component {
  render() {
    return (
      <div className="layout">
        <HeaderUser title={this.props.pageTitle} />
        <div className="layout-page">
          <Navbar />
          <div className="page">
            <p>{this.props.pageTitle}</p>
            <Outlet />
          </div>
        </div>
      </div>
    );
  }
}

export default LayoutUser;
