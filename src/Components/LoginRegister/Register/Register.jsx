import React, {
  useState,
  useContext,
  useRef,
  useEffect,
  createContext,
} from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import Learner from "../Signer/Learner";
import Teacher from "../Signer/Teacher";
import Parent from "../Signer/Parent";
import { idPersonContext } from "../LoginRegister";
import logo from "../../../images/logo.svg";
import { LanguageContext } from "../../../App";

export const setEmailContext = createContext();
export const valueEmailContext = createContext();

function Register({ isMatched, whileWriting, inpEmailOne, setInpPassword }) {
  const language = useContext(LanguageContext);
  const idContext = useContext(idPersonContext);
  const [withEmail, setWithEmail] = useState(true);

  return (
    <setEmailContext.Provider value={setWithEmail}>
      <valueEmailContext.Provider value={withEmail}>
        {language === "english" ? (
          <div className="login ">
            <div className="wrapper">
              <div className="register">
                <h1 className="title">Sign up</h1>
                {idContext === 0 ? (
                  <Learner />
                ) : idContext === 1 ? (
                  <Teacher />
                ) : idContext === 2 ? (
                  <Parent />
                ) : (
                  ""
                )}

                <p className="terms">
                  By signing up to Al Rihla Academy, you agree to our 
                  <Link to="/Terms">Terms of use</Link> and 
                  <Link to="/Privacy">Privacy Policy</Link>.
                </p>
              </div>
            </div>
            <div className="face face-register">
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
          </div>
        ) : (
          <div className="login ">
            <div className="wrapper">
              <div className="register">
                <h1 className="title">Sign up</h1>
                {idContext === 0 ? (
                  <Learner />
                ) : idContext === 1 ? (
                  <Teacher />
                ) : idContext === 2 ? (
                  <Parent />
                ) : (
                  ""
                )}

                <p className="terms">
                  By signing up to Al Rihla Academy, you agree to our 
                  <Link to="/Terms">Terms of use</Link> and 
                  <Link to="/Privacy">Privacy Policy</Link>.
                </p>
              </div>
            </div>
            <div className="face face-register">
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
          </div>
        )}
      </valueEmailContext.Provider>
    </setEmailContext.Provider>
  );
}

export default Register;
