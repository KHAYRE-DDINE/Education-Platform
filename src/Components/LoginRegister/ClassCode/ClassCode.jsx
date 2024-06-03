import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ClassCode.css";
import "../Login/Login.css";
import "../Steps/Steps.css";
import logo from "../../../images/logo.svg";
import BoxesCode from "../BoxesCode/BoxesCode";
import { LanguageContext } from "../../../App";

function ClassCode() {
  const language = useContext(LanguageContext);
  const [isMatched, setIsMatched] = useState(true);
  const [getPassword, setGetPassword] = useState(false);
  const [inpEmailTwo, setInpEmailTwo] = useState("");

  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login steps classCode">
      {language === "english" ? (
        <React.Fragment>
          <div className="wrapper">
            <form
              action=""
              className="inputs form"
              onSubmit={(e) => handleForm(e)}
            >
              <h1 className="title">Sign up</h1>
              <fieldset>
                <label htmlFor="Class-Code">Class Code</label>
                <span style={{ textAlign: "start" }}>
                  Enter the 8 characters class code you received from your
                  teacher or parent.
                </span>
              </fieldset>
              <BoxesCode dataError="We couldn’t find a class with this code, please enter a valid code." />
              <fieldset>
                <button onClick={() => navigate(-1)}>back</button>
                <input type="submit" value="Continue" />
              </fieldset>
            </form>
            <p className="terms">
              By signing up to Al Rihla Academy, you agree to our 
              <Link to="/Terms">Terms of use</Link> and 
              <Link to="/Privacy">Privacy Policy</Link>.
            </p>
          </div>
          <div className="face">
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
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="wrapper">
            <form
              action=""
              className="inputs form"
              onSubmit={(e) => handleForm(e)}
            >
              <h1 className="title">Sign up</h1>
              <fieldset>
                <label htmlFor="Class-Code">Class Code</label>
                <span style={{ textAlign: "start" }}>
                  Enter the 8 characters class code you received from your
                  teacher or parent.
                </span>
              </fieldset>
              <BoxesCode dataError="We couldn’t find a class with this code, please enter a valid code." />
              <fieldset>
                <button onClick={() => navigate(-1)}>back</button>
                <input type="submit" value="Continue" />
              </fieldset>
            </form>
            <p className="terms">
              By signing up to Al Rihla Academy, you agree to our 
              <Link to="/Terms">Terms of use</Link> and 
              <Link to="/Privacy">Privacy Policy</Link>.
            </p>
          </div>
          <div className="face">
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
        </React.Fragment>
      )}
    </div>
  );
}

export default ClassCode;
