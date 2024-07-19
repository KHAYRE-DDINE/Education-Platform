import React, { useContext } from "react";
import { CiSearch } from "react-icons/ci";
import DropDownProfile from "./DropDown/DropDownProfile";
import DropDownNotification from "./DropDown/DropDownNotification";
import DropDownSetting from "./DropDown/DropDownSetting";
import DropDownAbout from "./DropDown/DropDownAbout";
import logo from "../../images/logo2.svg";

function EnglishHeader() {
  return (
    <header className="bg-white z-[9999] fixed w-[100%] flex items-center justify-between  border-b-[1px] border-solid border-grayD">
      <div className="logo p-4 flex">
        <button className="bg-primary-100 rounded-full w-8 h-8 mr-5"></button>
        <h2 className="w-[180px] uppercase text-primary font-bold text-2xl flex">
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
  );
}

export default EnglishHeader;
