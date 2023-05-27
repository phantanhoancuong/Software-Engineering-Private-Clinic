import React from "react";

//import { Header, Intro, AppointmentView } from "../../containers";
//import { Navbar } from "../../components";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Homepage, SignIn, SignUp, ForgetPassword, AppointmentView, AppointmentCreate,
         MedicalReportView, MedicalReportCreate } from "../index";

import "./App.css";

const App = () => {
  return (
    <div className="App">
     <BrowserRouter>
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/signIn' element={<SignIn />} />
              <Route path='/signUp' element={<SignUp />} />
              <Route path='/forgetPassword' element={<ForgetPassword />} />
              <Route path='/appointmentView' element={<AppointmentView />} />
              <Route path='/appointmentCreate' element={<AppointmentCreate />} />
              <Route path='/medicalReportView' element={<MedicalReportView />} />
              <Route path='/medicalReportCreate' element={<MedicalReportCreate />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;
