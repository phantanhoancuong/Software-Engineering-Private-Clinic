import React from "react";
import { Link } from 'react-router-dom' 
import logo from "../../assets/Logo - Color No BG.svg";

import "./Sign In.css";

const SignIn = () => {
  return (
    <div className="SignIn">
      <div className="signin-form-container ">
        <nav className="logo">
            <Link to ='/'>
              <img src={logo} alt="Logo" />
            </Link>
          </nav>
        <div className = "page-name-container">
          <h2>ĐĂNG NHẬP TÀI KHOẢN</h2>
        </div>
          
        <div className = "input-container">
          <label htmlFor="username">Tên Đăng Nhập </label>
        </div>
        <div className = "input-container">
          <input type="text" id="username" name="username" />
        </div>

        <div className = "input-container">
          <label htmlFor="password">Mật khẩu </label>
        </div>
        <div className = "input-container">
          <input type="password" id="password" name="password" />
        </div>
        <button type="button">Đăng nhập</button>

        <nav className ="text-nav">
          <Link to ='/signUp'>
            <p>Chưa có tài khoản? Đăng ký ngay.</p>
          </Link>
        </nav>
        <nav className ="text-nav">
        <Link to ='/forgetPassword'>
            <p>Bạn quên mật khẩu?</p>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default SignIn;
