import React from "react";
import { GrLinkNext } from "react-icons/gr";
import { Link } from "react-router";

const CommonExplore = ({ head, text, linkk }) => {
  return (
    <>
      <div className="flex items-center justify-between w-full lg:w-[418px] p-6 lg:p-10 border border-border dark:border-white rounded-2xl">
        <div className="text">
          <h2 className=" text-[20px] lg:text-2xl text-primary dark:text-white font-semibold font-popppind">
            {head}
          </h2>
          <p className="text-[12px] lg:text-sm text-secoundary dark:text-darkSecoundart font-normal font-popppind">
            {text}
          </p>
        </div>

        <Link
          to={linkk}
          className="ex flex items-center gap-2 border-l-2 border-l-border py-2 px-2 lg:px-3"
        >
          <p className="text-sm text-secoundary dark:text-darkSecoundart font-medium font-popppind">
            Shop Now
          </p>
          <GrLinkNext className="text-base text-secoundary dark:text-darkSecoundart" />
        </Link>
      </div>
    </>
  );
};

export default CommonExplore;