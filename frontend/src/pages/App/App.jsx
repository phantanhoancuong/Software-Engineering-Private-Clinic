import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Homepage,
  SignIn,
  SignUp,
  ForgetPassword,
  AppointmentView,
  AppointmentCreate,
  MedicalReportView,
  MedicalReportCreate,
  SettingGeneral,
  SettingDrug,
  ReceiptView,
  RevenueReportView,
  DrugReportView,
  ReceiptCreate,
  ReceiptDetail,
} from "../index";

import "./App.css";
import { Layout } from "../../components";

const App = () => {
  const title="Fix later in App.js";
  return (
    <div className="App">
      <BrowserRouter>
        <Layout pageTitle={title}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/forgetPassword" element={<ForgetPassword />} />

            <Route path="/appointmentView" element={<AppointmentView />} />
            <Route path="/appointmentCreate" element={<AppointmentCreate />} />
            
            <Route path="/medicalReportView" element={<MedicalReportView />} />
            <Route path="/medicalReportCreate"element={<MedicalReportCreate />}/>
            
            <Route path="/receiptView" element={<ReceiptView />} />
            <Route path="/receiptCreate" element={<ReceiptCreate />} />
            <Route path="/receiptDetail" element={<ReceiptDetail />} />
            
            <Route path="/revenueReportView" element={<RevenueReportView />} />
            <Route path="/drugReportView" element={<DrugReportView />} />
            
            <Route path="/settingGeneral" element={<SettingGeneral />} />
            <Route path="/settingDrug" element={<SettingDrug />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
