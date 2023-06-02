import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

import { HeaderLogo } from "../index";

const Header = () => {
  return (
    <div className="header">
      <HeaderLogo link="/homepage"/>
      <div className="header_links">
        <div className="header_title">
          <Link to="/homepage" className="header_button">
            <p>TRANG CHỦ</p>
          </Link>
        </div>
        
        <div className="header_action">
          <Link to="/signUp" className="header_button">
            <p>SIGN UP</p>
          </Link>
          <Link to="/signIn" className="header_button">
            <p>SIGN IN</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
