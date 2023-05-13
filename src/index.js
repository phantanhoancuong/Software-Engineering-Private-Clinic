import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import './index.css';
import App from './pages/App/App';
import SignUp from './pages/Sign Up/Sign Up'


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/signUp' element={<SignUp />} />
            </Routes>
           
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)