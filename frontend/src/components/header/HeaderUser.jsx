import React from "react";
import "./headerUser.css";

import { FaUserCircle } from "react-icons/fa";
import {HeaderLogo, Dropdown} from "../index";

import { dropdownData } from "../dropdown/dropdownData";

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
        <Dropdown className="headerUser-user_logos" data={dropdownData}>
          <FaUserCircle color="#fff" fontSize={40} />
        </Dropdown>
      </div>
    </div>
  );
}

export default HeaderUser;
