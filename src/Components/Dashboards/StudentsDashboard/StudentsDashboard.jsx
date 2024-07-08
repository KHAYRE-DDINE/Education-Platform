import "./StudentsDashboard.css";
import Home from "./Sidebar/Home/Home";
import Recent from "./Sidebar/Recent/Recent";
import Classes from "./Sidebar/Classes/Classes";
import Library from "./Sidebar/Library/Library";
import Teachers from "./Sidebar/Teachers/Teachers";

import { Outlet, Route, Routes } from "react-router-dom";
import React, { useContext } from "react";
import { LanguageContext } from "../../../App";

function StudentsDashboard() {
  const language = useContext(LanguageContext);
  return (
    <React.Fragment>
      {language === "english" ? (
        <div className="student-dash ">
          <Routes>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="recent" element={<Recent />} />
            <Route path="classes" element={<Classes />} />
            <Route path="library" element={<Library />} />
            <Route path="teachers" element={<Teachers />} />
          </Routes>
          <Outlet />
        </div>
      ) : (
        <div className="student-dash text-end">
          <Routes>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="recent" element={<Recent />} />
            <Route path="classes" element={<Classes />} />
            <Route path="library" element={<Library />} />
            <Route path="teachers" element={<Teachers />} />
          </Routes>
          <Outlet />
        </div>
      )}
    </React.Fragment>
  );
}
export default StudentsDashboard;
