import { createContext, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/LoginRegister/Login/Login';
import ForgotPassword from './Components/LoginRegister/ForgotPassword/ForgotPassword';
import Steps from './Components/LoginRegister/Steps/Steps';
import ByUsername from './Components/LoginRegister/Signer/LearnerAge/ByUsername';
import ClassCode from './Components/LoginRegister/ClassCode/ClassCode';
import LoginRegister from './Components/LoginRegister/LoginRegister';
import Register from './Components/LoginRegister/Register/Register';
import Dashboard from "./Components/Dashboard/Dashboard"
import Home from "./Components/SidebarList/Home/Home"
import Library from './Components/SidebarList/Library/Library';
import Class from './Components/SidebarList/Class/Class';
import Routine from './Components/SidebarList/Routine/Routine';
import Attendance from './Components/SidebarList/Attendance/Attendance';
import Subject from './Components/SidebarList/Subject/Subject';
import Notice from './Components/SidebarList/Notice/Notice';
import Account from './Components/SidebarList/Account/Account';
import Teachers from './Components/SidebarList/Teachers/Teachers';
import Students from './Components/SidebarList/Students/Students';
import Current from "./Components/SidebarList/Home/Current/Current"
import Completed from "./Components/SidebarList/Home/Completed/Completed"
import Archived from "./Components/SidebarList/Home/Archived/Archived"
import UseAuthContext from './Components/authentication/AuthContext';

export const LanguageContext = createContext(0)
export const setLanguageContext = createContext(0)

function App() {
  const [platformLanguage, setPlatformLanguage] = useState("english")

  return (
    <div className="App">
      <BrowserRouter>
        <LanguageContext.Provider value={platformLanguage}>
          <setLanguageContext.Provider value={setPlatformLanguage}>
            {/* <UseAuthContext> */}
            <Routes>
              <Route element={< Dashboard />} >
                <Route index element={<Home />} />
                <Route path="Dashboard" element={< Home />} >
                  <Route index element={<Current />} />
                  <Route path='Current learning' element={<Current />} />
                  <Route path='Completed' element={<Completed />} />
                  <Route path='Archived' element={<Archived />} />
                </Route>
                <Route path="Students" element={< Students />} />
                <Route path="Teachers" element={< Teachers />} />
                <Route path="Library" element={< Library />} />
                <Route path="Class" element={< Class />} />
                <Route path="Routine" element={< Routine />} />
                <Route path="Attendance" element={< Attendance />} />
                <Route path="Subject" element={< Subject />} />
                <Route path="Notice" element={< Notice />} />
                <Route path="Account" element={< Account />} />
              </Route>
              <Route element={< LoginRegister />}>
                <Route index element={< Login />} />
                <Route path="login" element={< Login />} />
                <Route path="forgot-password" element={< ForgotPassword />} />
                <Route path="register" element={< Register />} />
                <Route path="register/steps" element={< Steps />} />
                <Route path="register/register-by-username" element={< ByUsername />} />
                <Route path="register/class-code" element={< ClassCode />} />
              </Route>
            </Routes>
            {/* </UseAuthContext> */}
          </setLanguageContext.Provider>
        </LanguageContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
