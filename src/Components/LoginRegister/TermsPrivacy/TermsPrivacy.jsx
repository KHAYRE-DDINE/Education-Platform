import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../../App";

function TermsPrivacy({ info }) {
  const language = useContext(LanguageContext);
  return (
    <React.Fragment>
      {language === "english" ? (
        <div>
          <p className="terms">
            {info} to Al Rihla Academy, you agree to our
            <Link to="/Terms"> Terms of use</Link> and
            <Link to="/Privacy"> Privacy Policy</Link>.
          </p>
        </div>
      ) : (
        <div>
          <p className="terms">
            من خلال التسجيل في أكاديمية الرحلة، فإنك توافق على
            <Link to="/Terms"> شروط الاستخدام </Link>و
            <Link to="/Privacy"> سياسة الخصوصية </Link>الخاصة بنا.
          </p>
        </div>
      )}
    </React.Fragment>
  );
}

export default TermsPrivacy;
