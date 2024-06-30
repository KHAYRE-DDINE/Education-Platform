import "./Home.css";
import icon from "../../../../../images/logo.svg";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { NavLink, Outlet } from "react-router-dom";

function Home() {
  const [lessons, setLessons] = useState([
    {
      id: 1,
      icon: icon,
      subject: "Mathematic",
      student: "khalid al walid",
    },
    {
      id: 1,
      icon: icon,
      subject: "Mathematic",
      student: "khalid al walid",
    },
    {
      id: 1,
      icon: icon,
      subject: "Mathematic",
      student: "khalid al walid",
    },
    {
      id: 1,
      icon: icon,
      subject: "Mathematic",
      student: "khalid al walid",
    },
    {
      id: 1,
      icon: icon,
      subject: "Mathematic",
      student: "khalid al walid",
    },
  ]);
  const [tests, setTests] = useState([
    {
      id: 1,
      icon: icon,
      subject: "Mathematic",
      student: "khalid al walid",
      day: "thursday",
      month: "july",
      date: `20 / july / 2016`,
    },
    {
      id: 1,
      icon: icon,
      subject: "Mathematic",
      student: "khalid al walid",
      day: "thursday",
      month: "july",
      date: `20 / july / 2016`,
    },
    {
      id: 1,
      icon: icon,
      subject: "Mathematic",
      student: "khalid al walid",
      day: "thursday",
      month: "july",
      date: `20 / july / 2016`,
    },
  ]);

  return (
    <div className="home">
      <div className="welcome">
        <h1 className="capitalize text-3xl mb-7">welcome, khalid al walid</h1>
        <div className="lessons mb-[40px]">
          <div className="head mb-4 flex justify-between">
            <h3>Your lessons</h3>
            <button className="text-primary-100 border-none">see all</button>
          </div>
          <div className="all-lessons flex gap-[0.9rem] flex-wrap">
            {lessons.map((l, id) => (
              <div
                key={id}
                className="lesson rounded-md border-[1px] border-grayD border-solid p-2 w-[200px] h-[200px]"
              >
                <div className="image-box h-[127px] bg-primary-200 flex justify-center items-center">
                  <img src={icon} alt="logo" className="w-[50px] h-[50px]" />
                </div>
                <div className="info mt-3">
                  <div className="subject-student">
                    <span className="capitalize">{l.subject}</span>
                  </div>
                  <div className="student">
                    <h4 className="capitalize text-sm opacity-75">
                      {l.student}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="tests mb-[40px]">
          <div className="head mb-4 flex justify-between">
            <h3>Your tests</h3>
            <button className="text-primary-100 border-none">see all</button>
          </div>
          <div className="all-tests flex gap-[0.9rem] flex-wrap">
            {tests.map((t, id) => (
              <div
                key={id}
                className="border-[1px] border-grayD border-solid rounded-md p-2"
              >
                <div className="test flex items-center w-[300px] ">
                  <div className="image-box h-[50px] mr-3 bg-primary-200">
                    <img src={icon} alt="logo" className="w-[100%] h-[100%]" />
                  </div>
                  <div className="info ">
                    <div className="subject-student">
                      <span className="capitalize">{t.subject}</span>
                    </div>
                    <div className="student">
                      <h4 className="capitalize text-sm opacity-75">
                        {t.student}
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="date mt-2 flex items-center">
                  <div className="icon mr-2">·$·$·$</div>
                  <span>
                    {t.month}, {t.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="recent mb-[40px]">
          <div className="head  flex justify-between">
            <h3>Recent</h3>
            <div className="hidden md:flex search-input relative">
              <CiSearch />
              <input
                type="search"
                name="search"
                className=""
                placeholder="Placeholder"
              />
            </div>
          </div>
          <div className="move-section border-b-[1px] border-solid border-grayD">
            <NavLink
              to="worked"
              className={({ isActive, isPending }) => {
                return isActive ? "text-primary-100 after:bg-primary-100" : "";
              }}
            >
              Worked on
            </NavLink>
            <NavLink
              to="viewed"
              className={({ isActive, isPending }) => {
                return isActive ? "text-primary-100 after:bg-primary-100" : "";
              }}
            >
              Viewed
            </NavLink>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Home;
