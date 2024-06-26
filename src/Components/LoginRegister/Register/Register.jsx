import React, { useState, useContext, createContext } from "react";
import "./Register.css";
import Learner from "../Signer/Learner";
import Teacher from "../Signer/Teacher";
import Parent from "../Signer/Parent";
import { idPersonContext } from "../LoginRegister";
import { LanguageContext } from "../../../App";
import TermsPrivacy from "../TermsPrivacy/TermsPrivacy";

export const setEmailContext = createContext();
export const valueEmailContext = createContext();

function Register() {
  const language = useContext(LanguageContext);
  const idContext = useContext(idPersonContext);
  const [withEmail, setWithEmail] = useState(true);

  return (
    <setEmailContext.Provider value={setWithEmail}>
      <valueEmailContext.Provider value={withEmail}>
        {language === "english" ? (
          <div className="login Rg">
            <div className="wrapper">
              <div className="register english">
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
                <TermsPrivacy info="By signing up" />
              </div>
            </div>
          </div>
        ) : (
          <div className="login Rg">
            <div className="wrapper">
              <div className="register text-right">
                <h1 className="title">تسجيل</h1>
                {idContext === 0 ? (
                  <Learner />
                ) : idContext === 1 ? (
                  <Teacher />
                ) : idContext === 2 ? (
                  <Parent />
                ) : (
                  ""
                )}

                <TermsPrivacy />
              </div>
            </div>
          </div>
        )}
      </valueEmailContext.Provider>
    </setEmailContext.Provider>
  );
}

export default Register;
