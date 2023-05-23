import React from "react";

import { Header, Intro, AppointmentView } from "../../containers";
// import { Navbar } from "../../components";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import "./App.css";
import SignIn from "../Sign In/Sign In";
import SignUp from "../Sign Up/Sign Up";
import ForgetPassword from "../Forget Password/Forget Password";

const App = () => {
  return (
    <div className="App">
     <BrowserRouter>
            <Routes>
                <Route path='/' element={<SignIn />} />
                <Route path='/signUp' element={<SignUp />} />
                <Route path='/forgetPassword' element={<ForgetPassword />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;
