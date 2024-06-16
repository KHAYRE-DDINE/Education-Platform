import React, { useContext, useState } from "react";
import "../Signer.css";
import {  useNavigate } from "react-router-dom";
import ValidationForm from "../../ValidationForm/ValidationForm";
import { LanguageContext } from "../../../../App";
import TermsPrivacy from "../../TermsPrivacy/TermsPrivacy";
import Face from "../../Face/Face";
function ByUsername() {
  const language = useContext(LanguageContext);
  const [values, setValues] = useState({
    email: "",
    username: "",
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
    <div className="steps login byusername ">
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
                data-error={error.email}
              >
                <label htmlFor="email-or-username">
                  Your parent or guardian's email
                </label>
                <span style={{ textAlign: "start" }}>
                  We’re excited to get you started, but we need to notify your
                  parent or guardian about your account.
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="example@mail.com"
                  onChange={(ev) => handleValues(ev)}
                  onBlur={() => setError(() => ValidationForm(values))}
                />
              </fieldset>
              <fieldset
                className={error.username ? "username error" : "username"}
                data-error={error.username}
              >
                <label htmlFor="username">Username</label>
                <span style={{ textAlign: "start" }}>
                  Use letters and numbers only. For safety, don't use your real
                  name.
                </span>
                <input
                  type="text"
                  name="username"
                  placeholder="spidy4581"
                  onChange={(ev) => handleValues(ev)}
                  onBlur={() => setError(() => ValidationForm(values))}
                />
              </fieldset>
              <fieldset
                className={error.password ? "password error" : "password"}
                data-error={error.password}
              >
                <label htmlFor="password">Password</label>
                <span style={{ textAlign: "start" }}>
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
                  disabled={
                    values["First name"] !== "" &&
                    values["Last name"] !== "" &&
                    values.email !== "" &&
                    values.password !== "" &&
                    Object.keys(error).length === 0
                      ? false
                      : true
                  }
                  value="Sign up"
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
                  ".example@email.com الرجاء إدخال تنسيق بريد إلكتروني صالح مثل"
                }
              >
                <label htmlFor="email-or-username">
                  البريد الإلكتروني لولي الأمر
                </label>
                <span style={{ textAlign: "start" }}>
                  نحن متحمسون للبدء، ولكننا بحاجة إلى إخطار والديك أو ولي أمرك
                  بشأن حسابك.
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="example@mail.com"
                  onChange={(ev) => handleValues(ev)}
                  onBlur={() => setError(() => ValidationForm(values))}
                />
              </fieldset>
              <fieldset
                className={error.username ? "username error" : "username"}
                data-error={"قصير جدا."}
              >
                <label htmlFor="username">اسم المستخدم</label>
                <span style={{ textAlign: "start" }}>
                  استخدم الحروف والأرقام فقط. من أجل سلامتك، لا تستخدم اسمك
                  الحقيقي.
                </span>
                <input
                  type="text"
                  name="username"
                  placeholder="spidy4581"
                  onChange={(ev) => handleValues(ev)}
                  onBlur={() => setError(() => ValidationForm(values))}
                />
              </fieldset>
              <fieldset
                className={error.password ? "password error" : "password"}
                data-error={
                  "يجب أن تتكون كلمة المرور الخاصة بك من 8 أحرف على الأقل."
                }
              >
                <label htmlFor="password">كلمة المرور</label>
                <span style={{ textAlign: "start" }}>
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
                  disabled={
                    values["First name"] !== "" &&
                    values["Last name"] !== "" &&
                    values.email !== "" &&
                    values.password !== "" &&
                    Object.keys(error).length === 0
                      ? false
                      : true
                  }
                  value="التسجيل"
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

export default ByUsername;
