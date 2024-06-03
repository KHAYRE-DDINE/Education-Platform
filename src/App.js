import { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Header from "./Components/Header/Header"
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';


export const LanguageContext = createContext(0)

function App() {
  const [platformLanguage, setPlatformLanguage] = useState("english")
  console.log(platformLanguage)
  return (
    <div className="App">
      <BrowserRouter>
        <LanguageContext.Provider value={platformLanguage}>
          {/* <Header />
          <Home />
          <Footer /> */}
        </LanguageContext.Provider>
      </BrowserRouter>

    </div>
  );
}

export default App;
