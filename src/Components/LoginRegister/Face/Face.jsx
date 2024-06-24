import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import "./Face.css";
import { LanguageContext } from "../../../App";
import logo from "../../../images/logo.svg";

function Face() {
  const language = useContext(LanguageContext);

  const location = useLocation();

  return (
    <React.Fragment>
      {language === "english" ? (
        <div
          className={`face bg-secondary-200 flex justify-center items-center ${
            location.pathname === "/LoginRegister"
              ? "h-firstHeightFace"
              : location.pathname.includes("/ByUsername")
              ? "h-secondHeightFace"
              : ""
          }`}
        >
          <div className="info">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
            <h1>
              Join Al Rihla Academy for <br /> the best E-learning
            </h1>
            <p>Log in to Al Rihla Academy to get started!</p>
          </div>
        </div>
      ) : (
        <div
          className={`face bg-secondary-200 flex justify-center items-center ${
            location.pathname === "/LoginRegister"
              ? "h-firstHeightFace"
              : location.pathname.includes("/ByUsername")
              ? "h-secondHeightFace"
              : ""
          }`}
        >
          <div className="info">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
            <h1>
              انضم إلى أكاديمية الرحلة للحصو <br /> على أفضل تعليم إلكتروني
            </h1>
            <p>قم بالتسجيل في أكاديمية الرحلة للبدء! لتعليم إلكتروني أفضل </p>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default Face;
