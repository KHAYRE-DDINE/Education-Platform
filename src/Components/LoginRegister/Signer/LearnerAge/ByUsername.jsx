import React, { useContext, useState } from "react";
import "../Signer.css";
import logo from "../../../../images/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import ValidationForm from "../../ValidationForm/ValidationForm";
import { LanguageContext } from "../../../../App";
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
          {" "}
          <div className="wrapper ">
            <form
              action=""
              className="inputs form"
              onSubmit={(e) => handleForm(e)}
            >
              <h1 className="title">Sign up</h1>
              <fieldset
                className={error.email ? "email error" : "email"}
                data-err={error.email}
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
                  onBlur={() => setError(ValidationForm(values))}
                />
              </fieldset>
              <fieldset
                className={error.username ? "username error" : "username"}
                data-err={error.username}
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
                  onBlur={() => setError(ValidationForm(values))}
                />
              </fieldset>
              <fieldset
                className={error.password ? "password error" : "password"}
                data-err={error.password}
              >
                <label htmlFor="password">Password</label>
                <span style={{ textAlign: "start" }}>
                  Passwords should be at least 8 characters long and should
                  contain a mixture of letters, numbers, and other characters.
                </span>
                <input
                  type="password"
                  name="password"
                  placeholder="······"
                  onChange={(ev) => handleValues(ev)}
                  onBlur={() => setError(ValidationForm(values))}
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
                />
              </fieldset>
            </form>
            <p className="terms">
              By signing up to Al Rihla Academy, you agree to our 
              <Link to="/Terms">Terms of use</Link> and 
              <Link to="/Privacy">Privacy Policy</Link>.
            </p>
          </div>
          <div className="face">
            <div className="info">
              <div className="logo">
                <img src={logo} alt="Logo" />
              </div>
              <h1>
                Join Al Rihla Academy for <br /> the best E-learning
              </h1>
              <p>Log in to Al Rihla Academy to get started!</p>
            </div>
          </div>
        </React.Fragment>
      ) : (
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
                data-err={error.email}
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
                  onBlur={() => setError(ValidationForm(values))}
                />
              </fieldset>
              <fieldset
                className={error.username ? "username error" : "username"}
                data-err={error.username}
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
                  onBlur={() => setError(ValidationForm(values))}
                />
              </fieldset>
              <fieldset
                className={error.password ? "password error" : "password"}
                data-err={error.password}
              >
                <label htmlFor="password">Password</label>
                <span style={{ textAlign: "start" }}>
                  Passwords should be at least 8 characters long and should
                  contain a mixture of letters, numbers, and other characters.
                </span>
                <input
                  type="password"
                  name="password"
                  placeholder="······"
                  onChange={(ev) => handleValues(ev)}
                  onBlur={() => setError(ValidationForm(values))}
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
                />
              </fieldset>
            </form>
            <p className="terms">
              By signing up to Al Rihla Academy, you agree to our 
              <Link to="/Terms">Terms of use</Link> and 
              <Link to="/Privacy">Privacy Policy</Link>.
            </p>
          </div>
          <div className="face">
            <div className="info">
              <div className="logo">
                <img src={logo} alt="Logo" />
              </div>
              <h1>
                Join Al Rihla Academy for <br /> the best E-learning
              </h1>
              <p>Log in to Al Rihla Academy to get started!</p>
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default ByUsername;
