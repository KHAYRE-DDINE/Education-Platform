import React, { useState } from "react";

function Current() {
  const [Courses, setCourses] = useState([
    {
      title: "MAth",
      length: "12",
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
      title: "Arabic",
      length: "12",
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
      title: "Physique",
      length: "12",
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
      title: "Programming",
      length: "12",
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
  ]);

  return (
    <div className="grid grid-cols-2 gap-8 mt-3">
      {Courses.map((c) => (
        <div className="course">
          <div className="top-section flex justify-between py-3 border-b-2 border-black border-b-solid">
            <p className="my-auto">{c.title}</p>
            {c.length > 5 && (
              <button className="text-link">see all ({c.length})</button>
            )}
          </div>
          <div className="lessons pb-4 pl-3">
            {c.lessons.map((l) => (
              <div className="lesson flex justify-start relative mt-6">
                <span className="circle">{l.id}</span>
                <p className="lesson-name my-auto ml-3">{l.name}</p>
                <button className="bg-primary text-white rounded-md py-1 px-3 absolute right-0">
                  {l.status !== "finished" ? "continue" : "finished"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Current;
