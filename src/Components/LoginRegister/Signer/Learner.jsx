import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Signer from "./Signer";
import Above from "./LearnerAge/Above13";
import Under from "./LearnerAge/Under13";
import { LanguageContext } from "../../../App";

function Learner() {
  const language = useContext(LanguageContext);
  const [isValidate, setIsValidate] = useState(false);
  const [birthDate, setBirthDate] = useState({});
  const [error, setError] = useState({ day: false, month: false, year: false });
  const [age, setAge] = useState();

  const checkBirthValidation = (e) => {
    const dateYearNow = new Date().getFullYear();
    const yearInterval = dateYearNow - 100;
    const newBirthDate = { ...birthDate, [e.target.name]: e.target.value };

    setBirthDate(newBirthDate);

    if (newBirthDate.Day < 1 || newBirthDate.Day > 31) {
      setError({ ...error, day: true });
    } else {
      setError({ ...error, day: false });
    }
    if (parseInt(newBirthDate.Month) < 1 || parseInt(newBirthDate.Month) > 12) {
      setError({ ...error, month: true });
    } else {
      setError({ ...error, month: false });
    }
    if (newBirthDate.Year < yearInterval || newBirthDate.Year > dateYearNow) {
      setError({ ...error, year: true });
    } else {
      setError({ ...error, year: false });
    }
    console.log(error, parseInt(newBirthDate.Month) < 1);
    checkConditionValidation();
    calculateAge();
  };

  const checkConditionValidation = () => {
    if (
      !error.day &&
      !error.month &&
      !error.year &&
      birthDate.Day !== "" &&
      birthDate.Month !== "" &&
      birthDate.Year !== ""
    ) {
      setIsValidate(true);
    } else {
      setIsValidate(false);
    }
  };
  const calculateAge = () => {
    const yearNow = new Date().getFullYear();
    const dayNow = new Date().getDate();
    const monthNow = new Date().getMonth() + 1;
    const year = yearNow - birthDate.Year;
    const dayToYear = (dayNow - birthDate.Day) * 0.002737907;
    const monthToYear = (monthNow - birthDate.Month) * 0.083333333;
    setAge(year + dayToYear + monthToYear);
  };
  return (
    <React.Fragment>
      {language === "english" ? (
        <div className="learner">
          <Signer />
          <div className="birth ">
            <span>What is your date of birth?</span>
            <form action="" method="get">
              <input
                className={error.day ? "error" : ""}
                type="number"
                name="Month"
                placeholder="Month"
                onChange={(e) => checkBirthValidation(e)}
              />
              <input
                className={error.month ? "error" : ""}
                type="number"
                name="Day"
                placeholder="Day"
                onChange={(e) => checkBirthValidation(e)}
              />
              <input
                className={error.year ? "error" : ""}
                type="number"
                name="Year"
                placeholder="Year"
                onChange={(e) => checkBirthValidation(e)}
              />
            </form>
            {isValidate && age >= 13 ? (
              <Above />
            ) : isValidate && age < 13 ? (
              <Under />
            ) : (
              ""
            )}
            <div className="links">
              <Link to="ClassCode">Enter a class code</Link>
              <Link to="/Login">Already have an account?</Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="learner">
          <Signer />
          <div className="birth ">
            <span>What is your date of birth?</span>
            <form action="" method="get">
              <input
                className={error.day ? "error" : ""}
                type="number"
                name="Month"
                placeholder="Month"
                onChange={(e) => checkBirthValidation(e)}
              />
              <input
                className={error.month ? "error" : ""}
                type="number"
                name="Day"
                placeholder="Day"
                onChange={(e) => checkBirthValidation(e)}
              />
              <input
                className={error.year ? "error" : ""}
                type="number"
                name="Year"
                placeholder="Year"
                onChange={(e) => checkBirthValidation(e)}
              />
            </form>
            {isValidate && age >= 13 ? (
              <Above />
            ) : isValidate && age < 13 ? (
              <Under />
            ) : (
              ""
            )}
            <div className="links">
              <Link to="ClassCode">Enter a class code</Link>
              <Link to="/Login">Already have an account?</Link>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default Learner;
