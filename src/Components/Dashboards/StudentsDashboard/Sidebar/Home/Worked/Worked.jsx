import React, { useState } from "react";
import icon from "../../../../../../images/logo.svg";

function Worked() {
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
    <div>
      <div className="this-month">
        <h3 className="mb-3 mt-5">This month</h3>
        <div className="events">
          {tests.map((t) => (
            <div className="border-[1px] flex items-center justify-between border-grayD border-solid rounded-md p-2 mb-3">
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
              <div className="date">
                <span>{t.month} 7</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Worked;
