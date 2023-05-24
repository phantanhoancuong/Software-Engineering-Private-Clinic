import React, { useState } from "react";
import { Link } from 'react-router-dom'
import logo from "../../assets/Logo - Color No BG.svg";

import "./Sign In.css";
import validation from "./Sign In Validation";

function SignIn() {

  const [values, setValues] = useState({
    username: '',
    password: ''
  })

  const [errors, setErrors] = useState({})

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.username]: [event.target.value] }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    if(errors.username === "" && errors.password === ""){
      
    }
  }

  return (
    <div className="SignIn">
      <div className="signin-form-container ">
        <form  action = "" onSubmit = {handleSubmit}>
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
          onChange={handleInput} />
          {errors.username && <span> {errors.username} </span>}
        </div>

        <div className="input-container">
          <label htmlFor="password">Mật khẩu </label>
        </div>
        <div className="input-container">
          <input type="password" id="password" name="password"
          onChange={handleInput} />
          {errors.password && <span> {errors.password} </span>}
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
