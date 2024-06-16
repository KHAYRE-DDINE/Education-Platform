import React, { useContext, useState } from "react";
import "./Steps.css";
import "../Login/Login.css";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../../../App";
import ValidationForm from "../ValidationForm/ValidationForm";
import Face from "../Face/Face";
import TermsPrivacy from "../TermsPrivacy/TermsPrivacy";

function Steps() {
  const language = useContext(LanguageContext);
  const [values, setValues] = useState({
    email: "",
    "First name": "",
    "Last name": "",
    password: "",
  });
  const [error, setError] = useState({});

  function handleValues(event) {
    const newValues = { ...values, [event.target.name]: event.target.value };
    setValues(newValues);
  }
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="steps login stepsToSignUp">
      {language === "english" ? (
        <React.Fragment>
          <div className="wrapper ">
            <form
              action=""
              className="inputs form"
              onSubmit={(e) => handleForm(e)}
            >
              <h1 className="title">Sign up</h1>
              <fieldset
                className={error.email ? "email error" : "email"}
                data-error="Please enter a valid email format like example@mail.com"
              >
                <label htmlFor="email-or-username">Your email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@mail.com"
                  onChange={(ev) => handleValues(ev)}
                  onBlur={() => setError(() => ValidationForm(values))}
                />
              </fieldset>
              <fieldset className="name">
                <fieldset>
                  <label htmlFor="First name">First name</label>
                  <input
                    type="text"
                    name="First name"
                    placeholder="Ahmed"
                    onChange={(ev) => handleValues(ev)}
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="Last name">Last name</label>
                  <input
                    type="text"
                    name="Last name"
                    placeholder="Mohamed"
                    onChange={(ev) => handleValues(ev)}
                  />
                </fieldset>
              </fieldset>
              <fieldset
                className={error.password ? "password error" : "password"}
                data-error="Your password must be at least 8 characters long."
              >
                <label htmlFor="password">Password</label>
                <span>
                  Passwords should be at least 8 characters long and should
                  contain a mixture of letters, numbers, and other characters.
                </span>
                <input
                  type="password"
                  name="password"
                  placeholder="●●●●●●●●"
                  onChange={(ev) => handleValues(ev)}
                  onBlur={() => setError(() => ValidationForm(values))}
                />
              </fieldset>
              <fieldset>
                <button onClick={() => navigate(-1)}>back</button>
                <input
                  type="submit"
                  className={
                    values["First name"] !== "" &&
                    values["Last name"] !== "" &&
                    values.email !== "" &&
                    values.password !== "" &&
                    Object.keys(error).length === 0
                      ? "blue"
                      : ""
                  }
                  value="Sign up"
                  disabled={
                    values["First name"] !== "" &&
                    values["Last name"] !== "" &&
                    values.email !== "" &&
                    values.password !== "" &&
                    Object.keys(error).length === 0
                      ? false
                      : true
                  }
                />
              </fieldset>
            </form>
            <TermsPrivacy info="By signing up" />
          </div>
          <Face />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="wrapper ">
            <form
              action=""
              className="inputs form"
              onSubmit={(e) => handleForm(e)}
            >
              <h1 className="title">تسجيل</h1>
              <fieldset
                className={error.email ? "email error" : "email"}
                data-error={
                  "الرجاء إدخال تنسيق بريد إلكتروني صالح مثل example@email.com"
                }
              >
                <label htmlFor="email-or-username">البريد الإلكتروني</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@mail.com"
                  onChange={(ev) => handleValues(ev)}
                  onBlur={() => setError(() => ValidationForm(values))}
                />
              </fieldset>
              <fieldset className="name">
                <fieldset>
                  <label htmlFor="First name">الاسم العائلي</label>
                  <input
                    type="text"
                    name="First name"
                    placeholder="Ahmed"
                    onChange={(ev) => handleValues(ev)}
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="Last name">الاسم الشخصي</label>
                  <input
                    type="text"
                    name="Last name"
                    placeholder="Mohamed"
                    onChange={(ev) => handleValues(ev)}
                  />
                </fieldset>
              </fieldset>
              <fieldset
                className={error.password ? "password error" : "password"}
                data-error={
                  "يجب أن تتكون كلمة المرور الخاصة بك من 8 أحرف على الأقل."
                }
              >
                <label htmlFor="password">كلمة المرور</label>
                <span>
                  يجب أن تتكون كلمات المرور من 8 أحرف على الأقل ويجب أن تحتوي
                  على مزيج من الأحرف والأرقام والأحرف الأخرى.
                </span>
                <input
                  type="password"
                  name="password"
                  placeholder="●●●●●●●●"
                  onChange={(ev) => handleValues(ev)}
                  onBlur={() => setError(() => ValidationForm(values))}
                />
              </fieldset>
              <fieldset>
                <button onClick={() => navigate(-1)}>الرجوع</button>
                <input
                  type="submit"
                  className={
                    values["First name"] !== "" &&
                    values["Last name"] !== "" &&
                    values.email !== "" &&
                    values.password !== "" &&
                    Object.keys(error).length === 0
                      ? "blue"
                      : ""
                  }
                  value="الرجوع"
                  disabled={
                    values["First name"] !== "" &&
                    values["Last name"] !== "" &&
                    values.email !== "" &&
                    values.password !== "" &&
                    Object.keys(error).length === 0
                      ? false
                      : true
                  }
                />
              </fieldset>
            </form>
            <TermsPrivacy />
          </div>
          <Face />
        </React.Fragment>
      )}
    </div>
  );
}

export default Steps;
