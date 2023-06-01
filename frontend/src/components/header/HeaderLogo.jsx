import React from "react";
import {Link} from "react-router-dom";
import "./headerLogo.css";

import {ReactComponent as Logo} from "../../assets/Logo.svg";

const HeaderLogo = () => {
  return (
    <Link to= "/intro" className="header-logo">
      <div className="logo">
        <Logo />
      </div>
      <p>4CARE</p>
    </Link>
  );
};

export default HeaderLogo;
