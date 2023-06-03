import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../page.css";
import style from "../../components/button/button.module.css";

const UserEdit = () => {
  // const pageTitle = "Chỉnh sửa thông tin cá nhân";

  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [addr, setAddr] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (name === "" && dob === "" && phone === "" && email === "" && addr === "") {
      alert("Vui lòng không để trống")
    }
    else {
      axios
        .post("http://localhost:8800/useredit", { name, dob, phone, email, addr })
        .then((res) => {
          if (res.data === "success") {
            alert('Sửa đổi thông tin thành công!');
          }
          // else if (res.data === "empty username"){
          //   alert('Tên đăng nhập không được để trống!');
          // }
          // else if (res.data === "empty password"){
          //   alert('Mật khẩu không được để trống!');
          // }

          else alert(res.data);;;
        })
        .catch((err) => console.log(err));
    }
  }

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
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <label for="DoB">
              <p>Ngày sinh</p>
              <input type="date" id="DoB" name="DoB" placeholder="01/01/2002" onChange={(e) => setDob(e.target.value)}/>
            </label>

            <label for="telephone">
              <p>SĐT</p>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                placeholder="0123456789"
                onChange={(e) => setPhone(e.target.value)}
              />
            </label>

            <label for="email">
              <p>Email</p>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="username@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label for="address">
              <p>Địa chỉ</p>
              <textarea type="text" id="address" name="address" rows={1} onChange={(e) => setAddr(e.target.value)}/>
            </label>
          </form>
        </div>

        <div className="page_action">
          <Link to="/userEdit">
            <button 
              onClick={handleSubmit}
              className={`${style.button} ${style.green}`}
            > Xác nhận
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserEdit;
