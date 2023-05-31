import React from "react";
import "./headerLogo.css";

import {ReactComponent as Logo} from "../../assets/Logo.svg";

const HeaderLogo = () => {
  return (
    <a href="/" className="header-logo">
      <div className="logo">
        <Logo />
      </div>
      <p>4CARE</p>
    </a>
  );
};

export default HeaderLogo;
