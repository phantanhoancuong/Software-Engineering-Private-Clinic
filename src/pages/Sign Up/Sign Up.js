import React from "react";
import { Link } from 'react-router-dom' 
import logo from "../../assets/Logo - Color No BG.svg";

import "./Sign Up.css";

const SignUp = () => {
  return (
    <div className="SignUp">
      <div className="signup-form-container">
        <nav className="logo">
            <Link to ='/'>
              <img src={logo} alt="Logo" />
            </Link>
          </nav>
        <div className = "page-name-container">
          <h2>ĐĂNG KÝ NGƯỜI DÙNG MỚI</h2>
        </div>
          
        <div className = "input-container">
          <label htmlFor="username">Tên Đăng Nhập </label>
        </div>

        <div className = "input-container">
          <input type="text" id="username" name="username" />
        </div>

        <div className = "input-container">
          <label htmlFor="email">Email Xác thực </label>
        </div>
        <div className = "input-container">
          <input type="email" id="email" name="email" />
        </div>

        <div className = "input-container">
          <label htmlFor="password">Mật khẩu </label>
        </div>
        <div className = "input-container">
          <input type="password" id="password" name="password" />
        </div>

        <div className = "input-container">
          <label htmlFor="repassword">Nhận lại mật khẩu </label>
        </div>
        <div className = "input-container">
          <input type="password" id="repassword" name="repassword" />
        </div>
        <button type="button">Đăng ký</button>

        <nav className ="text-nav">
          <Link to ='/signIn'>
            <p>Bạn đã có tài khoản? Đăng nhập ở đây.</p>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default SignUp;
