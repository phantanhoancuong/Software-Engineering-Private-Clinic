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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // use later in declare if user logged in or not in app.jsx
  const [user, setUser] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8800/signin", { email, password })
      .then((res) => {
        if (res.data === "success") {
          navigate("/intro");
        }
        else alert(res.data);
      })
      .catch((err) => console.log(err));
  }


  return (
    <div className="page-container">
      <div className="page_form-container ">
        <div className="page_form-title">ĐĂNG NHẬP</div>

        <div className="page_form">
            <form>
          <label for="email">
            <p>Email tài khoản</p>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label for="password">
            <p>Mật khẩu</p>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          </form>
        </div>

        <div className="page_action">
          <Link to="/intro">
            <button
              onClick={handleSubmit}
              className={`${style.button} ${style.yellow}`}
            >
              Đăng nhập
            </button>
          </Link>
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
