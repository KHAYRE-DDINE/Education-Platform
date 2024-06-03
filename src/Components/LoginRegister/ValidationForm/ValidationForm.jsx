import React, { useContext } from "react";
import { LanguageContext } from "../../../App";
function ValidationForm(values) {
  const language = useContext(LanguageContext);
  const error = {};
  const patternEmail = /^(.+)@(.+)\.([a-zA-Z]{2,})$/;
  if (values.password && values.password.length < 8 && values.password !== "") {
    // eslint-disable-next-line no-lone-blocks
    {
      language === "english"
        ? (error.password = "Your password must be at least 8 characters long.")
        : (error.password =
            "Your password must be at least 8 characters long.");
    }
  }
  if (values.email && !patternEmail.test(values.email) && values.email !== "") {
    // eslint-disable-next-line no-lone-blocks
    {
      language === "english"
        ? (error.email =
            "Please enter a valid email format like example@email.com")
        : (error.email =
            "Please enter a valid email format like example@email.com");
    }
  }
  if (values.username && values.username.length < 3) {
    // eslint-disable-next-line no-lone-blocks
    {
      language === "english"
        ? (error.username = "Too short.")
        : (error.username = "Too short.");
    }
  }
  return error;
}

export default ValidationForm;
