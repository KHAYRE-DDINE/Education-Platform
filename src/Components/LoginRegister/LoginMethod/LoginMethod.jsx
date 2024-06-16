import React, { useContext, useState } from "react";
import "./LoginMethod.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { LanguageContext } from "../../../App";

function LoginMethod() {
  const language = useContext(LanguageContext);
  return (
    <React.Fragment>
      {language === "english" ? (
        <div className="way">
          <a className="gmail" href="#">
            <FcGoogle />
            Continue with google
          </a>
          <a className="apple" href="#">
            <FaApple />
            Continue with apple
          </a>
          <a className="facebook" href="#">
            <FaFacebook />
            Continue with facebook
          </a>
        </div>
      ) : (
        <div className="way">
          <a className="gmail" href="#">
            <FcGoogle />
            التسجيل بإستخدام غوغل
          </a>
          <a className="apple" href="#">
            <FaApple />
            التسجيل بإستخدام أبل
          </a>
          <a className="facebook" href="#">
            <FaFacebook />
            التسجيل بإستخدام فيسبوك
          </a>
        </div>
      )}
    </React.Fragment>
  );
}

export default LoginMethod;
