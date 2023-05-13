import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import './index.css';
import App from './pages/App/App';
import SignUp from './pages/Sign Up/Sign Up'
import SignIn from './pages/Sign In/Sign In'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/signUp' element={<SignUp />} />
                <Route path='/signIn' element={<SignIn />} />
            </Routes>
           
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)