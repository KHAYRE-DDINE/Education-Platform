import React from "react";
import arrowDown from "../../../../../../images/down.svg";
import avatar from "../../../../../../images/avatar.svg";

function EnglishAbout() {
  return (
    <div className="learning">
      <div className="comments ">
        <div className="type flex mt-6 mb-3">
          <div className="icon mr-[0.625rem] w-10 h-10">
            <img src={avatar} alt="avatar" />
          </div>
          <form className="input">
            <input
              type="text"
              className="!border-gray-300"
              placeholder="Add a comment..."
            />
          </form>
        </div>
        <div className="latest-updates gap-3">
          <div className="text">
            <strong className="text-gray-700">Latest update</strong>
          </div>
          <div className="all-comments">
            <div className="comment relative flex">
              <div className=" cursor-pointer arrow absolute right-[15px] top-[12px]">
                <img className="w-[15px]" src={arrowDown} alt="arrow" />
              </div>
              <div className="avatar w-8"></div>
              <div className="info">
                <div className="title mb-5">
                  <h4 className="text-gray-700">learning</h4>
                </div>
                <span className="text-gray-500">
                  I just figured out you can use it like this
                  <br />
                  <a className="text-link !underline" href="#">
                    http://localhost:3000/dashboard/assignments/learning
                  </a>
                </span>
                <div className="commenter flex items-center">
                  <div className="avatar"></div>
                  <h5 className="name text-gray-500">jamal monim</h5>
                  <span className="text-gray-500">2 min ago</span>
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
