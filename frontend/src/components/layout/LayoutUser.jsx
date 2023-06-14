import React from "react";

import "./layout.css";

import { HeaderUser, Navbar } from "../index";
import { Outlet } from "react-router-dom";

class LayoutUser extends React.Component {
  state = {
    pageTitle: "",
  };

  handleCallback = (childData) => {
    this.setState({ pageTitle: childData });
  };

  render() {
    const { pageTitle } = this.state;
    return (
      <div className="layout">
        <HeaderUser title={pageTitle} />
        <div className="layout-page">
          <Navbar />
          <div className="page">
            <p>{pageTitle}</p>
            <Outlet context={[this.handleCallback]} />
          </div>
        </div>
      </div>
    );
  }
}

export default LayoutUser;
