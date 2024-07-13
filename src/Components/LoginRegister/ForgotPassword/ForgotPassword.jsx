import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../Login/Login.css";
import "./ForgotPassword.css";
import { LanguageContext } from "../../../App";
import TermsPrivacy from "../TermsPrivacy/TermsPrivacy";
import ResetPassword from "./ResetPassword/ResetPassword";

function ForgotPassword() {
  const language = useContext(LanguageContext);
  const [isMatched, setIsMatched] = useState(false);
  const [found, setFound] = useState(true);

  const [email, setEmail] = useState("");
  const location = useLocation();

  const navigate = useNavigate();

  const whileWriting = (event) => {
    const pattern = /^(.+)@(.+)\.([a-zA-Z]{2,})$/;
    setIsMatched(pattern.test(event.target.value));
    setEmail(event.target.value);
  };

  const handleFormTwo = (e) => {
    e.preventDefault();
    navigate("password-reset");
    if (email === "ahrarkhirdin@gmail.com") {
      setFound(true);
    } else {
      setFound(false);
    }
  };

  return (
    <div className="login fgPassword">
      {language === "english" ? (
        <React.Fragment>
          <div className="form forgot">
            <h1 className="title text-left">Forgot Password</h1>
            {location.pathname.includes("reset") ? (
              <ResetPassword email={email} setEmail={setEmail} />
            ) : (
              <form
                action="#"
                className="writeYourEmail"
                method="get"
                onSubmit={(e) => handleFormTwo(e)}
              >
                <fieldset
                  className={!found ? "error mb-3 email" : "email"}
                  data-error={
                    "Sorry, we can't find an Al Rihla Academy account connected to " +
                    email
                  }
                >
                  <label htmlFor="resetPassword" className="form-label">
                    Enter your email to reset your password:
                  </label>

                  <input
                    className="form-control"
                    type="email"
                    id="resetPassword"
                    placeholder="example@mail.com"
                    onChange={(e) => whileWriting(e)}
                    autoComplete="off"
                  />
                </fieldset>

                <fieldset>
                  <button onClick={() => navigate(-1)}>back</button>
                  <input
                    type="submit"
                    className={isMatched ? "blue" : ""}
                    value="Reset password"
                    disabled={isMatched ? false : true}
                  />
                </fieldset>
              </form>
            )}
            <TermsPrivacy info="By signing up" />
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="form forgot text-right">
            <h1 className="title">نسيت كلمة السر</h1>
            <form
              action="#"
              className="writeYourEmail text-right"
              method="get"
              onSubmit={(e) => handleFormTwo(e)}
            >
              <fieldset
                className={!found ? "error mb-3 email" : "email"}
                data-error={`${email} عذرًا، لا يمكننا العثور على حساب أكاديمية الرحلة متصل بـ `}
              >
                <label htmlFor="resetPassword" className="form-label">
                  : أدخل بريدك الإلكتروني لإعادة تعيين كلمة المرور
                </label>
                <input
                  className="form-control"
                  type="email"
                  id="resetPassword"
                  placeholder="example@mail.com"
                  onChange={(e) => whileWriting(e)}
                  autoComplete="off"
                />
              </fieldset>

              <fieldset className="!mt-0 !flex-row-reverse">
                <button onClick={() => navigate(-1)}>الرجوع</button>
                <input
                  type="submit"
                  className={isMatched ? "blue" : ""}
                  value="إعادة تعيين كلمة المرور"
                  disabled={isMatched ? false : true}
                />
              </fieldset>
            </form>
            <TermsPrivacy />
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default ForgotPassword;
