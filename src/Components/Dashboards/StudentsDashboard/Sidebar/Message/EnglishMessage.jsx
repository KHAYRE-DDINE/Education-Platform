import React from "react";
import searchIcon from "../../../../../images/search.svg";
import avatar from "../../../../../images/avatar.svg";

function EnglishMessage() {
  return (
    <div className="message-section flex">
      <div className="sideBar-msg bg-gray-50">
        <div className="title">
          <h1 className="capitalize text-gray-700">message</h1>
        </div>
        <div className="box-search">
          <input
            type="search"
            className="filter !border-gray-300"
            placeholder="Searching something..."
          />
          <img src={searchIcon} className="" alt="searchIcon" />
        </div>
        <div className="members">
          <div className="member flex items-center">
            <div className="image">
              <img src={avatar} alt="avatar" />
            </div>
            <div className="info ">
              <div className="name">
                <h4 className="text-gray-700">khalid Al Walid</h4>
              </div>
              <div className="last-msg flex items-center">
                <span className="msg text-gray-600">hey</span>
                <span className="date text-gray-400">20min</span>
              </div>
            </div>
          </div>
          <div className="member flex items-center">
            <div className="image">
              <img src={avatar} alt="avatar" />
            </div>
            <div className="info ">
              <div className="name">
                <h4 className="text-gray-700">Amal Hamdalah</h4>
              </div>
              <div className="last-msg flex items-center">
                <span className="msg text-gray-600">
                  yes the document I sent you contains all{" "}
                </span>
                <span className="date text-gray-400">2min</span>
              </div>
            </div>
          </div>
          <div className="member flex items-center">
            <div className="image">
              <img src={avatar} alt="avatar" />
            </div>
            <div className="info ">
              <div className="name">
                <h4 className="text-gray-700">Jamal Monim</h4>
              </div>
              <div className="last-msg flex items-center">
                <span className="msg text-gray-600">
                  I’ll mention this issue to Mr. Kamal and wait
                </span>
                <span className="date text-gray-400">1mo</span>
              </div>
            </div>
          </div>
          <div className="member flex items-center">
            <div className="image">
              <img src={avatar} alt="avatar" />
            </div>
            <div className="info ">
              <div className="name">
                <h4 className="text-gray-700">khalid Al Walid</h4>
              </div>
              <div className="last-msg flex items-center">
                <span className="msg text-gray-600">hey</span>
                <span className="date text-gray-400">20min</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rightSide-msg">
        <div className="messages flex flex-col gap-8">
          <div className="message owner flex-row-reverse flex gap-2">
            <img src={avatar} alt="avatar" />
            <span className="text-white bg-primary-100 mx-3">
              Man, that logarithms lesson was something else! I'm still trying
              to wrap my head around the whole concept.
            </span>
          </div>
          <div className="message host flex gap-2">
            <img src={avatar} alt="avatar" />
            <span className="text-black bg-gray-100 mx-3">
              Yeah, me too. I kind of get the basic idea of it being the inverse
              of exponents, but those properties and rules are killing me!
            </span>
          </div>
          <div className="message owner flex-row-reverse flex gap-2">
            <img src={avatar} alt="avatar" />
            <span className="text-white bg-primary-100 mx-3">
              Right? Like, the product rule, quotient rule, and power rule. I
              keep mixing them up!{" "}
            </span>
          </div>
          <div className="message host flex gap-2">
            <img src={avatar} alt="avatar" />
            <span className="text-black bg-grayD mx-3">
              I know! And don't even get me started on the change of base
              formula. I'm pretty sure my brain is about to explode.
            </span>
          </div>
        </div>
        <div className="input-msg">
          <input type="text" className="!border-grayD" placeholder="Aa" />
        </div>
      </div>
    </div>
  );
}

export default EnglishMessage;
