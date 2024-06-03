import React, { useContext, useState } from "react";
import { idPersonContext, setIdPersonContext } from "../LoginRegister";
import { LanguageContext } from "../../../App";
function Signer() {
  const language = useContext(LanguageContext);
  const [person, setPerson] = useState(["learner", "teacher", "parent"]);
  const idContext = useContext(idPersonContext);
  const setIdContext = useContext(setIdPersonContext);

  return (
    <div>
      {language === "english" ? (
        <React.Fragment>
          <p>Welcome to Al Rihla Academy, join us as a</p>
          <div className="signer">
            {person.map((e, idx) => (
              <button
                key={idx}
                onClick={() => setIdContext(idx)}
                className={idx === idContext ? "btn clicked" : "btn"}
              >
                {e}
              </button>
            ))}
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <p>Welcome to Al Rihla Academy, join us as a</p>
          <div className="signer">
            {person.map((e, idx) => (
              <button
                key={idx}
                onClick={() => setIdContext(idx)}
                className={idx === idContext ? "btn clicked" : "btn"}
              >
                {e}
              </button>
            ))}
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default Signer;
