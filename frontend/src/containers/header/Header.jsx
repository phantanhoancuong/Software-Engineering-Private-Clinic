import React from "react";
import "./header.css";
import { Link } from 'react-router-dom' 


import logo from "../../assets/Logo - Color No BG.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-links">
        <nav className="header-links_logo">
          <Link to ='/'>
            <img src={logo} alt="Logo" />
          </Link>
        </nav>
        <nav className="header-links_container">
          <p><Link to='/'> TRANG CHỦ </Link></p>
          <p><Link to='/'> LỊCH KHÁM </Link></p>
          <p><Link to='/'> GIỚI THIỆU </Link></p>
        </nav>
      </div>
      <nav className="header-sign">
        <p><Link to='/signIn'> SIGN IN </Link></p>
        <p><Link to='/signUp'> SIGN UP</Link></p>
      </nav>
    </div>
  );
};

export default Header;
