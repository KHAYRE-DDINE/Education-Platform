import React, {
  useState,
  userContext,
  useRef,
  useEffect,
  createContext,
  useContext,
} from "react";
import "./Login/Login.css";
import { LanguageContext } from "../../App";
import Register from "./Register/Register";
import Login from "./Login/Login";

export const idPersonContext = createContext(null);
export const setIdPersonContext = createContext(null);

function LoginRegister() {
  const language = useContext(LanguageContext);

  const [id, setId] = useState(1);

  return (
    <idPersonContext.Provider value={id}>
      <setIdPersonContext.Provider value={setId}>
        <Register />
      </setIdPersonContext.Provider>
    </idPersonContext.Provider>
  );
}

export default LoginRegister;
