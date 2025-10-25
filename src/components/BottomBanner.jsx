import React from "react";
import { Link } from "react-router";
import boy from "../assets/images/boy.png";

const BottomBanner = () => {
  return (
    <>
      <section className="orgbanner hidden lg:block dark:bg-primary pt-33 pb-12">
        <div className="container bg-[#F5F5F5] dark:bg-primary flex justify-around items-center rounded-[30px] dark:border dark:border-white">
          <div className="text flex flex-col  gap-6">
            <h3 className="text-[20px] text-secoundary dark:text-darkSecoundart font-medium font-popppind">
              100% Original Products
            </h3>
            <h2 className="text-4xl text-primary dark:text-white font-semibold font-popppind w-[362px]">
              The All New Fashion Collection Items
            </h2>
            <h3 className="text-[20px] text-[#4B5563] dark:text-darkSecoundart font-medium font-popppind">
              Starting from: $59.99
            </h3>
            <Link className="text-[16px] text-white font-medium font-popppind bg-primary dark:border dark:border-white w-[144px] h-[52px] flex justify-center items-center rounded-[50px]">
              Shop now
            </Link>
          </div>
          <div className="img">
            <img src={boy} alt="boy" />
          </div>
        </div>
      </section>
    </>
  );
};

export default BottomBanner;
