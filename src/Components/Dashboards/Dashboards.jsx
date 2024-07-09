import React, { useContext, useState } from "react";
import "./Dashboards.css";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import dashboard from "../../images/dashboard.svg";
import recent from "../../images/recent.svg";
import teachers from "../../images/teachers.svg";
import classes from "../../images/classes.svg";
import library from "../../images/library.svg";
import routine from "../../images/routine.svg";
import notice from "../../images/notice.svg";
import account from "../../images/account.svg";
import { LanguageContext, roleContext } from "../../App";

function Dashboard() {
  const [sidebarWidth, setSidebarWidth] = useState(270);
  const location = useLocation();
  const language = useContext(LanguageContext);
  const role = useContext(roleContext);
  
  const AdminList = [
    { listName: "dashboard", listIcon: dashboard },
    { listName: "recent", listIcon: recent },
    { listName: "teachers", listIcon: teachers },
    { listName: "classes", listIcon: classes },
    { listName: "library", listIcon: library },
    { listName: "routine", listIcon: routine },
    { listName: "notice", listIcon: notice },
    { listName: "account", listIcon: account },
  ];
  const TeacherList = [
    { listName: "dashboard", listIcon: dashboard },
    { listName: "recent", listIcon: recent },
    { listName: "teachers", listIcon: teachers },
    { listName: "classes", listIcon: classes },
    { listName: "library", listIcon: library },
    { listName: "routine", listIcon: routine },
    { listName: "notice", listIcon: notice },
    { listName: "account", listIcon: account },
  ];
  const StudentsList = [
    { listName: "dashboard", listIcon: dashboard },
    { listName: "courses", listIcon: recent },
    { listName: "assignments", listIcon: teachers },
    { listName: "classes", listIcon: classes },
    { listName: "calendar", listIcon: library },
    { listName: "message", listIcon: routine },
    { listName: "Library", listIcon: notice },
    { listName: "account", listIcon: account },
  ];
  return (
    <div className=" dashboard min-h-screen">
      <Header />
      {language === "english" ? (
        <main className={`layout flex  relative top-[91px]`}>
          <Sidebar
            list={
              role === "student"
                ? StudentsList
                : role === "teacher"
                ? TeacherList
                : AdminList
            }
            sidebarWidth={sidebarWidth}
            setSidebarWidth={setSidebarWidth}
          />
          <div
            className={`under-layout absolute right-0 h-screen px-4 xlg:px-10 `}
            style={{ width: `calc(100% - ${sidebarWidth}px)` }}
          >
            <Outlet />
          </div>
        </main>
      ) : (
        <main className={`layout flex flex-row-reverse relative top-[91px]`}>
          <Sidebar
            list={
              role === "student"
                ? StudentsList
                : role === "teacher"
                ? TeacherList
                : AdminList
            }
            sidebarWidth={sidebarWidth}
            setSidebarWidth={setSidebarWidth}
          />
          <div
            className={`under-layout absolute left-0 h-screen px-10 py-5`}
            style={{ width: `calc(100% - ${sidebarWidth}px)` }}
          >
            <Outlet />
          </div>
        </main>
      )}
    </div>
  );
}

export default Dashboard;
