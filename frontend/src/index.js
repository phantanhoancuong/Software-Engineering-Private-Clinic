import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./pages/App/App";

import {
  SignUp,
  SignIn,
  ForgetPassword,
  AppointmentView,
  AppointmentCreate,
} from "./pages";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/appointmentView" element={<AppointmentView />} />
        <Route path="/appointmentCreate" element={<AppointmentCreate />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
