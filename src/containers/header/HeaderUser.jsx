import React from "react";
import "./headerUser.css";

import { FaUserCircle } from "react-icons/fa";
import HeaderLogo from "./HeaderLogo";

function HeaderUser({title, user = "Manager"}) {
  return (
    <div className="headerUser">
      <HeaderLogo />
      <div className="headerUser-links">
        <div className="headerUser-title">
          <p>{title}</p>
        </div>
      </div>

      <div className="headerUser-user">
        <p>Hello, {user}!</p>
        <div className="headerUser-user_logos">
          <FaUserCircle color="#fff" fontSize={40} />
        </div>
      </div>
    </div>
  );
}

export default HeaderUser;
