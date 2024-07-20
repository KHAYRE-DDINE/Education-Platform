import "./Home.css";
import icon from "../../../../../images/logo.svg";

import React, { useContext, useState } from "react";

import { LanguageContext } from "../../../../../App";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import EnglishHome from "./EnglishHome";
import ArabicHome from "./ArabicHome";

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
  const language = useContext(LanguageContext);

  return (
    <div>
      {language === "english" ? (
        <EnglishHome
          subject={subject}
          tests={tests}
          courses={courses}
          subjectFill={subjectFill}
          today={today}
          cn={cn}
        />
      ) : (
        <ArabicHome
          subject={subject}
          tests={tests}
          courses={courses}
          subjectFill={subjectFill}
          today={today}
          cn={cn}
        />
      )}
    </div>
  );
}

export default Home;
