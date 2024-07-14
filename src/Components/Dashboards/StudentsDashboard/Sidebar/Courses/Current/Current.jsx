import React, { useState } from "react";
import mainLogo from "../../../../../../images/logo2.svg";
import icon from "../../../../../../images/logo.svg";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function Current() {
  const [isCompleted, setIsCompleted] = useState(false);
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
      subject: "arabic",
      description: "lorem jhdy mant moujs mdauchaijcsmk kashck mihi khi ",
    },
    {
      id: 3,
      icon: icon,
      subject: "arabic",
      description: "lorem jhdy mant moujs mdauchaijcsmk kashck mihi khi ",
    },
    {
      id: 4,
      icon: icon,
      subject: "physics",
      description: "lorem jhdy mant moujs mdauchaijcsmk kashck mihi khi ",
    },
    {
      id: 5,
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
  return (
    <React.Fragment>
      <div className=" my-10">
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
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Current;
