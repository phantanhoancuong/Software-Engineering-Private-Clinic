import React from "react";

import "./layout.css";

import { Header } from "../index";

class Layout extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="page">
          <p>{this.props.pageTitle}</p>
          {this.props.children}
        </div>
      </>
    );
  }
}

export default Layout;
