import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './pages/App/App';
import SignUp from './pages/Sign Up/Sign Up'
import SignIn from './pages/Sign In/Sign In'
import ForgetPassword from './pages/Forget Password/Forget Password';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)