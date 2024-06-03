import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Login/Login.css";
import "./ForgotPassword.css";
import logo from "../../../images/logo.svg";
import { LanguageContext } from "../../../App";

function ForgotPassword() {
  const language = useContext(LanguageContext);
  const [isMatched, setIsMatched] = useState(false);
  const [found, setFound] = useState(true);
  const [newPassword, setNewPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const whileWriting = (event) => {
    const pattern = /^(.+)@(.+)\.([a-zA-Z]{2,})$/;
    setIsMatched(pattern.test(event.target.value));
    setEmail(isMatched ? event.target.value : "");
    // setRestedEmail(event.target.value);
  };
  const getPassword = () => {
    setNewPassword(true);
  };
  const handleForm = (e) => {
    e.preventDefault();
  };
  const checkIfEmailFound = () => {
    getPassword();
  };
  const navigate = useNavigate();
  return (
    <div className="login fgPassword">
      {language === "english" ? (
        <React.Fragment>
          <div className="form forgot">
            <h1 className="title">Forgot Password</h1>

            {newPassword ? (
              <form
                action="#"
                className="retrievePassword"
                onSubmit={(e) => handleForm(e)}
              >
                <fieldset className={" mb-3 email"}>
                  <label htmlFor="resetPassword" className="form-label">
                    Email
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    placeholder="example@mail.com"
                    onChange={(e) => whileWriting(e)}
                  />
                </fieldset>
                <fieldset className={" mb-3 password"}>
                  <label htmlFor="resetPassword" className="form-label">
                    New Password
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    id="resetPassword"
                    placeholder="*******"
                    onChange={(v) => setPassword(v.target.value)}
                    value={password}
                  />
                </fieldset>
                <fieldset>
                  <button onClick={() => setNewPassword(false)}>back</button>
                  <input
                    type="submit"
                    className={isMatched && password.length >= 8 ? "blue" : ""}
                    value="Reset password"
                    disabled
                  />
                </fieldset>
              </form>
            ) : (
              <form
                action="#"
                className="writeYourEmail"
                method="get"
                onSubmit={(e) => handleForm(e)}
              >
                <fieldset className={!found ? "error mb-3 email" : "email"}>
                  <label htmlFor="resetPassword" className="form-label">
                    Enter your email to reset your password:
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    id="resetPassword"
                    placeholder="example@mail.com"
                    onChange={(e) => whileWriting(e)}
                  />
                </fieldset>

                <fieldset>
                  <button onClick={() => navigate(-1)}>back</button>
                  <input
                    type="submit"
                    className={isMatched ? "blue" : ""}
                    value="Reset password"
                    onClick={(e) => checkIfEmailFound(e)}
                  />
                </fieldset>
              </form>
            )}
            <p className="terms">
              By signing up in to Al Rihla Academy, you agree to our 
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
          <div className="form forgot">
            <h1 className="title">Forgot Password</h1>

            {newPassword ? (
              <form
                action="#"
                className="retrievePassword"
                onSubmit={(e) => handleForm(e)}
              >
                <fieldset className={" mb-3 email"}>
                  <label htmlFor="resetPassword" className="form-label">
                    Email
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    placeholder="example@mail.com"
                    onChange={(e) => whileWriting(e)}
                  />
                </fieldset>
                <fieldset className={" mb-3 password"}>
                  <label htmlFor="resetPassword" className="form-label">
                    New Password
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    id="resetPassword"
                    placeholder="*******"
                    onChange={(v) => setPassword(v.target.value)}
                    value={password}
                  />
                </fieldset>
                <fieldset>
                  <button onClick={() => setNewPassword(false)}>back</button>
                  <input
                    type="submit"
                    className={isMatched && password.length >= 8 ? "blue" : ""}
                    value="Reset password"
                    disabled
                  />
                </fieldset>
              </form>
            ) : (
              <form
                action="#"
                className="writeYourEmail"
                method="get"
                onSubmit={(e) => handleForm(e)}
              >
                <fieldset className={!found ? "error mb-3 email" : "email"}>
                  <label htmlFor="resetPassword" className="form-label">
                    Enter your email to reset your password:
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    id="resetPassword"
                    placeholder="example@mail.com"
                    onChange={(e) => whileWriting(e)}
                  />
                </fieldset>

                <fieldset>
                  <button onClick={() => navigate(-1)}>back</button>
                  <input
                    type="submit"
                    className={isMatched ? "blue" : ""}
                    value="Reset password"
                    onClick={(e) => checkIfEmailFound(e)}
                  />
                </fieldset>
              </form>
            )}
            <p className="terms">
              By signing up in to Al Rihla Academy, you agree to our 
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

export default ForgotPassword;
