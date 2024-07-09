import "./StudentsDashboard.css";
import Home from "./Sidebar/Home/Home";
import Courses from "./Sidebar/Courses/Courses";
import Classes from "./Sidebar/Classes/Classes";
import Library from "./Sidebar/Library/Library";
import Teachers from "./Sidebar/Teachers/Teachers";
import Message from "./Sidebar/Message/Message";
import { Outlet, Route, Routes } from "react-router-dom";
import React, { useContext } from "react";
import { LanguageContext } from "../../../App";
import Account from "./Sidebar/Account/Account";
import Calender from "./Sidebar/Calendar/Calendar";

function StudentsDashboard() {
  const language = useContext(LanguageContext);
  return (
    <React.Fragment>
      {language === "english" ? (
        <div className="student-dash ">
          <Routes>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="courses" element={<Courses />} />
            <Route path="classes" element={<Classes />} />
            <Route path="calendar" element={<Calender />} />
            <Route path="library" element={<Library />} />
            <Route path="message" element={<Message />} />
            <Route path="teachers" element={<Teachers />} />
            <Route path="account" element={<Account />} />
          </Routes>
          <Outlet />
        </div>
      ) : (
        <div className="student-dash text-end">
          <Routes>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="courses" element={<Courses />} />
            <Route path="classes" element={<Classes />} />
            <Route path="calendar" element={<Calender />} />
            <Route path="library" element={<Library />} />
            <Route path="message" element={<Message />} />
            <Route path="teachers" element={<Teachers />} />
            <Route path="account" element={<Account />} />
          </Routes>
          <Outlet />
        </div>
      )}
    </React.Fragment>
  );
}
export default StudentsDashboard;
