import {React, memo} from "react";
import "./navbar.css";
import { navbarData } from "./navbarData";
import NavbarSubMenu from "./NavbarSubMenu";


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-section">
        {navbarData.map((item, index) => (
          <NavbarSubMenu key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default memo(Navbar);
