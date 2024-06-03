import React, { useContext, useState } from "react";
import Signer from "./Signer";
import LoginMethod from "../LoginMethod/LoginMethod";
import { Link } from "react-router-dom";
import Steps from "../Steps/Steps";
import { setEmailContext, valueEmailContext } from "../Register/Register";

function Parent() {
  const [withEmail, setWithEmail] = useState(false);
  return (
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
  );
}

export default Parent;
