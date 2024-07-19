import React from "react";
import arrowDown from "../../../../../../images/down.svg";

function EnglishAbout() {
  return (
    <div className="learning">
      <div className="comments ">
        <div className="type flex">
          <div className="icon w-10 h-10"></div>
          <form className="input">
            <input
              type="text"
              className="!border-grayD"
              placeholder="Add a comment..."
            />
          </form>
        </div>
        <div className="latest-updates">
          <strong>Latest update</strong>
          <div className="all-comments">
            <div className="comment flex items-center">
              <div className=" cursor-pointer arrow absolute right-[15px] top-[12px]">
                <img className="w-[15px]" src={arrowDown} alt="arrow" />
              </div>
              <div className="avatar w-10"></div>
              <div className="info">
                <div className="title">
                  <h4>learning</h4>
                </div>
                <span className="">
                  I just figure out <br />{" "}
                  <a className="text-link !underline" href="#">
                    http://localhost:3000/dashboard/assignments/learning
                  </a>
                </span>
                <div className="commenter flex items-center">
                  <div className="avatar"></div>
                  <h5 className="name">jamal monim</h5>
                  <span>2 min ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnglishAbout;
