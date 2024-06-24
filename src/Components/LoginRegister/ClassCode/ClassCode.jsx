import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ClassCode.css";
import "../Login/Login.css";
import "../Steps/Steps.css";
import BoxesCode from "../BoxesCode/BoxesCode";
import { LanguageContext } from "../../../App";
import TermsPrivacy from "../TermsPrivacy/TermsPrivacy";

function ClassCode() {
  const language = useContext(LanguageContext);
  const [isFound, setIsFound] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const [codeClass, setCodeClass] = useState([]);
  const [isFull, setIsFull] = useState(false);
  const [code, setCode] = useState("12345678");

  const handleInputs = () => {
    setShowDetails(false);
    setIsFull(false);
    setIsFound(true);
  };
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    if (codeClass.join("") === code) {
      setShowDetails(true);
    } else {
      setIsFound(false);
    }
  };

  return (
    <div className="login steps classCode">
      {language === "english" ? (
        <React.Fragment>
          <div className="wrapper">
            <form
              action=""
              className="inputs form"
              onSubmit={(e) => handleForm(e)}
            >
              <h1 className="title !pb-0">Join class</h1>
              {showDetails ? (
                <React.Fragment>
                  <fieldset>
                    <label htmlFor="Class-Code">You are joining:</label>
                    <h1 className="name" style={{ textAlign: "center" }}>
                      Mr. Kamal - Math
                    </h1>
                  </fieldset>
                  <fieldset
                    style={{ flexDirection: "column", paddingTop: "0" }}
                  >
                    <button
                      style={{
                        backgroundColor: "var(--main-color)",
                        color: "white",
                        width: "367px",
                        height: "44px",
                      }}
                    >
                      Join class
                    </button>
                    <button
                      style={{
                        backgroundColor: "#1865F220",
                        color: "var(--main-color)",
                        width: "367px",
                        height: "44px",
                      }}
                      className={isFound ? "blue" : ""}
                      onClick={() => handleInputs()}
                    >
                      I'm in a different class
                    </button>
                  </fieldset>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <fieldset>
                    <label htmlFor="Class-Code">Class Code</label>
                    <span style={{ textAlign: "start" }}>
                      Enter the 8 characters class code you received from your
                      teacher or parent.
                    </span>
                  </fieldset>
                  <BoxesCode
                    dataError="We couldn’t find a class with this code, please enter a valid code."
                    isFound={isFound}
                    setCodeClass={setCodeClass}
                    setIsFull={setIsFull}
                  />
                  <fieldset>
                    <button onClick={() => navigate(-1)}>back</button>
                    <input
                      type="submit"
                      value="Continue"
                      className={isFull ? "blue" : ""}
                      disabled={isFull ? false : true}
                    />
                  </fieldset>
                </React.Fragment>
              )}
            </form>
            <TermsPrivacy info="By signing up" />
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="wrapper">
            <form
              action=""
              className="inputs form text-right"
              onSubmit={(e) => handleForm(e)}
            >
              <h1 className="title !pb-0">انضم إلى الفصل</h1>
              {showDetails ? (
                <React.Fragment>
                  <fieldset>
                    <label htmlFor="Class-Code">: ستنضم إلى</label>
                    <h1 className="name" style={{ textAlign: "center" }}>
                      Mr. Kamal - Math
                    </h1>
                  </fieldset>
                  <fieldset
                    style={{ flexDirection: "column", paddingTop: "0" }}
                  >
                    <button
                      style={{
                        backgroundColor: "var(--main-color)",
                        color: "white",
                        width: "367px",
                        height: "44px",
                      }}
                    >
                      انضم إلى الفصل
                    </button>
                    <button
                      style={{
                        backgroundColor: "#1865F220",
                        color: "var(--main-color)",
                        width: "367px",
                        height: "44px",
                      }}
                      onClick={() => setShowDetails(false)}
                    >
                      أنا في فصل دراسي مختلف
                    </button>
                  </fieldset>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <fieldset>
                    <label htmlFor="class-Code">رمز الفصل</label>
                    <span className="text-right">
                      أدخل رمز الفصل المكون من 8 أحرف الذي تلقيته من معلمك أو
                      أحد والديك.
                    </span>
                  </fieldset>
                  <BoxesCode
                    dataError="لم نتمكن من العثور على فصل دراسي بهذا الرمز، يرجى إدخال رمز صالح."
                    isFound={isFound}
                    setIsFound={setIsFound}
                    setCodeClass={setCodeClass}
                    codeClass={codeClass}
                    setIsFull={setIsFull}
                  />
                  <fieldset className="!flex-row-reverse">
                    <button onClick={() => navigate(-1)}>الرجوع</button>
                    <input
                      type="submit"
                      value="إستمر"
                      className={isFull ? "blue" : ""}
                      onClick={() => setShowDetails(true)}
                    />
                  </fieldset>
                </React.Fragment>
              )}
            </form>
            <TermsPrivacy />
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default ClassCode;
