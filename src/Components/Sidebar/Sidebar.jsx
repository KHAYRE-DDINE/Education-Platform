import React, { useEffect } from "react";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("dashboard/current learning");
    }
  }, []);

  return (
    <div
      className={`sidebar invisible md:visible w-0 md:w-[${sidebarWidth}px] fixed h-screen bg-gray-200`}
    >
      <div className="logo p-4">
        <h2 className="uppercase text-primary font-bold text-2xl">al rihla</h2>
      </div>
      <div className="list">
        <ul className="dash-links px-4">
          <li
            className={
              location.pathname === "/" ||
              location.pathname.includes("dashboard")
                ? " px-2 py-2 capitalize bg-primary rounded-md"
                : " px-2 py-2 capitalize rounded-md"
            }
          >
            <NavLink
              to="dashboard/current learning"
              className={({ isActive, isPending }) =>
                isActive ||
                location.pathname.includes("dashboard") ||
                location.pathname === "/"
                  ? "text-white flex items-center s"
                  : "text-normalColor flex items-center"
              }
            >
              dashboard
            </NavLink>
          </li>
          {list.map((l, id) => (
            <li
              className={
                location.pathname === `/${l.listName}`
                  ? "py-2 px-2 capitalize underline-none bg-primary rounded-md "
                  : "py-2 px-2 capitalize underline-none rounded-md "
              }
              key={id}
            >
              <NavLink
                to={l.listName}
                className={({ isActive, isPending }) =>
                  isActive
                    ? " text-white flex items-center"
                    : "flex items-center text-normalColor "
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
