import React from "react";
import { Link } from "react-router-dom";
import "../page.css";
import style from "../../components/button/button.module.css";

const UserEdit = () => {
  // const pageTitle = "Chỉnh sửa thông tin cá nhân";
  return (
    <>
      <div className="page-container">
        <div className="page_form">
          <form>
            <p>Thông tin cá nhân</p>
            <label for="full-name">
              <p>Họ tên</p>
              <input
                type="text"
                id="full-name"
                name="full-name"
                placeholder="Nguyễn Văn A"
              />
            </label>

            <label for="DoB">
              <p>Ngày sinh</p>
              <input type="date" id="DoB" name="DoB" placeholder="01/01/2002" />
            </label>

            <label for="telephone">
              <p>SĐT</p>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                placeholder="0123456789"
              />
            </label>

            <label for="email">
              <p>Email</p>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="username@gmail.com"
              />
            </label>

            <label for="address">
              <p>Địa chỉ</p>
              <textarea type="text" id="address" name="address" rows={1} />
            </label>
          </form>
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

export default UserEdit;
