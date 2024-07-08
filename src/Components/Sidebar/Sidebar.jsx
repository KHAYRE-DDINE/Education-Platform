import React, { useContext, useEffect } from "react";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";
import { NavLink, useLocation } from "react-router-dom";
import { LanguageContext } from "../../App";
function Sidebar({ sidebarWidth, setSidebarWidth, list }) {
  const location = useLocation();
  const navigate = useNavigate();
  const language = useContext(LanguageContext);

  useEffect(() => {
    if (
      location.pathname === "/Dashboard" ||
      location.pathname === "/dashboard"
    ) {
      navigate("dashboard/home");
    }
  }, [location.pathname]);

  return (
    <React.Fragment>
      {language === "english" ? (
        <div
          className={`sidebar py-7 invisible md:visible w-0 md:w-[270px] fixed h-screen border-r-[1px] border-solid border-grayD`}
        >
          <div className="list">
            <ul className="dash-links px-4">
              {list.map((l, id) => (
                <li
                  className={
                    location.pathname.includes(
                      `/${
                        l.listName === "dashboard" ? `home` : `${l.listName}`
                      }`
                    )
                      ? `py-2 px-2 capitalize underline-none bg-primary-01 rounded-sm border-l-[3px] border-solid border-primary-0`
                      : "py-2 px-2 capitalize underline-none rounded-md"
                  }
                  key={id}
                >
                  <NavLink
                    to={
                      l.listName === "dashboard"
                        ? `dashboard/home`
                        : `dashboard/${l.listName}`
                    }
                    className={({ isActive, isPending }) =>
                      isActive
                        ? ` text-primary-0 flex items-center`
                        : "flex items-center text-normalColor "
                    }
                  >
                    <img
                      className={
                        location.pathname.includes(`/${l.listName}`)
                          ? "text-primary-0"
                          : "text-normalColor"
                      }
                      src={l.listIcon}
                      alt="icon"
                    />{" "}
                    {l.listName}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div
          className={`sidebar py-7 invisible md:visible w-0 md:w-[270px] fixed h-screen border-l-[1px] border-solid border-grayD`}
        >
          <div className="list">
            <ul className="dash-links px-4">
              {list.map((l, id) => (
                <li
                  className={
                    location.pathname.includes(`/${l.listName}`)
                      ? `py-2 px-2 capitalize underline-none flex-row-reverse arabic bg-primary-01 rounded-sm border-r-[3px] border-solid border-primary-0 `
                      : "py-2 px-2 capitalize underline-none rounded-md flex-row-reverse arabic"
                  }
                  key={id}
                >
                  <NavLink
                    to={`dashboard/${l.listName}`}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? `text-primary-0 flex items-center`
                        : "flex items-center text-normalColor "
                    }
                  >
                    الرئيسية <img src={l.listIcon} alt="icon" />
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default Sidebar;
