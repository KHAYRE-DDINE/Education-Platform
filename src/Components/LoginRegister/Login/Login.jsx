import React, { useContext, useState } from "react";
import "./Login.css";
import LoginMethod from "../LoginMethod/LoginMethod";
import logo from "../../../images/logo.svg";
import { Link } from "react-router-dom";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import BoxesCode from "../BoxesCode/BoxesCode";
import { LanguageContext } from "../../../App";

function Login() {
  const language = useContext(LanguageContext);
  const [isDisabled, setIsDisabled] = useState(true);
  const [theWay, setTheWay] = useState("withPassword");
  const [isMatched, setIsMatched] = useState(true);
  const [isCorrect, setIsCorrect] = useState(false);
  const [getPassword, setGetPassword] = useState(false);
  const [inpEmailOne, setInpEmailOne] = useState("");
  const [inpEmailTwo, setInpEmailTwo] = useState("");
  const [inpPassword, setInpPassword] = useState("");
  console.log(language);
  const whileWriting = (event) => {
    const pattern = /^(.+)@(.+)\.([a-zA-Z]{2,})$/;
    setInpEmailOne(event.target.value);
    setInpEmailTwo(event.target.value);
    setIsMatched(pattern.test(event.target.value));
    setIsDisabled(!isDisabled);
  };
  const changeInputs = () => {
    setInpEmailOne("");
    setInpEmailTwo("");
    setInpPassword("");
    setTheWay(theWay === "email" ? "withPassword" : "email");
    setGetPassword(theWay === "email" && isMatched ? !getPassword : "");
  };
  console.log(window.innerHeight);

  const handleForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      {language === "english" ? (
        <React.Fragment>
          <div className="wrapper">
            <div className="form">
              <h1 className="title">Log in</h1>
              <LoginMethod
                theWay={theWay}
                setTheWay={setTheWay}
                setInpEmailOne={setInpEmailOne}
                setInpEmailTwo={setInpEmailTwo}
                setInpPassword={setInpPassword}
              />
              <Link className="other" to="#" onClick={() => changeInputs()}>
                {theWay === "email"
                  ? "Continue with email"
                  : "Continue one time with password"}
              </Link>
              <span className="or">or</span>
              {theWay === "email" ? (
                <form
                  action=""
                  method="post"
                  className="inputs"
                  onSubmit={(e) => handleForm(e)}
                >
                  <fieldset className={!isMatched ? "email error" : "email"}>
                    <label htmlFor="email-or-username">
                      Email or username
                      <b>*</b>
                    </label>
                    <input
                      onChange={(event) => whileWriting(event)}
                      value={inpEmailOne}
                      type="email"
                      name="email"
                      placeholder="example@mail.com"
                    />
                  </fieldset>
                  {getPassword ? (
                    <fieldset className="get">
                      .<BoxesCode />
                      <input
                        type="submit"
                        value="Login"
                        onClick={
                          inpEmailTwo !== "" && isMatched
                            ? () => setGetPassword(!getPassword)
                            : console.log("nothing")
                        }
                        className={
                          inpEmailTwo !== "" && isMatched ? "blue" : ""
                        }
                      />
                    </fieldset>
                  ) : (
                    <input
                      type="submit"
                      value="Get Password"
                      onClick={
                        inpEmailTwo !== "" && isMatched
                          ? () => setGetPassword(!getPassword)
                          : console.log("nothing")
                      }
                      className={inpEmailTwo !== "" && isMatched ? "blue" : ""}
                    />
                  )}
                </form>
              ) : (
                <form action="" className="inputs">
                  <fieldset className={!isMatched ? "email error" : "email"}>
                    <label htmlFor="email-or-username">
                      Email or username
                      <b>*</b>
                    </label>
                    <input
                      onChange={(event) => whileWriting(event)}
                      value={inpEmailTwo}
                      type="email"
                      name="email"
                      placeholder="example@mail.com"
                    />
                  </fieldset>
                  <fieldset className="password">
                    <label htmlFor="password">
                      Password
                      <b>*</b>
                      <Link to="ForgotPassword">Forgot password?</Link>
                    </label>
                    <input
                      onChange={(event) => setInpPassword(event.target.value)}
                      type="password"
                      name="password"
                      placeholder="······"
                    />
                  </fieldset>
                  <input
                    className={
                      inpEmailTwo !== "" && inpPassword !== "" && isMatched
                        ? "blue"
                        : ""
                    }
                    type="submit"
                    value="Log in"
                  />
                </form>
              )}
              <p>
                Don't have an account yet?
                <Link to="/Register"> Create an account</Link>
              </p>

              <p className="terms">
                By logging in to Al Rihla Academy, you agree to our 
                <Link to="/Terms">Terms of use</Link> and 
                <Link to="/Privacy">Privacy Policy</Link>.
              </p>
            </div>
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
            <div className="form">
              <h1 className="title">Log in</h1>
              <LoginMethod
                theWay={theWay}
                setTheWay={setTheWay}
                setInpEmailOne={setInpEmailOne}
                setInpEmailTwo={setInpEmailTwo}
                setInpPassword={setInpPassword}
              />
              <Link className="other" to="#" onClick={() => changeInputs()}>
                {theWay === "email"
                  ? "Continue with email"
                  : "Continue one time with password"}
              </Link>
              <span className="or">or</span>
              {theWay === "email" ? (
                <form
                  action=""
                  method="post"
                  className="inputs"
                  onSubmit={(e) => handleForm(e)}
                >
                  <fieldset className={!isMatched ? "email error" : "email"}>
                    <label htmlFor="email-or-username">
                      Email or username
                      <b>*</b>
                    </label>
                    <input
                      onChange={(event) => whileWriting(event)}
                      value={inpEmailOne}
                      type="email"
                      name="email"
                      placeholder="example@mail.com"
                    />
                  </fieldset>
                  {getPassword ? (
                    <fieldset className="get">
                      .<BoxesCode />
                      <input
                        type="submit"
                        value="Login"
                        onClick={
                          inpEmailTwo !== "" && isMatched
                            ? () => setGetPassword(!getPassword)
                            : console.log("nothing")
                        }
                        className={
                          inpEmailTwo !== "" && isMatched ? "blue" : ""
                        }
                      />
                    </fieldset>
                  ) : (
                    <input
                      type="submit"
                      value="Get Password"
                      onClick={
                        inpEmailTwo !== "" && isMatched
                          ? () => setGetPassword(!getPassword)
                          : console.log("nothing")
                      }
                      className={inpEmailTwo !== "" && isMatched ? "blue" : ""}
                    />
                  )}
                </form>
              ) : (
                <form action="" className="inputs">
                  <fieldset className={!isMatched ? "email error" : "email"}>
                    <label htmlFor="email-or-username">
                      Email or username
                      <b>*</b>
                    </label>
                    <input
                      onChange={(event) => whileWriting(event)}
                      value={inpEmailTwo}
                      type="email"
                      name="email"
                      placeholder="example@mail.com"
                    />
                  </fieldset>
                  <fieldset className="password">
                    <label htmlFor="password">
                      Password
                      <b>*</b>
                      <Link to="ForgotPassword">Forgot password?</Link>
                    </label>
                    <input
                      onChange={(event) => setInpPassword(event.target.value)}
                      type="password"
                      name="password"
                      placeholder="*******"
                    />
                  </fieldset>
                  <input
                    className={
                      inpEmailTwo !== "" && inpPassword !== "" && isMatched
                        ? "blue"
                        : ""
                    }
                    type="submit"
                    value="Log in"
                  />
                </form>
              )}
              <p>
                Don't have an account yet?
                <Link to="/Register"> Create an account</Link>
              </p>

              <p className="terms">
                By logging in to Al Rihla Academy, you agree to our 
                <Link to="/Terms">Terms of use</Link> and 
                <Link to="/Privacy">Privacy Policy</Link>.
              </p>
            </div>
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

export default Login;
