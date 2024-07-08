import "./Home.css";
import icon from "../../../../../images/logo.svg";
import mainLogo from "../../../../../images/logo2.svg";
import calender from "../../../../../images/calender.svg";
import React, { useContext, useState } from "react";
import { CiBadgeDollar, CiSearch } from "react-icons/ci";
import { NavLink, useNavigate, Outlet, useLocation } from "react-router-dom";
import { LanguageContext } from "../../../../../App";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

function Home() {
  const [subject, setSubject] = useState([
    {
      id: 1,
      icon: icon,
      subject: "arabic",
      student: "khalid al walid",
    },
    {
      id: 2,
      icon: icon,
      subject: "physics",
      student: "khalid al walid",
    },
    {
      id: 3,
      icon: icon,
      subject: "math",
      student: "khalid al walid",
    },
  ]);
  const [tests, setTests] = useState([
    {
      id: 1,
      icon: icon,
      subject: "math",
      student: "khalid al walid",
      day: "thursday",
      month: "july",
      date: `20 / july / 2016`,
    },
    {
      id: 2,
      icon: icon,
      subject: "physics",
      student: "khalid al walid",
      day: "thursday",
      month: "july",
      date: `20 / july / 2016`,
    },
    {
      id: 3,
      icon: icon,
      subject: "arabic",
      student: "khalid al walid",
      day: "thursday",
      month: "july",
      date: `20 / july / 2016`,
    },
  ]);
  const [courses, setCourses] = useState([
    {
      title: "math",
      type: "not programming",
      length: "12",
      color: "#4cc0da",
      lessons: [
        {
          id: "2x",
          name: "Algebra",
          completed: true,
          status: "progress",
        },
        {
          id: "2x",
          name: "Algebra",
          completed: false,
          status: "progress",
        },
        {
          id: "2x",
          name: "Algebra",
          completed: false,
          status: "progress",
        },
        {
          id: "2x",
          name: "Algebra",
          completed: false,
          status: "progress",
        },
      ],
    },
    {
      title: "arabic",
      type: "programming",
      length: "12",
      color: "#f2e214",
      lessons: [
        {
          id: "2x",
          name: "Algebra",
          completed: false,
          status: "progress",
        },
        {
          id: "2x",
          name: "Algebra",
          completed: false,
          status: "progress",
        },
        {
          id: "2x",
          name: "Algebra",
          completed: false,
          status: "progress",
        },
        {
          id: "2x",
          name: "Algebra",
          completed: false,
          status: "progress",
        },
      ],
    },
    {
      title: "physics",
      type: "not programming",
      length: "12",
      color: "#ff8128",
      lessons: [
        {
          id: "2x",
          name: "Algebra",
          completed: false,
          status: "completed",
        },
        {
          id: "2x",
          name: "Algebra",
          completed: false,
          status: "progress",
        },
        {
          id: "2x",
          name: "Algebra",
          completed: false,
          status: "progress",
        },
        {
          id: "2x",
          name: "Algebra",
          completed: false,
          status: "progress",
        },
      ],
    },
  ]);
  const subjectFill = {
    math: "bg-blue-100 text-blue-600",
    physics: "bg-red-100 text-red-600",
    arabic: "bg-yellow-100 text-yellow-600",
  };

  const [today, setToday] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const language = useContext(LanguageContext);

  return (
    <div className="home grid grid-cols-1 lg:grid-cols-3 gap-10 ">
      {language === "english" ? (
        <React.Fragment>
          <section className="welcome col-span-2 py-5">
            <h1 className="capitalize text-3xl mb-7">
              welcome, khalid al walid
            </h1>
            <div className="tests mb-[40px]">
              <div className="head mb-4 flex justify-between">
                <h3>Your tests</h3>
                <button className="text-primary-100 border-none">
                  see all
                </button>
              </div>
              <div className="all-tests flex gap-[0.9rem] flex-wrap">
                {tests.map((t, id) => (
                  <div
                    key={id}
                    className="cover border-[1px] border-grayD border-solid rounded-md p-2"
                  >
                    <div className="test flex items-center w-[300px] ">
                      <div
                        className={cn(
                          `image-box h-[50px] mr-3`,
                          subjectFill[t.subject]
                        )}
                      >
                        <img
                          src={mainLogo}
                          alt="logo"
                          className="w-[100%] h-[100%]"
                        />
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
                      <div className="icon mr-2">
                        <img src={calender} alt="calender" />
                      </div>
                      <span>
                        {t.month}, {t.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="subjects mb-[40px]">
              <div className="head mb-4 flex justify-between">
                <h3>Your subjects</h3>
                <button className="text-primary-100 border-none">
                  see all
                </button>
              </div>
              <div className="all-subjects flex gap-[0.9rem] flex-wrap">
                {subject.map((l, id) => (
                  <div
                    key={id}
                    className="subject rounded-md border-[1px] border-grayD border-solid p-2 w-[200px] h-[200px]"
                  >
                    <div
                      className={cn(
                        `image-box h-[127px] bg-primary-1001 flex justify-center items-center`,
                        subjectFill[l.subject]
                      )}
                    >
                      <img
                        src={mainLogo}
                        alt="logo"
                        className="w-[50px] h-[50px]"
                      />
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
            <div className="lessons">
              <div className="head flex justify-between">
                <h3>Your lessons</h3>
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
              <div className="grid grid-cols-1 xlg:grid-cols-2 gap-8 mt-3">
                {courses.map((c, idx) => (
                  <div key={idx} className="course">
                    <div className="top-section flex justify-between py-3 border-b-2 border-grayD border-b-solid">
                      <p className="my-auto text-normalColor">{c.title}</p>
                      {c.length > 5 && (
                        <button className="text-link">
                          see all ({c.length})
                        </button>
                      )}
                    </div>
                    <div className="lessons pb-4 pl-3">
                      {c.lessons.map((l, idx) => (
                        <div
                          key={idx}
                          className="lesson flex justify-start relative mt-6"
                        >
                          <span
                            className={cn(
                              `circle  after:bg-grayD`,
                              subjectFill[c.title]
                            )}
                          >
                            {l.id}
                          </span>
                          <p className="lesson-name my-auto ml-3 text-normalColor">
                            {l.name}
                          </p>
                          {idx === 0 || c.lessons[idx - 1]?.completed ? (
                            <button className="bg-primary-100 text-white rounded-md py-1 px-3 absolute right-0">
                              {l.status !== "finished" &&
                              c.type === "not programming"
                                ? "continue"
                                : l.status !== "finished" &&
                                  c.type === "programming"
                                ? "start"
                                : ""}
                            </button>
                          ) : (
                            ""
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="right-side !border-grayD py-5">
            <div className="profile-info rounded-xl border-2 border-grayD border-solid px-3 py-2">
              <div className="details flex-wrap flex justify-between items-center">
                <div className="left flex items-center">
                  <div className="photo">
                    <img src={mainLogo} alt="avatar" />
                  </div>
                  <div className="name-class">
                    <h5 className="name">khalid al walid</h5>
                    <span className="class">7th grade</span>
                  </div>
                </div>
                <div className="badges flex items-center justify-between flex-wrap">
                  <span className="badge-item flex justify-center items-center">
                    <CiBadgeDollar />
                  </span>
                  <span className="badge-item flex justify-center items-center">
                    <CiBadgeDollar />
                  </span>
                  <span className="badge-item flex justify-center items-center">
                    <CiBadgeDollar />
                  </span>
                  <span className="badge-item flex justify-center items-center">
                    <CiBadgeDollar />
                  </span>
                  <span className="badge-item flex justify-center items-center">
                    <CiBadgeDollar />
                  </span>
                </div>
              </div>
              <div className="calender flex-wrap gap-1 flex justify-between items-center pt-4">
                <span
                  className={`date rounded-mds border-2 border-solid border-gray-300${
                    today ? "text-white bg-primary-100" : "text-black bg-white"
                  }`}
                >
                  04 <br /> <b>may</b>
                </span>
                <span
                  className={`date rounded-mds border-2 border-solid border-gray-300${
                    today ? "text-white bg-primary-100" : "text-black bg-white"
                  }`}
                >
                  04 <br /> <b>may</b>
                </span>
                <span
                  className={`date rounded-mds border-2 border-solid border-gray-300${
                    today ? "text-white bg-primary-100" : "text-black bg-white"
                  }`}
                >
                  04 <br /> <b>may</b>
                </span>
                <span
                  className={`date rounded-mds border-2 border-solid border-gray-300${
                    today ? "text-white bg-primary-100" : "text-black bg-white"
                  }`}
                >
                  04 <br /> <b>may</b>
                </span>
                <span
                  className={`date rounded-mds border-2 border-solid border-gray-300${
                    today ? "text-white bg-primary" : "text-black bg-white"
                  }`}
                >
                  04 <br /> <b>may</b>
                </span>
              </div>
            </div>
            <div className="teachers">
              <div className="top-section flex justify-between  pt-3 pb-2">
                <p className="my-auto capitalize font-bold ">notices</p>
              </div>
              <div className="all-notices ">
                <div className="box flex items-start border-2 border-b-solid rounded-xl border-b-gray-300">
                  <div className="image w-8 h-8 relative">
                    <img
                      src={mainLogo}
                      alt="avatar"
                      className="absolute w-8 h-8"
                    />
                  </div>
                  <div className="info ml-3">
                    <span className="subject capitalize">Math</span>
                    <h5 className="unit capitalize">unit1: linear equation</h5>
                    <p className="notice">
                      {" "}
                      Iure placeat quasi similique tempore debitis doloremque
                      atque et provident adipisci{" "}
                    </p>
                  </div>
                </div>
                <div className="box flex items-start border-2 border-b-solid rounded-xl border-b-gray-300">
                  <div className="image w-8 h-8 relative">
                    <img
                      src={mainLogo}
                      alt="avatar"
                      className="absolute w-8 h-8"
                    />
                  </div>
                  <div className="info ml-3">
                    <span className="subject capitalize">Math</span>
                    <h5 className="unit capitalize">unit1: linear equation</h5>
                    <p className="notice">
                      {" "}
                      Iure placeat quasi similique tempore debitis doloremque
                      atque et provident adipisci{" "}
                    </p>
                  </div>
                </div>
                <div className="box flex items-start border-2 border-b-solid rounded-xl border-b-gray-300">
                  <div className="image w-8 h-8 relative">
                    <img
                      src={mainLogo}
                      alt="avatar"
                      className="absolute w-8 h-8"
                    />
                  </div>
                  <div className="info ml-3">
                    <span className="subject capitalize">Math</span>
                    <h5 className="unit capitalize">unit1: linear equation</h5>
                    <p className="notice">
                      {" "}
                      Iure placeat quasi similique tempore debitis doloremque
                      atque et provident adipisci{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      ) : (
        <section className="welcome">
          <h1 className="capitalize text-3xl mb-7">welcome, khalid al walid</h1>
          <div className="subjects mb-[40px]">
            <div className="head mb-4 flex flex-row-reverse justify-between">
              <h3>Your lessons</h3>
              <button className="text-primary-100 border-none">see all</button>
            </div>
            <div className="all-subjects flex gap-[0.9rem] flex-wrap">
              {subject.map((l, id) => (
                <div
                  key={id}
                  className="lesson rounded-md border-[1px] border-grayD border-solid p-2 w-[200px] h-[200px]"
                >
                  <div className="image-box h-[127px] bg-primary-1001 flex justify-center items-center">
                    <img
                      src={mainLogo}
                      alt="logo"
                      className="w-[50px] h-[50px]"
                    />
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
            <div className="head mb-4 flex flex-row-reverse justify-between">
              <h3>Your tests</h3>
              <button className="text-primary-100 border-none">see all</button>
            </div>
            <div className="all-tests flex-row-reverse flex gap-[0.9rem] flex-wrap">
              {tests.map((t, id) => (
                <div
                  key={id}
                  className="border-[1px] border-grayD border-solid rounded-md p-2"
                >
                  <div className="test flex flex-row-reverse items-center w-[300px] ">
                    <div className="image-box h-[50px] ml-3 bg-primary-1001">
                      <img
                        src={mainLogo}
                        alt="logo"
                        className="w-[100%] h-[100%]"
                      />
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
                  <div className="date mt-2 flex-row-reverse flex items-center">
                    <div className="icon mr-2">·$·$·$</div>
                    <span>
                      {t.month}, {t.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="recent">
            <div className="head flex-row-reverse flex justify-between">
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
            <div className="flex flex-row-reverse move-section border-b-[1px] border-solid border-grayD">
              <NavLink
                to="worked"
                className={({ isActive, isPending }) => {
                  return isActive
                    ? "text-primary-100 after:bg-primary-100"
                    : "";
                }}
              >
                Worked on
              </NavLink>
              <NavLink
                to="viewed"
                className={({ isActive, isPending }) => {
                  return isActive
                    ? "text-primary-100 after:bg-primary-100"
                    : "";
                }}
              >
                Viewed
              </NavLink>
            </div>
            <Outlet />
          </div>
        </section>
      )}
    </div>
  );
}

export default Home;
