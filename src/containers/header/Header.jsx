import React from "react";
import "./header.css";

import logo from "../../assets/Logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-links">
        <div className="header-links_logo">
          <img src={logo} alt="Logo" />
          <p>Nhóm 4</p>
        </div>
        <div className="header-links_container">
          <p><a href="#trangChu">TRANG CHỦ</a></p>
          <p><a href="#lichKham">LỊCH KHÁM</a></p>
          <p><a href="#gioiThieu">GIỚI THIỆU</a></p>
        </div>
      </div>
      <div className="header-sign">
        <p><a href="#signIn">Sign in</a></p>
        <p><a href="#signUp">Sign up</a></p>
      </div>
    </div>
  );
};

export default Header;
