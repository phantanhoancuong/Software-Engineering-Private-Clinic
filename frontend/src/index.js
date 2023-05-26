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
  MedicalReportView,
  MedicalReportCreate
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
        <Route path="/medicalReportView" element={<MedicalReportView />} />
        <Route path="/medicalReportCreate" element={<MedicalReportCreate />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
