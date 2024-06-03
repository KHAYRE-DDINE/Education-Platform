import React, { useContext, useState } from "react";
import "../LoginMethod/LoginMethod.css";
import { Link } from "react-router-dom";
import LoginMethod from "../LoginMethod/LoginMethod";
import Steps from "../Steps/Steps";
import Signer from "./Signer";
import { LanguageContext } from "../../../App";

function Teacher() {
  const language = useContext(LanguageContext);
  const [withEmail, setWithEmail] = useState(false);
  return (
    <React.Fragment>
      {language === "english" ? (
        <div className="teacher">
          {!withEmail ? (
            <React.Fragment>
              <Signer />
              <LoginMethod />
              <Link className="other" to="Steps">
                Sign up with email
              </Link>
            </React.Fragment>
          ) : (
            <Steps setWithEmail={setWithEmail} />
          )}
        </div>
      ) : (
        <div className="teacher">
          {!withEmail ? (
            <React.Fragment>
              <Signer />
              <LoginMethod />
              <Link className="other" to="Steps">
                Sign up with email
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

export default Teacher;
