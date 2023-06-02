import React from "react";
import "./header.css";

import { FaUserCircle } from "react-icons/fa";
import { HeaderLogo, Dropdown } from "../index";

import { dropdownData } from "../dropdown/dropdownData";

function HeaderUser({ title, user = "Manager" }) {
  return (
    <div className="header">
      <HeaderLogo link="intro"/>
      <div className="header_links">
        <div className="header_title">
          <p>{title}</p>
        </div>
        <div className="header_user">
          <p>Hello, {user}!</p>
          <Dropdown className="headerUser-user_logos" data={dropdownData}>
            <FaUserCircle color="#fff" fontSize={40} />
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default HeaderUser;
