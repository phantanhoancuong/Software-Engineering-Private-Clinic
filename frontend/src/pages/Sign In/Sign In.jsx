import React, { useState } from "react";
import { Link } from "react-router-dom";
//import logo from "../../assets/Logo - Color No BG.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "../page.css";
import style from "../../components/button/button.module.css";

// import "./Sign In.css";

function SignIn() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if(name === "" || password === "") {
      alert("Email và password không được trống")
    }
    else {
      axios
      .post("http://localhost:8800/signin", { name, password })
      .then((res) => {
        if (res.data === "success") {
          navigate("/");
        } else alert("Email hoặc Password sai, vui lòng nhập lại");
      })
      .catch((err) => console.log(err));
    }
  }

  return (
    <div className="page-container">
      <div className="page_form-container ">
        <div className="page_form-title">ĐĂNG NHẬP</div>

        <div className="page_form">
            <form>
          <label for="username">
            <p>Tên tài khoản</p>
            <input
              type="text"
              id="username"
              name="username"
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label for="password">
            <p>Mật khẩu</p>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          </form>
        </div>

        <div className="page_action">
          {/* <Link to="/intro"> */}
            <button
              onClick={handleSubmit}
              className={`${style.button} ${style.yellow}`}
            >
              Đăng nhập
            </button>
          {/* </Link> */}
        </div>

        <div className="page_link">
          <Link to="/signUp">
            <p>Chưa có tài khoản? Đăng ký ngay.</p>
          </Link>
        </div>
        <div className="page_link">
          <Link to="/forgetPassword">
            <p>Bạn quên mật khẩu?</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
