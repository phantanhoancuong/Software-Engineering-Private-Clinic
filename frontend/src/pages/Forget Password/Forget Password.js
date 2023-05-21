import React from "react";
import { Link } from 'react-router-dom' 
import logo from "../../assets/Logo - Color No BG.svg";

import "./Forget Password.css";

const ForgetPassword = () => {
  return (
    <div className="ForgetPassword">
      <div className="forget-password-form-container">
        <nav className="logo">
            <Link to ='/'>
              <img src={logo} alt="Logo" />
            </Link>
          </nav>
        <div className = "page-name-container">
          <h2>ĐẶT LẠI MẬT KHẨU</h2>
        </div>
          
        <p className = "instruction">
           Để đặt lại mật khẩu, hãy nhập email mà bạn đã dùng để đăng ký tài khoản trước đó.
        </p>

        <div className = "input-container">
          <label htmlFor="email">Email </label>
        </div>
        <div className = "input-container">
          <input type="email" id="email" name="email" />
        </div>

      
        <button type="button">Tiếp tục</button>

        <p className = "text-nav">
           Chưa nhận được email? Thử lại.
        </p>

      </div>
    </div>
  );
};

export default ForgetPassword;
