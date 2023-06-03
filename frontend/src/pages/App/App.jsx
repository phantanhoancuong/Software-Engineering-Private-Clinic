import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Homepage,
  Intro,
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
  PatientView,
  PatientCreate,
  UserEdit,
  PasswordReset,
} from "../index";

import "./App.css";
import { Layout, LayoutUser } from "../../components/index";

const App = () => {
  const title = "Fix later in App.js";
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/forgetPassword" element={<ForgetPassword />} />
          </Routes>
        </Layout>
        <LayoutUser pageTitle={title}>
          <Routes>
            <Route path="/intro" element={<Intro />} />

            <Route path="/appointmentView" element={<AppointmentView />} />
            <Route path="/appointmentCreate" element={<AppointmentCreate />} />

            <Route path="/medicalReportView" element={<MedicalReportView />} />
            <Route
              path="/medicalReportCreate"
              element={<MedicalReportCreate />}
            />

            <Route path="/receiptView" element={<ReceiptView />} />
            <Route path="/receiptCreate" element={<ReceiptCreate />} />
            <Route path="/receiptDetail" element={<receiptDetail />} />

            <Route path="/patientView" element={<PatientView />} />
            <Route path="/patientCreate" element={<PatientCreate />} />

            <Route path="/revenueReportView" element={<RevenueReportView />} />
            <Route path="/drugReportView" element={<DrugReportView />} />

            <Route path="/settingGeneral" element={<SettingGeneral />} />
            <Route path="/settingDrug" element={<SettingDrug />} />

            <Route path="/userEdit" element={<UserEdit />} />
            <Route path="/passwordReset" element={<PasswordReset />} />
          </Routes>
        </LayoutUser>
      </BrowserRouter>
    </div>
  );
};

export default App;
