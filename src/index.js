import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginRegister from './Components/LoginRegister/LoginRegister';
import Login from './Components/LoginRegister/Login/Login';
import ForgotPassword from './Components/LoginRegister/ForgotPassword/ForgotPassword';
import Home from "./Components/Header/Header"
import Steps from './Components/LoginRegister/Steps/Steps';
import ByUsername from './Components/LoginRegister/Signer/LearnerAge/ByUsername';
import ClassCode from './Components/LoginRegister/ClassCode/ClassCode';

const router = createBrowserRouter([
  { path: "/", element: < Home /> },
  {
    path: "Login", element: < Login />
  },
  { path: "Login/ForgotPassword", element: <ForgotPassword /> },
  {
    path: "Register", element: < LoginRegister />
  },
  { path: "Register/Steps", element: <Steps /> },
  { path: "Register/ByUsername", element: <ByUsername /> },
  { path: "Register/ClassCode", element: <ClassCode /> },
  { path: "LoginRegister", element: < LoginRegister /> }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
