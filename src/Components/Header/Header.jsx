import "./Header.css";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { CiSearch } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import DropDownProfile from "./DropDown/DropDownProfile";
import DropDownNotification from "./DropDown/DropDownNotification";
import DropDownSetting from "./DropDown/DropDownSetting";
import DropDownAbout from "./DropDown/DropDownAbout";
import React, { useContext } from "react";
import { LanguageContext, setLanguageContext } from "../../App";
import logo from "../../images/logo2.svg";

function Header() {
  const setLanguage = useContext(setLanguageContext);
  const Language = useContext(LanguageContext);

  const changeLanguage = (e) => {
    setLanguage(e.target.value);
  };
  //  <div className="box-lang flex items-center justify-around relative text-sm font-semibold leading-6 text-gray-900 capitalize">
  //    <div className="language-icon absolute left-0">
  //      <TbWorld />
  //    </div>
  //    <select
  //      name="language"
  //      onChange={(e) => changeLanguage(e)}
  //      className="capitalize outline-none text-normalColor"
  //    >
  //      <option value="english">english</option>
  //      <option value="arabic">arabic</option>
  //    </select>
  //    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400 absolute right-0" />
  //  </div>;
  return (
    <React.Fragment>
      {Language === "english" ? (
        <header className="bg-white z-[9999] fixed w-[100%] flex items-center justify-between  border-b-[1px] border-solid border-grayD">
          <div className="logo p-4 flex">
            <button className="bg-primary-100 rounded-full w-8 h-8 mr-5"></button>
            <h2 className="uppercase text-primary font-bold text-2xl flex">
              <img className="mr-2" src={logo} alt="logo" />
              al rihla
            </h2>
          </div>
          <nav className="relative flex items-center justify-end p-6 lg:px-8">
            <div className="hidden md:flex search-input relative">
              <CiSearch />
              <input
                type="search"
                name="search"
                className=""
                placeholder="Search something..."
              />
            </div>
            <div className="hidden lg:flex lg:gap-x-5">
              <button className="text-sm font-semibold leading-3 text-gray-900">
                <DropDownNotification />
              </button>
              <button className="text-sm font-semibold leading-3 text-gray-900">
                <DropDownAbout />
              </button>
              <button className="text-sm font-semibold leading-3 text-gray-900">
                <DropDownSetting />
              </button>
              <button className="text-sm font-semibold leading-3 text-gray-900">
                <DropDownProfile />
              </button>
            </div>
          </nav>
        </header>
      ) : (
        <header className="bg-white z-[9999] fixed w-[100%] flex flex-row-reverse items-center justify-between  border-b-[1px] border-solid border-grayD">
          <div className="logo p-4 flex flex-row-reverse">
            <button className="bg-primary-100 rounded-full w-8 h-8 ml-5"></button>
            <h2 className="uppercase text-primary font-bold text-2xl flex flex-row-reverse">
              <img className="ml-2" src={logo} alt="logo" />
              al rihla
            </h2>
          </div>
          <nav className="relative flex flex-row-reverse items-center justify-end p-6 lg:px-8">
            <div className="hidden md:flex md:flex-row-reverse search-input ml-6 relative">
              <CiSearch className="mr-2" />
              <input
                type="search"
                name="search"
                className="text-end"
                placeholder="Search something..."
              />
            </div>
            <div className="hidden lg:flex flex-row-reverse lg:gap-x-5">
              <button className="text-sm font-semibold leading-3 text-gray-900">
                <DropDownNotification />
              </button>
              <button className="text-sm font-semibold leading-3 text-gray-900">
                <DropDownAbout />
              </button>
              <button className="text-sm font-semibold leading-3 text-gray-900">
                <DropDownSetting />
              </button>
              <button className="text-sm font-semibold leading-3 text-gray-900">
                <DropDownProfile />
              </button>
            </div>
          </nav>
        </header>
      )}
    </React.Fragment>
  );
}

export default Header;
