import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Homepage,
  HomepageTeam,
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
  PatientSearch,
  PatientView,
  PatientCreate,
  UserEdit,
  PasswordReset,
} from "../index";

import "../page.css";
import { Layout, LayoutUser } from "../../components/index";

const App = () => {
  const title = "GROUP 4";
  // TODO Fix header title to pass to page + Add 404 page
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/homepage" element={<HomepageTeam />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/forgetPassword" element={<ForgetPassword />} />
          </Route>

          <Route element={<LayoutUser pageTitle={title} />}>
            <Route path="/intro" element={<Intro />} />

            <Route path="/appointmentView" element={<AppointmentView />} />
            <Route path="/appointmentCreate" element={<AppointmentCreate />} />

            <Route path="/medicalReportView" element={<MedicalReportView />} />
            <Route path="/medicalReportCreate" element={<MedicalReportCreate />} />

            <Route path="/receiptView" element={<ReceiptView />} />
            <Route path="/receiptCreate" element={<ReceiptCreate />} />
            <Route path="/receiptDetail" element={<ReceiptDetail />} />

            <Route path="/patientSearch" element={<PatientSearch />} />
            <Route path="/patientView" element={<PatientView />} />
            <Route path="/patientCreate" element={<PatientCreate />} />

            <Route path="/revenueReportView" element={<RevenueReportView />} />
            <Route path="/drugReportView" element={<DrugReportView />} />

            <Route path="/settingGeneral" element={<SettingGeneral />} />
            <Route path="/settingDrug" element={<SettingDrug />} />

            <Route path="/userEdit" element={<UserEdit />} />
            <Route path="/passwordReset" element={<PasswordReset />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
