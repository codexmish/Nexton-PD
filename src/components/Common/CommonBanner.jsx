import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router";

const CommonBanner = ({ hero, textOne, textTwo, darkHero }) => {

  return (
    <>
      <div className="bg-[#f3f3f3] dark:bg-primary container">
        <div className="container px-3 lg:mx-0">
          <div className="main-row flex justify-between items-center h-[550px] lg:h-fit">
            <div className="text">
              <h3 className="text-sm lg:text-[20px] text-secoundary dark:text-darkSecoundart font-medium font-popppind">
                {textOne}
              </h3>
              <h2 className="w-[312px] lg:w-[632px] text-3xl lg:text-[64px] text-primary dark:text-white font-semibold font-popppind mt-2 mb-10 lg:my-6">
                {textTwo}
              </h2>
              <Link
                to={"/"}
                className="flex justify-center items-center bg-primary text-white w-[156px] dark:border dark:border-white lg:w-[198px] h-11 lg:h-[64px] rounded-[9999px] gap-3 text-sm lg:text-[16px]"
              >
                Explore now{" "}
                <CiSearch className="text-xl lg:text-[24px]  text-white" />
              </Link>
            </div>

            <div className="img hidden lg:block">
              <img src={darkHero} alt="imgg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonBanner;
