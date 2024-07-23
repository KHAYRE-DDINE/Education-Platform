import React from "react";
import searchIcon from "../../../../../images/search.svg";

function EnglishMessage() {
  return (
    <div className="message-section flex">
      <div className="sideBar-msg">
        <div className="title">
          <h1 className="capitalize">message</h1>
        </div>
        <div className="box-search">
          <input
            type="search"
            className="filter"
            placeholder="Searching something..."
          />
          <img src={searchIcon} className="" alt="searchIcon" />
        </div>
        <div className="members">
          <div className="member flex">
            <div className="image">
              <img src="" alt="" />
            </div>
            <div className="info ">
              <div className="name">
                <h4>khalid Al Walid</h4>
              </div>
              <div className="last-msg flex items-center">
                <span className="msg">hey</span>
                <span className="date">20min</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rightSide-msg">
        <div className="messages">
          <div className="message owner flex-row-reverse flex">
            <img src="" className="w-10 h-10" alt="" />
            <span className="text-white bg-primary-100 mx-3">
              hey khayreddine, how have you been lately
            </span>
          </div>
          <div className="message host flex">
            <img src="" className="w-10 h-10" alt="" />
            <span className="text-black bg-grayD mx-3">
              hey khayreddine, how have you been lately
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnglishMessage;
