import React, { useContext, useState } from "react";

import "./LandingPage.css";

import { LanguageContext } from "../../App";
import EnglishLanding from "./EnglishLanding";
import ArabicLanding from "./ArabicLanding";

function LandingPage() {
  const [active, setActive] = useState("student");
  const language = useContext(LanguageContext);
  return (
    <React.Fragment>
      {language === "english" ? (
        <EnglishLanding active={active} setActive={setActive} />
      ) : (
        <ArabicLanding active={active} setActive={setActive} />
      )}
    </React.Fragment>
  );
}

export default LandingPage;
