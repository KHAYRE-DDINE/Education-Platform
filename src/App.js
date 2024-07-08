import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import Login from './Components/LoginRegister/Login/Login';
import ForgotPassword from './Components/LoginRegister/ForgotPassword/ForgotPassword';
import Steps from './Components/LoginRegister/Steps/Steps';
import ByUsername from './Components/LoginRegister/Signer/LearnerAge/ByUsername';
import ClassCode from './Components/LoginRegister/ClassCode/ClassCode';
import LoginRegister from './Components/LoginRegister/LoginRegister';
import Register from './Components/LoginRegister/Register/Register';
import StudentsDashboard from './Components/Dashboards/StudentsDashboard/StudentsDashboard'
import TeachersDashboard from './Components/Dashboards/TeachersDashboard/TeachersDashboard'
import AdminDashboard from "./Components/Dashboards/AdminDashboard/AdminDashboard"
import Dashboard from "./Components/Dashboards/Dashboards";
import useAuthContext from './Components/authentication/AuthContext';
import LandingPage from './Components/LandingPage/LandingPage';
export const LanguageContext = createContext(0)
export const setLanguageContext = createContext(0)
export const roleContext = createContext(0)
export const setRoleContext = createContext(0)

function App() {
  const [platformLanguage, setPlatformLanguage] = useState("english")
  const { user } = useAuthContext()
  const [role, setRole] = useState("student")
  return (
    <div className="App">
      <LanguageContext.Provider value={platformLanguage}>
        <setLanguageContext.Provider value={setPlatformLanguage}>
          <roleContext.Provider value={role}>
            <Routes>
              {
                role === "student" ? <React.Fragment>
                  <Route element={<Dashboard />}>
                    <Route index element={<StudentsDashboard />} />
                    <Route path="/dashboard/*" element={<StudentsDashboard />} />
                  </Route>
                </React.Fragment> :
                  role === "teacher" ?
                    <Route element={<Dashboard />}>
                      <Route index element={<TeachersDashboard />} />
                      <Route path="/dashboard/*" element={<TeachersDashboard />} />
                    </Route> :
                    role === "admin" ?
                      <Route element={<Dashboard />}>
                        <Route index element={<AdminDashboard />} />
                        <Route path="/dashboard/*" element={<AdminDashboard />} />
                      </Route> : role === null ?
                        <React.Fragment>
                          <Route path="/" element={<LandingPage />} />
                          <Route element={< LoginRegister />}>
                            <Route index element={< Login />} />
                            <Route path="login" element={< Login />} />
                            <Route path="forgot-password" element={< ForgotPassword />} />
                            <Route path="register" element={< Register />} />
                            <Route path="register/steps" element={< Steps />} />
                            <Route path="register/register-by-username" element={< ByUsername />} />
                            <Route path="register/class-code" element={< ClassCode />} />
                          </Route>
                        </React.Fragment> : ""
              }
            </Routes>
          </roleContext.Provider>
        </setLanguageContext.Provider>
      </LanguageContext.Provider>
    </div >
  );
}

export default App;

{/* if(role === null){

                }else if(role === 'student'){
                  <Dashboard>
                    <StudentsDashboard />
                  </Dashboard>
                }
                else if(role === 'teacher'){
                  <Dashboard>
                    <TeachersDashboard />
                  </Dashboard>
                }else if(role == 'admin'){
                  <Dashboard>
                    <AdminDashboard />
                  </Dashboard>
                } */}