import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import LoginMethod from "../LoginMethod/LoginMethod";
import { Link } from "react-router-dom";
import BoxesCode from "../BoxesCode/BoxesCode";
import { LanguageContext } from "../../../App";
import TermsPrivacy from "../TermsPrivacy/TermsPrivacy";
import Face from "../Face/Face";

function Login() {
  const language = useContext(LanguageContext);
  const [theWay, setTheWay] = useState("withPassword");
  const [isMatched, setIsMatched] = useState(true);
  const [isCorrect, setIsCorrect] = useState(true);
  const [codeClass, setCodeClass] = useState([]);
  const [isFull, setIsFull] = useState(false);
  const [getPassword, setGetPassword] = useState(false);
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
  const whileWriting = (event) => {
    const pattern = /^(.+)@(.+)\.([a-zA-Z]{2,})$/;
    setInfo({ ...info, [event.target.name]: event.target.value });
    setIsMatched(pattern.test(event.target.value));
  };
  const changeInputs = () => {
    setInfo({ ...info, email: "", password: "" });
    setTheWay(theWay === "email" ? "withPassword" : "email");
    setGetPassword(theWay === "email" && isMatched ? !getPassword : "");
  };

  const handleForm = async (e) => {
    e.preventDefault();
    if (info.email === "khirdin@gmail.com") {
      setGetPassword(true);
    } else {
      setGetPassword(false);
    }
  };
  const checkPAssValidation = () => {
    if (info.password === "12345678") {
      setIsCorrect(true);
      alert("Password is correct");
    } else {
      alert("Password is incorrect");
      setIsCorrect(false);
    }
  };
  useEffect(() => {
    setInfo({ ...info, password: codeClass.join("") });
  }, [codeClass]);

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
                setInfo={setInfo}
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
                  <fieldset
                    className={!isMatched ? "email error" : "email"}
                    data-error={
                      "Please enter a valid email format like example@mail.com"
                    }
                  >
                    <label htmlFor="email-or-username">
                      Email or username
                      <b>*</b>
                    </label>
                    <input
                      onChange={(event) => whileWriting(event)}
                      value={info.email}
                      type="email"
                      name="email"
                      placeholder="example@mail.com"
                    />
                  </fieldset>
                  {getPassword ? (
                    <fieldset className="get">
                      <BoxesCode
                        setCodeClass={setCodeClass}
                        setIsFull={setIsFull}
                        isFound={isCorrect}
                        dataError="Error message."
                      />
                      <input
                        type="submit"
                        value="Login"
                        className={info.email !== "" && isMatched ? "blue" : ""}
                        onClick={() => checkPAssValidation()}
                      />
                    </fieldset>
                  ) : (
                    <input
                      type="submit"
                      value="Get Password"
                      className={info.email !== "" && isMatched ? "blue" : ""}
                    />
                  )}
                </form>
              ) : (
                <form action="" className="inputs">
                  <fieldset
                    className={!isMatched ? "email error" : "email"}
                    data-error={
                      "Please enter a valid email format like example@mail.com"
                    }
                  >
                    <label htmlFor="email-or-username">
                      Email or username
                      <b>*</b>
                    </label>
                    <input
                      onChange={(event) => whileWriting(event)}
                      value={info.email}
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
                      onChange={(event) =>
                        setInfo({ ...info, password: event.target.password })
                      }
                      type="password"
                      name="password"
                      placeholder="●●●●●●●●"
                    />
                  </fieldset>
                  <input
                    className={
                      info.email !== "" && info.password !== "" && isMatched
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

              <TermsPrivacy info="By logging in" />
            </div>
          </div>
          <Face />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="wrapper">
            <div className="form">
              <h1 className="title">تسجيل الدخول</h1>
              <LoginMethod theWay={theWay} setTheWay={setTheWay} info={info} />
              <Link className="other" to="#" onClick={() => changeInputs()}>
                {theWay === "email"
                  ? "التسجيل بدون كلمة السر"
                  : "التسجيل بالبريد الإلكتروني"}
              </Link>
              <span className="or">or</span>
              {theWay === "email" ? (
                <form
                  action=""
                  method="post"
                  className="inputs"
                  onSubmit={(e) => handleForm(e)}
                >
                  <fieldset
                    className={!isMatched ? "email error" : "email"}
                    data-error={
                      " example@mail.com الرجاء إدخال تنسيق بريد إلكتروني صالح مثل"
                    }
                  >
                    <label htmlFor="email-or-username">
                      البريد الإلكتروني أو إسم المستخدم
                      <b>*</b>
                    </label>
                    <input
                      onChange={(event) => whileWriting(event)}
                      value={info.email}
                      type="email"
                      name="email"
                      placeholder="example@mail.com"
                      disabled={!getPassword ? false : true}
                    />
                  </fieldset>
                  {getPassword ? (
                    <fieldset className="get">
                      <BoxesCode />
                      <input
                        type="submit"
                        value="تسجيل الدخول"
                        className={info.email !== "" && isMatched ? "blue" : ""}
                        disabled={info.email !== "" && isMatched ? false : true}
                      />
                    </fieldset>
                  ) : (
                    <input
                      type="submit"
                      value="احصل على كلمة مرور"
                      className={info.email !== "" && isMatched ? "blue" : ""}
                      disabled={info.email !== "" && isMatched ? false : true}
                    />
                  )}
                </form>
              ) : (
                <form action="" className="inputs">
                  <fieldset
                    className={!isMatched ? "email error" : "email"}
                    data-error={
                      "الرجاء إدخال تنسيق بريد إلكتروني صالح مثل example@mail.com."
                    }
                  >
                    <label htmlFor="email-or-username">
                      البريد الإلكتروني أو إسم المستخدم
                      <b>*</b>
                    </label>
                    <input
                      onChange={(event) => whileWriting(event)}
                      value={info.email}
                      type="email"
                      name="email"
                      placeholder="example@mail.com"
                    />
                  </fieldset>
                  <fieldset className="password">
                    <label htmlFor="password">
                      كلمة المرور
                      <b>*</b>
                      <Link
                        to="ForgotPassword"
                        style={{ left: 0, right: "initial" }}
                      >
                        نسيت كلمة المرور؟
                      </Link>
                    </label>
                    <input
                      onChange={(event) =>
                        setInfo({ ...info, password: event.target.password })
                      }
                      type="password"
                      name="password"
                      placeholder="●●●●●●●●"
                    />
                  </fieldset>
                  <input
                    className={
                      info.email !== "" && info.password !== "" && isMatched
                        ? "blue"
                        : ""
                    }
                    type="submit"
                    value="تسجيل الدخول"
                    disabled={
                      info.email !== "" && info.password !== "" && isMatched
                        ? false
                        : true
                    }
                  />
                </form>
              )}
              <p>
                لا تملك حسابا بعد؟
                <Link to="/Register">إنشاء حساب </Link>
              </p>

              <TermsPrivacy />
            </div>
          </div>
          <Face />
        </React.Fragment>
      )}
    </div>
  );
}

export default Login;
