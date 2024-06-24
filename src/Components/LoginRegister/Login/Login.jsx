import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import LoginMethod from "../LoginMethod/LoginMethod";
import { Link } from "react-router-dom";
import BoxesCode from "../BoxesCode/BoxesCode";
import { LanguageContext } from "../../../App";
import TermsPrivacy from "../TermsPrivacy/TermsPrivacy";
import useAuthContext from "../../authentication/AuthContext";

function Login() {
  const language = useContext(LanguageContext);
  const [theWay, setTheWay] = useState("withPassword");
  const [isMatched, setIsMatched] = useState(true);
  const [isCorrect, setIsCorrect] = useState(true);
  const [codeClass, setCodeClass] = useState([]);
  const [isFull, setIsFull] = useState(false);
  const [getPassword, setGetPassword] = useState(false);
  const { login } = useAuthContext();

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

  const handleLogin = async (event) => {
    event.preventDefault();

    login(info);

    // if (info.email === "khirdin@gmail.com") {
    //   setGetPassword(true);
    // } else {
    //   setGetPassword(false);
    // }
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
                <form className="inputs" onSubmit={(e) => handleLogin(e)}>
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
                <form className="inputs" onSubmit={(e) => handleLogin(e)}>
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
                      <Link to="/forgot-password">Forgot password?</Link>
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
                    disabled={
                      info.email !== "" && info.password !== "" && isMatched
                        ? false
                        : true
                    }
                    type="submit"
                    value="Log in"
                  />
                </form>
              )}
              <p>
                Don't have an account yet?
                <Link to="/register"> Create an account</Link>
              </p>

              <TermsPrivacy info="By logging in" />
            </div>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="wrapper">
            <div className="form">
              <h1 className="title text-right">تسجيل الدخول</h1>
              <LoginMethod theWay={theWay} setTheWay={setTheWay} info={info} />
              <Link className="other" to="#" onClick={() => changeInputs()}>
                {theWay === "email"
                  ? "التسجيل بدون كلمة السر"
                  : "التسجيل بالبريد الإلكتروني"}
              </Link>
              <span className="or">or</span>
              {theWay === "email" ? (
                <form
                  className="inputs text-right"
                  onSubmit={(e) => handleLogin(e)}
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
                      <BoxesCode
                        setCodeClass={setCodeClass}
                        setIsFull={setIsFull}
                        isFound={isCorrect}
                        dataError="Error message."
                      />
                      <input
                        type="submit"
                        value="تسجيل الدخول"
                        className={info.email !== "" && isMatched ? "blue" : ""}
                        disabled={info.email !== "" && isMatched ? false : true}
                        onClick={() => checkPAssValidation()}
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
                <form className="inputs text-right">
                  <fieldset
                    className={!isMatched ? "email error" : "email"}
                    data-error={
                      "الرجاء إدخال تنسيق بريد إلكتروني صالح مثل example@mail.com."
                    }
                  >
                    <label htmlFor="email-or-username">
                      <b>*</b>
                      البريد الإلكتروني أو إسم المستخدم
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
                      <b>*</b>
                      كلمة المرور
                      <Link
                        to="/forgot-password"
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
              <p className="text-right">
                لا تملك حسابا بعد؟
                <Link to="/register"> إنشاء حساب</Link>
              </p>

              <TermsPrivacy />
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default Login;
