import "./Header.css";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { CiSearch } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import DropDownProfile from "./DropDown/DropDownProfile";
import DropDownNotification from "./DropDown/DropDownNotification";

function Header() {
  return (
    <header className="bg-white z-20 fixed w-[100%] flex items-center justify-between  border-b-[1px] border-solid border-grayD">
      <div className="logo p-4 flex">
        <button className="bg-primary-100 rounded-full w-8 h-8 mr-5"></button>
        <h2 className="uppercase text-primary font-bold text-2xl">al rihla</h2>
      </div>
      <nav className="relative flex items-center justify-end p-6 lg:px-8">
        <div className="hidden md:flex search-input relative">
          <CiSearch />
          <input
            type="search"
            name="search"
            className=""
            placeholder="Placeholder"
          />
        </div>
        <div className="hidden lg:flex lg:gap-x-5">
          <div className="box-lang flex items-center justify-around relative text-sm font-semibold leading-6 text-gray-900 capitalize">
            <div className="language-icon absolute left-0">
              <TbWorld />
            </div>
            <select
              name="language"
              className="capitalize outline-none text-normalColor"
            >
              <option value="arabic">arabic</option>
              <option value="english">english</option>
            </select>
            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400 absolute right-0" />
          </div>
          <button className="text-sm font-semibold leading-3 text-gray-900">
            <DropDownNotification />
          </button>
          <button className="text-sm font-semibold leading-3 text-gray-900">
            <DropDownProfile />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
