import React from "react";
import { Link } from "react-router-dom";
// import logo from "../../assets/Logo - Color No BG.svg";

import "../page.css";
import style from "../../components/button/button.module.css";

// import "./Sign Up.css";

// const SignUp = () => {
//   return (
//     <div className="SignUp">
//       <div className="signup-form-container">
//         <nav className="logo">
//             <Link to ='/'>
//               <img src={logo} alt="Logo" />
//             </Link>
//           </nav>
//         <div className = "page-name-container">
//           <h2>ĐĂNG KÝ NGƯỜI DÙNG MỚI</h2>
//         </div>

//         <div className = "input-container">
//           <label htmlFor="username">Tên Đăng Nhập </label>
//         </div>

//         <div className = "input-container">
//           <input type="text" id="username" name="username" />
//         </div>

//         <div className = "input-container">
//           <label htmlFor="email">Email Xác thực </label>
//         </div>
//         <div className = "input-container">
//           <input type="email" id="email" name="email" />
//         </div>

//         <div className = "input-container">
//           <label htmlFor="password">Mật khẩu </label>
//         </div>
//         <div className = "input-container">
//           <input type="password" id="password" name="password" />
//         </div>

//         <div className = "input-container">
//           <label htmlFor="repassword">Nhận lại mật khẩu </label>
//         </div>
//         <div className = "input-container">
//           <input type="password" id="repassword" name="repassword" />
//         </div>
//         <button type="button">Đăng ký</button>

//         <nav className ="text-nav">
//           <Link to ='/signIn'>
//             <p>Bạn đã có tài khoản? Đăng nhập ở đây.</p>
//           </Link>
//         </nav>
//       </div>
//     </div>
//   );
// };

const SignUp = () => {
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
              />
            </label>

            <label for="password">
              <p>Mật khẩu</p>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="123456"
              />
            </label>

            <label for="password">
              <p>Nhập lại mật khẩu</p>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="123456"
              />
            </label>

            <label for="email">
              <p>Email xác thực</p>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="username@gmail.com"
              />
            </label>
          </form>
        </div>
        <div className="page_action">
          <Link to="/intro">
            <button className={`${style.button} ${style.yellow}`}>
              Đăng ký
            </button>
          </Link>
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
