import React from "react";
import {Link} from "react-router-dom";
import "./headerLogo.css";

import {ReactComponent as Logo} from "../../assets/Logo.svg";

const HeaderLogo = (props) => {
  return (
    <Link to= {props.link} className="header-logo">
      <div className="logo">
        <Logo />
      </div>
      <p>4CARE</p>
    </Link>
  );
};

export default HeaderLogo;
