import React from 'react';
import ReactDOM from 'react-dom/client'
import ReactDOM from "react-dom";

import "./index.css";
import App from "./pages/App/App";

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

root.render(
    <React.StrictMode>
         <App />
    </React.StrictMode>,
);
