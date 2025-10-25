import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router";
import { FaFacebook, FaTelegram } from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { AiFillTwitterCircle } from "react-icons/ai";
import paypal from "../assets/images/paypal.png";
import stripe from "../assets/images/stripe.png";
import verisign from "../assets/images/verisign.png";
import visa from "../assets/images/visa.png";

const Footer = () => {
  const start = [
    {
      menuItem: "Release Notes",
      menuLink: "/",
    },
    {
      menuItem: "Upgrade Guide",
      menuLink: "/",
    },
    {
      menuItem: "Browser Support",
      menuLink: "/",
    },
    {
      menuItem: "Dark Mode",
      menuLink: "/",
    },
  ];

  const explore = [
    {
      menuItem: "Prototyping",
      menuLink: "/",
    },
    {
      menuItem: "Design systems",
      menuLink: "/",
    },
    {
      menuItem: "Pricing",
      menuLink: "/",
    },
    {
      menuItem: "Security",
      menuLink: "/",
    },
  ];

  const community = [
    {
      menuItem: "Discussion Forums",
      menuLink: "/",
    },
    {
      menuItem: "Code of Conduct",
      menuLink: "/",
    },
    {
      menuItem: "Contributing",
      menuLink: "/",
    },
    {
      menuItem: "API Reference",
      menuLink: "/",
    },
  ];

  return (
    <>
      <footer className="dark:bg-primary">
        <div className="f1 border-t border-b border-t-border border-b-border">

        <div className="container py-15 flex flex-wrap px-6 items-center justify-start lg:justify-between gap-18">
          {/* ------col 1 */}
          <div className="social">
            <div className="col-1 mt-15 lg:mt-0">
              <div className="logo">
                <img src={logo} alt="" />

                <div className="items mt-5 flex flex-col gap-3">
                  <Link to={"/"} className="item-1 flex items-center gap-2">
                    <FaFacebook className="text-[#4676ED] text-2xl" />
                    <p className="text-base text-secoundary dark:text-darkSecoundart font-normal font-popppind">
                      Facebook
                    </p>
                  </Link>
                  <Link to={"/"} className="item-1 flex items-center gap-2">
                    <TiSocialYoutubeCircular className="text-[#DA0000] text-2xl" />
                    <p className="text-base text-secoundary dark:text-darkSecoundart font-normal font-popppind">
                      YouTube
                    </p>
                  </Link>
                  <Link to={"/"} className="item-1 flex items-center gap-2">
                    <FaTelegram className="text-[#1D93D2] text-2xl" />
                    <p className="text-base text-secoundary dark:text-darkSecoundart font-normal font-popppind">
                      Tekegram
                    </p>
                  </Link>
                  <Link to={"/"} className="item-1 flex items-center gap-2">
                    <AiFillTwitterCircle className="text-[#5A99EC] text-2xl" />
                    <p className="text-base text-secoundary dark:text-darkSecoundart font-normal font-popppind">
                      Twitter
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ------------Col 2 */}
          <div className="started">
            <h3 className="text-base pb-5 text-primary dark:text-white font-semibold font-popppind">
              Getting started
            </h3>
            <div className="flex flex-col items-start gap-4">
              {start.map((item, key) => (
                <Link to={item.menuLink} key={key}>
                  <p className="text-base text-secoundary dark:text-darkSecoundart font-normal font-popppind">
                    {item.menuItem}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* -------------col 3 */}

          <div className="started">
            <h3 className="text-base pb-5 text-primary dark:text-white font-semibold font-popppind">
              Explore
            </h3>
            <div className="flex flex-col items-start gap-4">
              {explore.map((item, key) => (
                <Link to={item.menuLink} key={key}>
                  <p className="text-base text-secoundary dark:text-darkSecoundart font-normal font-popppind">
                    {item.menuItem}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* -----------col 4 */}

          <div className="started">
            <h3 className="text-base pb-5 text-primary dark:text-white font-semibold font-popppind">
              Community
            </h3>
            <div className="flex flex-col items-start gap-4">
              {community.map((item, key) => (
                <Link to={item.menuLink} key={key}>
                  <p className="text-base text-secoundary dark:text-darkSecoundart font-normal font-popppind">
                    {item.menuItem}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
        </div>

        <div className="f2 py-9 container lg:flex  items-center justify-between">
          <div className="text">
            <p className="text-sm lg:text-[16px] text-[#4B5563] dark:text-darkSecoundart font-normal font-popppind text-center pb-3">
              Nexton eCommerce. © 2024
            </p>
          </div>

          <div className="brand flex items-center justify-center gap-1">
            <Link className="brand-1">
              <img src={visa} alt="brand" />
            </Link>
            <Link className="brand-2">
              <img src={paypal} alt="brand" />
            </Link>
            <Link className="brand-3">
              <img src={stripe} alt="brand" />{" "}
            </Link>
            <Link className="brand-4">
              <img src={verisign} alt="brand" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
