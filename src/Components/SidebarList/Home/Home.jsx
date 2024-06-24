import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Home.css";
import { Outlet } from "react-router-dom";
import { CiBadgeDollar } from "react-icons/ci";

function Home() {
  const [move, setMove] = useState([
    "current learning",
    "completed",
    "archived",
  ]);
  const [today, setToday] = useState(false);
  const [teachers, setTeachers] = useState([
    {
      image: "",
      name: "khalid",
      subject: "mathematics",
    },
    {
      image: "",
      name: "khalid",
      subject: "mathematics",
    },
    {
      image: "",
      name: "khalid",
      subject: "mathematics",
    },
  ]);
  const [progress, setProgress] = useState([
    {
      subject: "math",
      progress: "45",
    },
    {
      subject: "math",
      progress: "45",
    },
    {
      subject: "math",
      progress: "45",
    },
  ]);

  const location = useLocation();

  return (
    <div className="home grid grid-cols-3 gap-10 pb-4">
      <section className="courses col-span-2">
        <div className="top-section flex items-center">
          <h2 className="mr-2 text-3xl"> My learning</h2>
          <div className="move flex items-center">
            {move.map((e, idx) => (
              <Link
                key={idx}
                to={e}
                className={
                  location.pathname.includes(e.substring(0, 6))
                    ? "text-primary mx-3 capitalize"
                    : "text-textColor mx-3 capitalize"
                }
              >
                {e}
              </Link>
            ))}
          </div>
        </div>
        <Outlet />
      </section>
      <section className="right-side">
        <div className="profile-info rounded-xl border-2 border-grayD border-solid px-3 py-2">
          <div className="details flex justify-between items-center">
            <div className="left flex items-center">
              <div className="photo"></div>
              <div className="name-class ml-3">
                <h5 className="name">khalid al walid</h5>
                <span className="class">7th grade</span>
              </div>
            </div>
            <div className="badges flex items-center justify-between">
              <span className="badge-item flex justify-center items-center">
                <CiBadgeDollar />
                <strong>0</strong>
              </span>
              <span className="badge-item flex justify-center items-center">
                <CiBadgeDollar />
                <strong>0</strong>
              </span>
              <span className="badge-item flex justify-center items-center">
                <CiBadgeDollar />
                <strong>0</strong>
              </span>
              <span className="badge-item flex justify-center items-center">
                <CiBadgeDollar />
                <strong>0</strong>
              </span>
              <span className="badge-item flex justify-center items-center">
                <CiBadgeDollar />
                <strong>0</strong>
              </span>
            </div>
          </div>
          <div className="calender gap-3 flex justify-start items-center pt-4">
            <span
              className={`date rounded-mds border-2 border-solid border-gray-300${
                today ? "text-white bg-primary" : "text-black bg-white"
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
            <span
              className={`date rounded-mds border-2 border-solid border-gray-300${
                today ? "text-white bg-primary" : "text-black bg-white"
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
            <span
              className={`date rounded-mds border-2 border-solid border-gray-300${
                today ? "text-white bg-primary" : "text-black bg-white"
              }`}
            >
              04 <br /> <b>may</b>
            </span>
          </div>
        </div>
        <div className="teachers ">
          <div className="top-section flex justify-between  pt-3 pb-2">
            <p className="my-auto capitalize font-bold ">teachers</p>
            {teachers.length > 5 && (
              <button className="text-link">see all ({teachers.length})</button>
            )}
          </div>
          <div className="all-teachers border-solid border-grayD border-2 rounded-xl">
            {teachers.map((t, idx) => (
              <div
                key={idx}
                className="teacher flex items-center border-b-2 border-b-solid border-b-gray-300"
              >
                <div className="image">
                  <img src="" alt="" />
                </div>
                <div className="info">
                  <h5 className="name capitalize">{t.name}</h5>
                  <span className="subject capitalize">{t.subject}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="all-progress">
          <div className="prog">
            <div className="top-section flex justify-between  pt-3 pb-2">
              <p className="my-auto capitalize font-bold ">progress</p>
              {progress.length > 5 && (
                <button className="text-link">
                  see all ({progress.length})
                </button>
              )}
            </div>
            <div className=" border-solid border-grayD border-2 rounded-xl">
              {progress.map((p, idx) => (
                <div
                  key={idx}
                  className="progressBar border-b-2  border-b-solid border-b-grayD"
                >
                  <span className="capitalize font-bold pb-1 inline-block">
                    {p.subject}
                  </span>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Example with label"
                    aria-valuenow={p.progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar"
                      style={{ width: p.progress + "%" }}
                    >
                      {p.progress}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
