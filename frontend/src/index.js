import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import './index.css';
import App from './pages/App/App';

import SignUp from './pages/Sign Up/Sign Up'
import SignIn from './pages/Sign In/Sign In'
import ForgetPassword from './pages/Forget Password/Forget Password';

import { AppointmentView, AppointmentCreate } from './pages';
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/signUp' element={<SignUp />} />
                <Route path='/signIn' element={<SignIn />} />
                <Route path='/forgetPassword' element={<ForgetPassword />} />
                <Route path='/appointmentView' element={<AppointmentView />} />
                <Route path='/appointmentView' element={<AppointmentCreate />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)