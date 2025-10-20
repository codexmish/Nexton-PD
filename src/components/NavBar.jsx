import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import darkLogo from "../assets/images/dark mode logo.png";
import { CiSearch } from "react-icons/ci";
import { RiUserLine } from "react-icons/ri";
import { BsCartDash } from "react-icons/bs";

const NavBar = () => {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <nav>
        <div className="main container flex items-center justify-between py-7">
          <div className="logo w-[119px]">
            <img src={theme === "light" ? logo : darkLogo} alt="logo" />
          </div>

          <div className="search-box flex items-center gap-3 w-100 h-13 bg-gray-bg rounded-full text-primary text-sm font-normal font-popppins px-6 py-4">
            <CiSearch className="text-body-text text-xl" />
            <input
              className="border-none outline-none placeholder:text-body-text w-full"
              placeholder="Search in products..."
              type="text"
            />
          </div>

          <div className="icons flex items-center gap-5">
            <div className="person text-2xl text-body-text">
              <RiUserLine />
            </div>
            <div className="cart text-2xl text-body-text relative">
              <BsCartDash /> 
              <div className="absolute flex items-center justify-center h-5 w-5 rounded-full bg-vibrant-blu text-xs text-white font-medium font-popppins top-[-9px] right-[-6px]">4</div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
