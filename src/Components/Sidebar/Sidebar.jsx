import React, { useContext, useEffect } from "react";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";
import { NavLink, useLocation } from "react-router-dom";
function Sidebar({ sidebarWidth, setSidebarWidth, list }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("dashboard");
    }
  }, []);

  return (
    <div
      className={`sidebar py-7 invisible md:visible w-0 md:w-[270px] fixed h-screen border-r-[1px] border-solid border-grayD`}
    >
      <div className="list">
        <ul className="dash-links px-4">
          {list.map((l, id) => (
            <li
              className={
                location.pathname === `/${l.listName}`
                  ? "py-2 px-2 capitalize underline-none bg-primary-200 rounded-sm "
                  : "py-2 px-2 capitalize underline-none rounded-md "
              }
              key={id}
            >
              <NavLink
                to={`dashboard/${l.listName}`}
                className={({ isActive, isPending }) =>
                  isActive
                    ? " text-primary-100 flex items-center"
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
