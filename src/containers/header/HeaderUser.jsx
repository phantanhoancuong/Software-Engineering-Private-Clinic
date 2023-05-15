import React from "react";
import "./headerUser.css";

import logo from "../../assets/Logo - Color No BG.svg";
import { FaUserCircle } from "react-icons/fa";

const HeaderUser = () => {
  return (
    <div className="headerUser">
      <div className="headerUser-links">
        <div className="headerUser-links_logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="headerUser-title">
          <p>Title of current page here</p>
        </div>

        <div className="headerUser-user">
          <p>Hello, 'insert User Here'</p>
          {/* <div className="headerUser-user_hello">
                <p>Hello, 'insert User Here'</p>
              </div> */}
          <div className="headerUser-user_logos">
            <FaUserCircle color="#fff" fontSize={50}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderUser;
