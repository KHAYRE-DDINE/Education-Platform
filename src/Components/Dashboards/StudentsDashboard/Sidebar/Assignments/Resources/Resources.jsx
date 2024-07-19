import React, { useState } from "react";
import mainLogo from "../../../../../../images/logo2.svg";
import icon from "../../../../../../images/logo.svg";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

function Completed() {
  const [subject, setSubject] = useState([
    {
      id: 1,
      icon: icon,
      subject: "arabic",
      description: "lorem jhdy mant moujs  ",
    },
    {
      id: 2,
      icon: icon,
      subject: "arabic",
      description: "lorem jhdy mant moujs  ",
    },
    {
      id: 3,
      icon: icon,
      subject: "arabic",
      description: "lorem jhdy mant moujs  ",
    },
  ]);

  return (
    <div className=" my-10">
      <div className="all-resources flex gap-[0.9rem] flex-wrap">
        {subject.map((l, id) => (
          <div
            key={id}
            className="resource rounded-md border-[1px] border-grayD border-solid  w-[200px] "
          >
            <div
              className={`image-box h-[127px] bg-primary-1001 flex justify-center items-center`}
            >
              <img src={mainLogo} alt="logo" className="w-[50px] h-[50px]" />
            </div>
            <div className="info mt-3 bg-white">
              <div className="description">
                <span className="capitalize">{l.subject}</span>
              </div>
              <div className="name">
                <h4 className="capitalize ">{l.description}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Completed;
