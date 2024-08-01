import React from "react";
import { useParams } from "react-router-dom";
import avatar from "../../../../../../images/avatar.svg";

function EnglishAbout() {
  const { id } = useParams();

  return (
    <div className="about">
      <div className="description">
        <div className="title">
          <h3>Description</h3>
        </div>
        <div className="brief">
          <p>
            Briefly describe what this assignment is about and what to expect,
            so you can provide students a common understanding.
          </p>
        </div>
      </div>
      <div className="comments">
        <div className="all-comments">
          <div className="comment flex items-start bg-white">
            <div className="image w-8 h-8 relative">
              <img src={avatar} alt="avatar" className="absolute w-8 h-8" />
            </div>
            <div className="info ml-3">
              <span className="comment-name capitalize text-gray-700 !flex !items-center gap-2">
                Khalid Al Walid{" "}
                <small className="text-gray-600 flex items-center gap-2">
                  2 hours ago
                </small>{" "}
              </span>
              <p className="comment-text text-gray-700 ">
                Hello teacher What units do we have to revise for this test?
              </p>
            </div>
          </div>
        </div>
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
      </div>
    </div>
  );
}

export default EnglishAbout;
