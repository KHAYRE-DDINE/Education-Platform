import React, { useContext, useState } from "react";
import Signer from "./Signer";
import LoginMethod from "../LoginMethod/LoginMethod";
import { Link } from "react-router-dom";
import Steps from "../Steps/Steps";
import { setEmailContext, valueEmailContext } from "../Register/Register";
import { LanguageContext } from "../../../App";

function Parent() {
  const language = useContext(LanguageContext);
  const [withEmail, setWithEmail] = useState(false);
  return (
    <React.Fragment>
      {language === "english" ? (
        <div className="parent">
          {!withEmail ? (
            <React.Fragment>
              <Signer />
              <LoginMethod />
              <Link to="Steps" className="other">
                Sign up with email
              </Link>
            </React.Fragment>
          ) : (
            <Steps setWithEmail={setWithEmail} />
          )}
        </div>
      ) : (
        <div className="parent">
          {!withEmail ? (
            <React.Fragment>
              <Signer />
              <LoginMethod />
              <Link to="Steps" className="other">
                التسجيل بالبريد الإلكتروني
              </Link>
            </React.Fragment>
          ) : (
            <Steps setWithEmail={setWithEmail} />
          )}
        </div>
      )}
    </React.Fragment>
  );
}

export default Parent;
