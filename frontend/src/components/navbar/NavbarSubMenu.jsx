import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom";
import "./navbarSubMenu.css";

import { FaAngleLeft } from "react-icons/fa";

const NavbarSubMenu = ({ item }) => {
  const [open, setOpen] = useState(false);

  if (item.childrens) {
    return (
      <div className={open ? "navbar-feature open" : "navbar-feature"}>
        <div className="navbar-feature_title">
          <span>
            <div className="navbar-feature_title-icon">{item.icon}</div>
            <p>{item.title}</p>
          </span>
          <FaAngleLeft
            className="navbar-feature_toggleIcon"
            onClick={() => setOpen(!open)}
          />
        </div>

        <div className="navbar-feature_subMenu">
          {item.childrens.map((child, index) => (
            <NavbarSubMenu key={index} item={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <Link to={item.path || "#"} className="navbar-feature plain">
        <div className="navbar-feature_title-icon">{item.icon}</div>
        <p>{item.title}</p>
      </Link>
    );
  }
};

export default NavbarSubMenu;
