import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Login/Login.css";
import "./ForgotPassword.css";
import { LanguageContext } from "../../../App";
import TermsPrivacy from "../TermsPrivacy/TermsPrivacy";
import Face from "../Face/Face";

function ForgotPassword() {
  const language = useContext(LanguageContext);
  const [isMatched, setIsMatched] = useState(false);
  const [found, setFound] = useState(true);
  const [newPassword, setNewPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const whileWriting = (event) => {
    const pattern = /^(.+)@(.+)\.([a-zA-Z]{2,})$/;
    setIsMatched(pattern.test(event.target.value));
    setEmail(isMatched ? event.target.value : "");
  };

  const handleForm = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log(email);
    if (email === "ahrarkhirdin@gmail.com") {
      setNewPassword(true);
      setFound(true);
    } else {
      setFound(false);
    }
  };

  const navigate = useNavigate();
  return (
    <div className="login fgPassword">
      {language === "english" ? (
        <React.Fragment>
          <div className="form forgot">
            <h1 className="title">Forgot Password</h1>
            {newPassword ? (
              <form
                action="#"
                className="retrievePassword"
                onSubmit={(e) => handleForm(e)}
              >
                <fieldset className={" mb-3 email"}>
                  <label htmlFor="resetPassword" className="form-label">
                    Email
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    placeholder="example@mail.com"
                    onChange={(e) => whileWriting(e)}
                    autoComplete="off"
                  />
                </fieldset>
                <fieldset className={" mb-3 password"}>
                  <label htmlFor="resetPassword" className="form-label">
                    New Password
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    id="resetPassword"
                    placeholder="*******"
                    onChange={(v) => setPassword(v.target.value)}
                    value={password}
                  />
                </fieldset>
                <fieldset>
                  <button onClick={() => setNewPassword(false)}>back</button>
                  <input
                    type="submit"
                    className={isMatched && password.length >= 8 ? "blue" : ""}
                    value="Reset password"
                    disabled={isMatched && password.length >= 8 ? false : true}
                  />
                </fieldset>
              </form>
            ) : (
              <form
                action="#"
                className="writeYourEmail"
                method="get"
                onSubmit={(e) => handleForm(e)}
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
          <Face />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="form forgot">
            <h1 className="title">نسيت كلمة السر</h1>
            {newPassword ? (
              <form
                action="#"
                className="retrievePassword"
                onSubmit={(e) => handleForm(e)}
              >
                <fieldset className={" mb-3 email"}>
                  <label htmlFor="resetPassword" className="form-label">
                    الريدك الإلكتروني
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    placeholder="example@mail.com"
                    onChange={(e) => whileWriting(e)}
                    autoComplete="off"
                  />
                </fieldset>
                <fieldset className={" mb-3 password"}>
                  <label htmlFor="resetPassword" className="form-label">
                    كلمة المرور الجديدة
                  </label>
                  <br />
                  <span>
                    يجب أن تتكون كلمات المرور من 8 أحرف على الأقل ويجب أن تحتوي
                    على مزيج من الأحرف والأرقام والأحرف الأخرى.
                  </span>
                  <input
                    className="form-control"
                    type="password"
                    id="resetPassword"
                    placeholder="*******"
                    onChange={(v) => setPassword(v.target.value)}
                    value={password}
                  />
                </fieldset>
                <fieldset>
                  <button onClick={() => setNewPassword(false)}>الرجوع</button>
                  <input
                    type="submit"
                    className={isMatched && password.length >= 8 ? "blue" : ""}
                    value="إعادة تعيين كلمة المرور"
                    disabled={isMatched && password.length >= 8 ? false : true}
                  />
                </fieldset>
              </form>
            ) : (
              <form
                action="#"
                className="writeYourEmail"
                method="get"
                onSubmit={(e) => handleForm(e)}
              >
                <fieldset
                  className={!found ? "error mb-3 email" : "email"}
                  data-error={
                    "عذرًا، لا يمكننا العثور على حساب أكاديمية الرحلة متصل بـ " +
                    email
                  }
                >
                  <label htmlFor="resetPassword" className="form-label">
                    أدخل بريدك الإلكتروني لإعادة تعيين كلمة المرور:
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
                  <button onClick={() => navigate(-1)}>الرجوع</button>
                  <input
                    type="submit"
                    className={isMatched ? "blue" : ""}
                    value="إعادة تعيين كلمة المرور"
                    disabled={isMatched ? false : true}
                  />
                </fieldset>
              </form>
            )}
            <TermsPrivacy />
          </div>
          <Face />
        </React.Fragment>
      )}
    </div>
  );
}

export default ForgotPassword;
