import React, { useState } from "react";
import { Link } from 'react-router-dom'
import logo from "../../assets/Logo - Color No BG.svg";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

import "./Sign Up.css";

function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:8800/signup', { name, email, password })
      .then(res => {
        if (res.data === 'success') {
          navigate('/signIn');
        }
        else navigate('/signUp');
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="SignUp">
      <div className="signup-form-container">
        <nav className="logo">
          <Link to='/'>
            <img src={logo} alt="Logo" />
          </Link>
        </nav>
        <div className="page-name-container">
          <h2>ĐĂNG KÝ NGƯỜI DÙNG MỚI</h2>
        </div>

        <div className="input-container">
          <label htmlFor="username">Tên Đăng Nhập </label>
        </div>

        <div className="input-container">
          <input type="text" id="username" name="username"
            onChange={e => setName(e.target.value)} />
        </div>

        <div className="input-container">
          <label htmlFor="email">Email Xác thực </label>
        </div>
        <div className="input-container">
          <input type="email" id="email" name="email"
            onChange={e => setEmail(e.target.value)} />
        </div>

        <div className="input-container">
          <label htmlFor="password">Mật khẩu </label>
        </div>
        <div className="input-container">
          <input type="password" id="password" name="password"
            onChange={e => setPassword(e.target.value)} />
        </div>

        <div className="input-container">
          <label htmlFor="repassword">Nhận lại mật khẩu </label>
        </div>
        <div className="input-container">
          <input type="password" id="repassword" name="repassword"
            onChange={e => setRepassword(e.target.value)} />
        </div>
        <button type="button" onClick={handleSubmit}>Đăng ký</button>

        <nav className="text-nav">
          <Link to='/signIn'>
            <p>Bạn đã có tài khoản? Đăng nhập ở đây.</p>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default SignUp;
