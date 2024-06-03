import React, { useContext, useState } from "react";
import "./BoxesCode.css";
import { LanguageContext } from "../../../App";
function BoxesCode({ dataError }) {
  const language = useContext(LanguageContext);
  const [otp, setOtp] = useState(new Array(8).fill(""));
  const [isFound, setIsFound] = useState(true);

  const handleOtp = (e, idx) => {
    setOtp([
      ...otp.map((data, index) => (index === idx ? e.target.value : data)),
    ]);
    if (e.target.value && e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
    if (
      e.key === "Backspace" &&
      e.target.previousSibling &&
      e.target.value === ""
    ) {
      e.target.previousSibling.focus();
    }
  };

  return (
    <div className="boxesCode">
      {language === "english" ? (
        <div
          className={isFound ? "password" : "error password"}
          data-error={dataError}
        >
          {otp.map((o, idx) => (
            <input
              key={idx}
              type="text"
              maxLength={1}
              placeholder="_ "
              onChange={(e) => handleOtp(e, idx)}
              onKeyDown={(e) => handleOtp(e)}
            />
          ))}
        </div>
      ) : (
        <div
          className={isFound ? "password" : "error password"}
          data-error={dataError}
        >
          {otp.map((o, idx) => (
            <input
              key={idx}
              type="text"
              maxLength={1}
              placeholder="_ "
              onChange={(e) => handleOtp(e, idx)}
              onKeyDown={(e) => handleOtp(e)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default BoxesCode;
