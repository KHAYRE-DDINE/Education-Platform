import React, { useEffect, useState } from "react";
import "./Courses.css";
import icon from "../../../../../images/logo.svg";
import mainLogo from "../../../../../images/logo2.svg";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

function Courses() {
  const [move, setMove] = useState([
    "current learning",
    "completed",
    "archived",
  ]);
  const [subject, setSubject] = useState([
    {
      id: 1,
      icon: icon,
      subject: "arabic",
      description: "lorem jhdy mant moujs mdauchaijcsmk kashck mihi khi ",
    },
    {
      id: 2,
      icon: icon,
      subject: "physics",
      description: "lorem jhdy mant moujs mdauchaijcsmk kashck mihi khi ",
    },
    {
      id: 3,
      icon: icon,
      subject: "math",
      description: "lorem jhdy mant moujs mdauchaijcsmk kashck mihi khi ",
    },
  ]);
  const subjectFill = {
    math: "bg-blue-100 text-blue-600",
    physics: "bg-red-100 text-red-600",
    arabic: "bg-yellow-100 text-yellow-600",
  };
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("courses")) {
      navigate("current learning");
    }
  }, []);

  return (
    <div className="courses flex gap-6">
      <div className="left-side">
        <h1 className="capitalize text-3xl mb-6">courses</h1>
        <div className="top-section mb-7">
          <div className="move after:bg-grayD flex items-center">
            <Link
              className={
                "text-primary-100 active mr-3 capitalize after:bg-primary-100"
              }
            >
              recent courses
            </Link>
          </div>
        </div>
        <div className="recent-courses flex justify-start items-center flex-wrap gap-4 my-10">
          {subject.map((l, id) => (
            <div
              key={id}
              className="subject rounded-lg border-[1px] border-grayD border-solid p-2 "
            >
              <div
                className={cn(
                  `image-box h-[127px] flex justify-center items-center`,
                  subjectFill[l.subject]
                )}
              >
                <img src={mainLogo} alt="logo" className="w-[50px] h-[50px]" />
              </div>
              <div className="info mt-3">
                <div className="subject-student">
                  <span className="capitalize">{l.subject}</span>
                </div>
                <div className="student">
                  <h4 className="capitalize text-sm opacity-75">
                    {l.description}
                  </h4>
                </div>
              </div>
              <div className="buttons">
                <button className="continue text-primary-100 bg-primary-600">
                  continue
                </button>
                <button className="assignment bg-colorGray-100 text-colorGray-600">
                  assignments
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="sections">
          <div className="top-section mb-7">
            <div className="move after:bg-grayD flex items-center">
              {move.map((e, idx) => (
                <Link
                  key={idx}
                  to={e}
                  className={
                    location.pathname.includes(e.substring(0, 6))
                      ? "text-primary-100 active mr-3 capitalize after:bg-primary-100"
                      : "text-normalColor mr-3 capitalize "
                  }
                >
                  {e}
                </Link>
              ))}
            </div>
          </div>
          <Outlet subject={subject} subjectFill={subjectFill} cn={cn} />
        </div>
      </div>
      <div className="right-side !border-grayD bg-gray-100">
        <div className="subject right-box rounded-lg border-[1px] border-grayD border-solid p-2 ">
          <div
            className={`image-box h-[127px] flex justify-center items-center bg-purple-200`}
          >
            <img src={mainLogo} alt="logo" className="w-[50px] h-[50px]" />
          </div>
          <div className="info mt-3">
            <div className="subject-student">
              <span className="capitalize">build right features</span>
            </div>
            <div className="student">
              <h4 className="capitalize text-sm opacity-75">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae corrupti perspiciatis quam labore quis!
              </h4>
            </div>
          </div>
          <div className="buttons">
            <button className="continue bg-colorGray-100 text-colorGray-600">
              try is now
            </button>
            <button className="assignment bg-colorGray-[#f3f4f63b] text-colorGray-600">
              learn more
            </button>
          </div>
        </div>
        <div className="upcoming right-box rounded-lg border-[1px] border-solid !border-grayD">
          <div className="head flex justify-between !border-grayD ">
            <h3>upcoming classes</h3>
            <button className="text-primary-100 border-none">view all</button>
          </div>
          <div className="content">
            <div className="image">
              <img src="" alt="" />
            </div>
            <h2 className="title">start enrolling classes</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Link to="more" className="text-primary-100 after:bg-primary-100">
              Read more
            </Link>
          </div>
        </div>
        <div className="alerts right-box rounded-lg border-[1px] border-solid !border-grayD">
          <div className="head flex justify-between !border-grayD ">
            <h3>upcoming classes</h3>
            <button className="text-primary-100 border-none">view all</button>
          </div>
          <div className="content">
            <div className="image">
              <img src="" alt="" />
            </div>
            <h2 className="title">start enrolling classes</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Link to="more" className="text-primary-100 after:bg-primary-100">
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
