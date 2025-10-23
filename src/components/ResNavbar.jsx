import React, { useState } from "react";
import logo from "../assets/images/favicon.png";
import darLogo from "../assets/images/dark favicon.png";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiUserLine } from "react-icons/ri";
import { BsCartDash } from "react-icons/bs";
import Cart from "./cart";

const ResNavbar = () => {
  const [showBottom, setShowBottom] = useState(false);
  const [theme, setTheme] = useState("light");
  const [showcart, setShowcart] = useState(false);

  const handleTheme = () => {
    document.documentElement.classList.toggle("dark");
    const isdark = document.documentElement.classList.contains("dark");

    const newMode = isdark ? "dark" : "light";
    localStorage.setItem("mode", newMode);
    setTheme(localStorage.getItem("mode"));
  };

  return (
    <>
      <nav className="lg:hidden dark:bg-primary">
        <div className="main flex items-center justify-between px-4 py-5">
          {/* ------logo------ */}
          <div className="logo w-6">
            <img src={theme === "light" ? logo : darLogo} alt="" />
          </div>

          {/* ------search option------ */}
          <div className="search-box flex items-center gap-3 w-43 h-9 bg-gray-bg dark:bg-primary dark:border dark:border-white rounded-full text-primary dark:text-white text-xs font-normal font-popppins px-2 py-3">
            <CiSearch className="text-body-text dark:text-white text-xl" />
            <input
              className="border-none outline-none placeholder:text-body-text dark:placeholder:text-white w-full"
              placeholder="Search in products..."
              type="text"
            />
          </div>

          {/* ------menu-------- */}

          <div
            className="text-2xl text-primary dark:text-white cursor-pointer"
            onClick={() => setShowBottom(!showBottom)}
          >
            <GiHamburgerMenu />
          </div>
        </div>

        {showBottom && (
          <div className="icons flex items-center justify-center gap-5 px-5">
            <div className="person text-xl text-body-text cursor-pointer dark:text-white">
              <RiUserLine />
            </div>
            <div
              onClick={() => setShowcart(true)}
              className="cart cursor-pointer text-xl text-body-text dark:text-white relative"
            >
              <BsCartDash />
              <div className="absolute flex items-center justify-center h-5 w-5 rounded-full bg-vibrant-blu text-xs text-white font-medium font-popppins top-[-9px] right-[-6px]">
                4
              </div>
            </div>
            {showcart && <Cart cartok={setShowcart} isopen={showcart} />}

            {/* ---------Theme Toggle------- */}

            <div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input className="sr-only peer" value="" type="checkbox" />
                <div
                  onClick={handleTheme}
                  className="w-12 h-6 rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute before:h-5 before:w-5 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow-lg shadow-gray-400 peer-checked:shadow-lg peer-checked:shadow-gray-700 peer-checked:bg-[#383838] after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-[4px] after:right-1 after:translate-y-full after:w-5 after:h-5 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0"
                ></div>
              </label>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default ResNavbar;
