import React from "react";

import "./layout.css";

import { HeaderUser, Navbar } from "../index";

class Layout extends React.Component {
  render() {
    return (
      <>
        <HeaderUser title={this.props.pageTitle} />
        <div className="layout">
          <Navbar />
          <div className="page">
            <p>{this.props.pageTitle}</p>
            {this.props.children}
          </div>
        </div>
      </>
    );
  }
}

export default Layout;
