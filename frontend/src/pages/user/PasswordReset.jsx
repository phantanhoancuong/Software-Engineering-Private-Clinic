import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import "../page.css";
import style from "../../components/button/button.module.css";

const PasswordReset = () => {
  const pageTitle = "Đổi mật khẩu"; // Change this to change page title
  const [handleCallback] = useOutletContext();
  useEffect(() => {
    handleCallback(pageTitle);
  }, []);

  return (
    <>
      <div className="page-container">
        <div className="page_form">
          <form>
            <p>Thông tin tài khoản</p>
            <label for="username">
              <p>Tên tài khoản</p>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="username"
              />
            </label>

            <label for="password">
              <p>Mật khẩu cũ</p>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="12345678"
              />
            </label>

            <label for="password">
              <p>Mật khẩu mới</p>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="12345678"
              />
            </label>

            <label for="password">
              <p>Nhập lại mật khẩu mới</p>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="12345678"
              />
            </label>
          </form>
        </div>

        <div className="page_forgetPassword">
          <Link to="/forgetPassword">
            <p>Quên mật khẩu? Nhấn vào đây</p>
          </Link>
        </div>

        <div className="page_action">
          <Link to="/userEdit">
            <button className={`${style.button} ${style.green}`}>
              Xác nhận
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PasswordReset;
