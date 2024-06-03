import React, { useContext } from "react";
import Login from "../LoginRegister/Login/Login";
import { LanguageContext } from "../../App";

function Home() {
  const language = useContext(LanguageContext);
  console.log(language);
  return (
    <div className="home">
      <Login />
    </div>
  );
}

export default Home;
