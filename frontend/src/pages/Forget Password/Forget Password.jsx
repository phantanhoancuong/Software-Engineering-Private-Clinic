import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo - Color No BG.svg";

import "../page.css";
import style from "../../components/button/button.module.css";

const ForgetPassword = () => {
  return (
    <div className="page-container">
      <div className="page_form-container">
        <div className="page_form-title">Đặt lại mật khẩu</div>

        <p className="instruction">
          Để đặt lại mật khẩu, hãy nhập email mà bạn đã dùng để đăng ký tài
          khoản trước đó.
        </p>
        <div className="page_form">
          <form>
            <label for="email">
              <p>Email</p>
              <input type="email" id="email" name="email" />
            </label>
          </form>
        </div>

        <div className="page_action">
          <Link to="/intro">
            <button className={`${style.button} ${style.yellow}`}>
              Gửi mã xác nhận về Email
            </button>
          </Link>
        </div>

        <div className="page_link">
          <Link to="/forgetPassword">
            <p>Chưa nhận được email? Thử lại</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
