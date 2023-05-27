import React, { useState } from "react";
import { Link } from 'react-router-dom'
import logo from "../../assets/Logo - Color No BG.svg";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

import "./Sign In.css";
import validation from "./Sign In Validation";

function SignIn() {

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:8081/', {name, password})
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }

  return (
    <div className="SignIn">
      <div className="signin-form-container ">
        <form action ="" onSubmit={handleSubmit}> 
          <nav className="logo">
            <Link to='/'>
              <img src={logo} alt="Logo" />
            </Link>
          </nav>
          <div className="page-name-container">
            <h2>ĐĂNG NHẬP TÀI KHOẢN</h2>
          </div>
          <div className="input-container">
            <label htmlFor="username">Tên Đăng Nhập </label>
          </div>
          <div className="input-container">
            <input type="text" id="username" name="username"
            onChange={e => setName(e.target.value)} />
          </div>

          <div className="input-container">
            <label htmlFor="password">Mật khẩu </label>
          </div>
          <div className="input-container">
            <input type="password" id="password" name="password"
            onChange={e => setPassword(e.target.value)} />
          </div>

          <button type="button">Đăng nhập</button>
          
          <nav className="text-nav">
            <Link to='/signUp'>
              <p>Chưa có tài khoản? Đăng ký ngay.</p>
            </Link>
          </nav>
          <nav className="text-nav">
            <Link to='/forgetPassword'>
              <p>Bạn quên mật khẩu?</p>
            </Link>
          </nav>
        </form>   
      </div>
    </div>
  );
};

export default SignIn;
