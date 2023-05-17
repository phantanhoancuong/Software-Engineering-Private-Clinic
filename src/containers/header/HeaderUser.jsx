import React from "react";
import "./headerUser.css";
import { Link } from "react-router-dom";

import logo from "../../assets/Logo - Color No BG.svg";
import { FaUserCircle } from "react-icons/fa";
import HeaderLogo from "./HeaderLogo";

const HeaderUser = () => {
  return (
    <div className="headerUser">
      <HeaderLogo />
      <div className="headerUser-links">
        {/*         
        <nav className="headerUser-links_logo">
          
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </nav>
           */}
        <div className="headerUser-title">
          <p>Title of current page here</p>
        </div>
      </div>

      <div className="headerUser-user">
        <p>Hello, 'insert User Here'</p>
        {/* <div className="headerUser-user_hello">
                <p>Hello, 'insert User Here'</p>
              </div> */}
        <div className="headerUser-user_logos">
          <FaUserCircle color="#fff" fontSize={40} />
        </div>
      </div>
    </div>
  );
};

export default HeaderUser;
