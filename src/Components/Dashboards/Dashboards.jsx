import React, { useState } from "react";
import "./Dashboards.css";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

function Dashboard() {
  const [sidebarWidth, setSidebarWidth] = useState(270);

  return (
    <div className="dashboard min-h-screen">
      <Sidebar sidebarWidth={sidebarWidth} setSidebarWidth={setSidebarWidth} />
      <main
        className={`layout absolute right-0 px-4`}
        style={{ width: `calc(100% - ${sidebarWidth}px)` }}
      >
        <Header />
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;
