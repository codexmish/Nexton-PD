import React from "react";
import logo from "../assets/images/favicon.png";
import darLogo from '../assets/images/dark favicon.png'
import { CiSearch } from "react-icons/ci";


const ResNavbar = () => {
  return (
    <>
      <nav className="lg:hidden">
        <div className="main flex items-center justify-between px-4 py-5">
          {/* ------logo------ */}
          <div className="logo w-6">
            <img src={logo} alt="" />
          </div>

          {/* ------search option------ */}
          <div className="search-box flex items-center gap-3 w-40 h-9 bg-gray-bg dark:bg-primary dark:border dark:border-white rounded-full text-primary dark:text-white text-xs font-normal font-popppins px-4 py-3">
            <CiSearch className="text-body-text dark:text-white text-xl" />
            <input
              className="border-none outline-none placeholder:text-body-text dark:placeholder:text-white w-full"
              placeholder="Search in products..."
              type="text"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default ResNavbar;
