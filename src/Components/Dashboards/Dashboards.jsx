import React, { useState } from "react";
import "./Dashboards.css";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { FaHardHat } from "react-icons/fa";

function Dashboard() {
  const [sidebarWidth, setSidebarWidth] = useState(270);
  const location = useLocation();
  const AdminList = [
    { listName: "students", listIcon: <FaHardHat /> },
    { listName: "teachers", listIcon: <FaHardHat /> },
    { listName: "library", listIcon: <FaHardHat /> },
    { listName: "class", listIcon: <FaHardHat /> },
    { listName: "subject", listIcon: <FaHardHat /> },
    { listName: "routine", listIcon: <FaHardHat /> },
    { listName: "attendance", listIcon: <FaHardHat /> },
    { listName: "notice", listIcon: <FaHardHat /> },
    { listName: "account", listIcon: <FaHardHat /> },
  ];
  const TeacherList = [
    { listName: "students", listIcon: <FaHardHat /> },
    { listName: "teachers", listIcon: <FaHardHat /> },
    { listName: "library", listIcon: <FaHardHat /> },
    { listName: "class", listIcon: <FaHardHat /> },
    { listName: "subject", listIcon: <FaHardHat /> },
    { listName: "routine", listIcon: <FaHardHat /> },
    { listName: "attendance", listIcon: <FaHardHat /> },
    { listName: "notice", listIcon: <FaHardHat /> },
    { listName: "account", listIcon: <FaHardHat /> },
  ];
  const StudentsList = [
    { listName: "home", listIcon: <FaHardHat /> },
    { listName: "recent", listIcon: <FaHardHat /> },
    { listName: "teachers", listIcon: <FaHardHat /> },
    { listName: "classes", listIcon: <FaHardHat /> },
    { listName: "library", listIcon: <FaHardHat /> },
  ];
  return (
    <div className="dashboard min-h-screen">
      <Header />
      <main className={`layout flex  relative top-[91px]`}>
        <Sidebar
          list={StudentsList}
          sidebarWidth={sidebarWidth}
          setSidebarWidth={setSidebarWidth}
        />
        <div
          className={`absolute right-0 h-screen px-10 py-5`}
          style={{ width: `calc(100% - ${sidebarWidth}px)` }}
        >
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
