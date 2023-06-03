import React, { useState } from "react";
import { Link } from "react-router-dom";
//import logo from "../../assets/Logo - Color No BG.svg";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

import "../page.css";
import style from "../../components/button/button.module.css";

// import "./Sign Up.css";

function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (name === "" || email === "" || password === "" || repassword === "") {
      alert("Vui lòng điền đủ thông tin")
    }
    else {
      axios.post('http://localhost:8800/signup', { name, email, password })
        .then(res => {
          if (res.data === 'success') {
            navigate('/signIn');
          }
          else if (res.data === 'existed') {
            alert("Tài khoản đã tồn tại, vui lòng nhập thông tin khác");
          }
        })
        .catch(err => console.log(err));
    }

  }
  return (
    <div className="page-container">
      <div className="page_form-container">
        <div className="page_form-title">ĐĂNG KÝ</div>

        <div className="page_form">
          <form>
            <label for="username">
              <p>Tên tài khoản</p>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="username"
                onChange={e => setName(e.target.value)}
              />
            </label>

            <label for="password">
              <p>Mật khẩu</p>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="123456"
                onChange={e => setPassword(e.target.value)}
              />
            </label>

            <label for="password">
              <p>Nhập lại mật khẩu</p>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="123456"
                onChange={e => setRepassword(e.target.value)}
              />
            </label>

            <label for="email">
              <p>Email xác thực</p>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="username@gmail.com"
                onChange={e => setEmail(e.target.value)}
              />
            </label>
          </form>
        </div>
        <div className="page_action">
          {/* <Link to="/intro"> */}
          <button
            onClick={handleSubmit}
            className={`${style.button} ${style.yellow}`}>
            Đăng ký
          </button>
          {/* </Link> */}
        </div>

        <div className="page_link">
          <Link to="/signIn">
            <p>Đã có tài khoản? Đăng nhập tại đây</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
