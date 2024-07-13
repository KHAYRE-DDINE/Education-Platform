import React, { useContext, useState } from "react";
import { LanguageContext } from "../../../../App";
import { useNavigate } from "react-router-dom";

const ResetPassword = ({ email, setEmail }) => {
  const language = useContext(LanguageContext);
  const [isMatched, setIsMatched] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  console.log(email);
  const whileWriting = (event) => {
    const pattern = /^(.+)@(.+)\.([a-zA-Z]{2,})$/;
    setIsMatched(pattern.test(event.target.value));
    setEmail(event.target.value);
  };

  const handleFormOne = () => {};
  return (
    <div className="reset-password">
      {language === "english" ? (
        <form
          action="#"
          className="retrievePassword"
          onSubmit={(e) => handleFormOne(e)}
        >
          <fieldset className={" mb-3 email"}>
            <label htmlFor="resetPassword" className="form-label">
              Email
            </label>
            <input
              className="form-control"
              type="email"
              value={email}
              placeholder="example@mail.com"
              onChange={(e) => whileWriting(e)}
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
              placeholder="●●●●●●●●"
              onChange={(v) => setPassword(v.target.value)}
              value={password}
            />
          </fieldset>
          <fieldset>
            <button onClick={() => navigate(-1)}>back</button>
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
          className="retrievePassword"
          onSubmit={(e) => handleFormOne(e)}
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
            <span className="text-right">
              يجب أن تتكون كلمات المرور من 8 أحرف على الأقل ويجب أن تحتوي على
              مزيج من الأحرف والأرقام والأحرف الأخرى.
            </span>
            <input
              className="form-control"
              type="password"
              id="resetPassword"
              placeholder="●●●●●●●●"
              onChange={(v) => setPassword(v.target.value)}
              value={password}
            />
          </fieldset>
          <fieldset className="flex flex-row-reverse">
            <button onClick={() => navigate(-1)}>الرجوع</button>
            <input
              type="submit"
              className={isMatched && password.length >= 8 ? "blue" : ""}
              value="إعادة تعيين كلمة المرور"
              disabled={isMatched && password.length >= 8 ? false : true}
            />
          </fieldset>
        </form>
      )}
    </div>
  );
};

export default ResetPassword;
