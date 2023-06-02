import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo - Color No BG.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// import "./Sign In.css";
import "../page.css";
import style from "../../components/button/button.module.css";
import "./Modal.css"
import validation from "./Sign In Validation";

// function SignIn() {
//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");

//   function handleSubmit(event) {
//     event.preventDefault();
//     axios
//       .post("http://localhost:8800/signin", { name, password })
//       .then((res) => {
//         if (res.data === "success") {
//           navigate("/");
//         } else navigate("/signin");
//       })
//       .catch((err) => console.log(err));
//   }

//   return (
//     <div className="SignIn">
//       <div className="signin-form-container ">
//         <nav className="logo">
//           <Link to="/">
//             <img src={logo} alt="Logo" />
//           </Link>
//         </nav>
//         <div className="page-name-container">
//           <h2>ĐĂNG NHẬP TÀI KHOẢN</h2>
//         </div>
//         <div className="input-container">
//           <label htmlFor="username">Tên Đăng Nhập </label>
//         </div>
//         <div className="input-container">
//           <input
//             type="text"
//             id="username"
//             name="username"
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>

//         <div className="input-container">
//           <label htmlFor="password">Mật khẩu </label>
//         </div>
//         <div className="input-container">
//           <input
//             type="password"
//             id="password"
//             name="password"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>

//         <button type="button" onClick={handleSubmit}>
//           Đăng nhập
//         </button>

//         <nav className="text-nav">
//           <Link to="/signUp">
//             <p>Chưa có tài khoản? Đăng ký ngay.</p>
//           </Link>
//         </nav>
//         <nav className="text-nav">
//           <Link to="/forgetPassword">
//             <p>Bạn quên mật khẩu?</p>
//           </Link>
//         </nav>
//       </div>
//     </div>
//   );
// }

function SignIn() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8800/signin", { name, password })
      .then((res) => {
        if (res.data === "success") {
          navigate("/");
        } else toggleModal();;
      })
      .catch((err) => console.log(err));
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

      {modal && (
        <div className="modal">
        <div className="overlay" onClick={toggleModal}></div>
        <div className="modal-content">
          <h2>Sai tên hoặc mật khẩu, nhấp chuột để nhập lại</h2>
        </div>
      </div>
      )}

    </div>
  );
}

export default SignIn;
