import React from "react";

function EnglishAccount({ courses, colleagues, subjectFill, cn }) {
  return (
    <div className="account pl-6">
      <div className="background absolute w-[100%]"></div>
      <div className="header-side flex justify-between">
        <div className="person">
          <div className="image rounded-full">
            <img src="" alt="" />
          </div>
          <div className="name">
            <h1>khalid Al walid</h1>
          </div>
        </div>
        <div className="badges flex justify-center items-center">
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
        </div>
      </div>
      <div className="statistics">
        <div className="top-title">
          <h3>statistic</h3>
          <span>other will only see what they can access </span>
        </div>
        <div className="details">
          <div className="box joined">
            <span>
              Date joined <br /> <b>3 months ago</b>
            </span>
          </div>
          <div className="box joined">
            <span>
              classes
              <br /> <b>3</b>
            </span>
          </div>
          <div className="box joined">
            <span>
              completed lessons <br /> <b>3</b>
            </span>
          </div>
          <div className="box joined">
            <span>
              completed assignments <br /> <b>3</b>
            </span>
          </div>
          <div className="box joined">
            <span>
              videos watched <br /> <b>3</b>
            </span>
          </div>
          <div className="box joined">
            <span>
              study hours <br /> <b>3</b>
            </span>
          </div>
          <div className="box joined">
            <span>
              average score <br /> <b>B+</b>
            </span>
          </div>
        </div>
      </div>
      <div className="recent-lessons">
        <div className="top-title flex justify-between items-center">
          <div>
            <h3>statistic</h3>
            <span>other will only see what they can access </span>
          </div>
          <span className="text-primary-100 ">View all</span>
        </div>
        <div className="lessons">
          <div className="grid grid-cols-1">
            {courses.map((c, idx) => (
              <div key={idx} className="course">
                <div className="lesson ">
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
                      {c.icon}
                    </span>
                    <div className="info">
                      <p className="lesson-name my-auto text-normalColor">
                        {c.unit}
                      </p>
                      <span>{c.student}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="colleagues">
        <div className="top-title flex justify-between items-center">
          <h3>colleagues</h3>
        </div>
        <div className="all-colleagues">
          <div className="grid grid-cols-1">
            {colleagues.map((c, idx) => (
              <div
                key={idx}
                className="colleague flex justify-start relative mt-6"
              >
                <div className="image w-10 h-10">
                  <img src={c.image} alt="" />
                </div>
                <div className="info">
                  <p className="colleague-name my-auto text-normalColor">
                    {c.student}
                  </p>
                  <span>
                    {c.gender === "male" ? "Mr" : "Mrs"}.
                    {c.student.split(" ")[0]} - {c.subject}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnglishAccount;
