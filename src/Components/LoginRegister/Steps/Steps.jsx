import React, { useContext, useState } from "react";
import "./Steps.css";
import "../Login/Login.css";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../../../App";

import useAuthContext from "../../authentication/AuthContext";
import EnglishSteps from "./EnglishSteps";
import ArabicSteps from "./ArabicSteps";

function Steps() {
  const language = useContext(LanguageContext);
  const [values, setValues] = useState({
    email: "",
    "First name": "",
    "Last name": "",
    password: "",
  });
  const [error, setError] = useState({});
  const { register } = useAuthContext();

  function handleValues(event) {
    const newValues = { ...values, [event.target.name]: event.target.value };
    setValues(newValues);
  }

  const handleForm = async (e) => {
    e.preventDefault();
    register(values);
  };

  return (
    <div className="steps login stepsToSignUp">
      {language === "english" ? (
        <EnglishSteps
          error={error}
          handleForm={handleForm}
          handleValues={handleValues}
          setError={setError}
          values={values}
        />
      ) : (
        <ArabicSteps
          error={error}
          handleForm={handleForm}
          handleValues={handleValues}
          setError={setError}
          values={values}
        />
      )}
    </div>
  );
}

export default Steps;
