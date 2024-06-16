import React from "react";
import "./Sidebar.css";
import { NavLink, useLocation } from "react-router-dom";
import { FaHardHat } from "react-icons/fa";

function Sidebar({ sidebarWidth, setSidebarWidth }) {
  const list = [
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

  const location = useLocation();
  return (
    <div
      className="sidebar fixed h-screen bg-gray-200"
      style={{ width: `${sidebarWidth}px` }}
    >
      <div className="logo p-4">
        <h2 className="uppercase text-primary">al rihla</h2>
      </div>
      <div className="list">
        <ul className="dash-links px-4">
          <li
            className={
              location.pathname === "/"
                ? " px-2 py-2 capitalize bg-primary rounded-3 "
                : " px-2 py-2 capitalize rounded-3 "
            }
          >
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-white flex items-center"
                  : "text-black flex items-center"
              }
            >
              dashboard
            </NavLink>
          </li>
          {list.map((l, id) => (
            <li
              className={
                location.pathname === `/${l.listName}`
                  ? "py-2 px-2 capitalize underline-none bg-primary rounded-3 "
                  : "py-2 px-2 capitalize underline-none rounded-3 "
              }
              key={id}
            >
              <NavLink
                to={l.listName}
                className={({ isActive, isPending }) =>
                  isActive
                    ? " text-white flex items-center"
                    : "flex items-center text-black "
                }
              >
                {l.listIcon} {l.listName}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
