import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import darkLogo from "../assets/images/dark mode logo.png";
import { CiSearch } from "react-icons/ci";
import { RiUserLine } from "react-icons/ri";
import { BsCartDash } from "react-icons/bs";
import Cart from "./Cart";
import { Link } from "react-router";

const NavBar = () => {
  const [theme, setTheme] = useState("light");
  const [showcart, setShowcart] = useState(false);


// ----------made this only fol localhost practice
  // useEffect(() => {
  //   const saved = localStorage.getItem("mode");
  //   console.log(saved)
  //   if (saved === "dark") {
  //     setTheme("dark")
  //   } else {
  //     setTheme("light")
  //   }
  // }, [theme]);





  const handleTheme = () => {
    document.documentElement.classList.toggle("dark");
    const isdark = document.documentElement.classList.contains("dark");

    const newMode = isdark? "dark":"light"
    localStorage.setItem("mode", newMode)
    setTheme(localStorage.getItem("mode"))
  };


  return (
    <>
      <nav className="dark:bg-primary hidden lg:block">
        <div className="main container flex items-center justify-between py-7">
          {/* --------Logo----- */}
          <Link to={'/'} className="logo w-[119px] cursor-pointer">
            <img src={theme === "light" ? logo : darkLogo} alt="logo" />
          </Link>

          {/* ------search option------ */}
          <div className="search-box flex items-center gap-3 w-100 h-13 bg-gray-bg dark:bg-primary dark:border dark:border-white rounded-full text-primary dark:text-white text-sm font-normal font-popppins px-6 py-4">
            <CiSearch className="text-body-text dark:text-white text-xl" />
            <input
              className="border-none outline-none placeholder:text-body-text dark:placeholder:text-white w-full"
              placeholder="Search in products..."
              type="text"
            />
          </div>

          {/* --------cart and user----- */}
          <div className="icons flex items-center gap-5">
            <div className="person text-2xl text-body-text cursor-pointer dark:text-white">
              <RiUserLine />
            </div>
            <div
              onClick={() => setShowcart(true)}
              className="cart cursor-pointer text-2xl text-body-text dark:text-white relative"
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
                  className="w-24 h-12 rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute before:h-10 before:w-10 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow-lg shadow-gray-400 peer-checked:shadow-lg peer-checked:shadow-gray-700 peer-checked:bg-[#383838] after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-[4px] after:right-1 after:translate-y-full after:w-10 after:h-10 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0"
                ></div>
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
