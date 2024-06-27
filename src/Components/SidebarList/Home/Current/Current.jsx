import { useState } from "react";

function Current() {
  const [courses, setCourses] = useState([
    {
      title: "MAth",
      length: "12",
      color: "#ccc",
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
      color: "#453",
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
      color: "#fff",
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
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-3">
      {courses.map((c, idx) => (
        <div key={idx} className="course">
          <div className="top-section flex justify-between py-3 border-b-2 border-grayD border-b-solid">
            <p className="my-auto text-normalColor">{c.title}</p>
            {c.length > 5 && (
              <button className="text-link">see all ({c.length})</button>
            )}
          </div>
          <div className="lessons pb-4 pl-3">
            {c.lessons.map((l, idx) => (
              <div
                key={idx}
                className="lesson flex justify-start relative mt-6"
              >
                <span className={`circle !bg-[${c.color}] after:bg-grayD`}>
                  {l.id}
                </span>
                <p className="lesson-name my-auto ml-3 text-normalColor">
                  {l.name}
                </p>
                {/* {(courses[idx].lessons[idx - 1]?.status === "completed" ||
                  courses[idx].lessons[idx - 1]) && ( */}
                <button className="bg-primary text-white rounded-md py-1 px-3 absolute right-0">
                  {l.status !== "finished" ? "continue" : "finished"}
                </button>
                {/* )} */}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Current;
