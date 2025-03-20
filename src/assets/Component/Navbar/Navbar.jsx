import React, { useState } from "react";
import NavbarIcon from "../../../Gallery/icon.png"
// import { Link } from "react-scroll";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const toggleButton = () => {
    setToggle(!toggle);
  };

  return (
    <div className="fixed w-full text-orange-600 font-medium top-0 z-50 shadow-sm">
      {/* Mobile Navbar */}
      <div className="md:hidden sm:block text-sm ml-3" onClick={toggleButton}>
        <span className="cursor-pointer p-5">
          <div className="w-8 h-1  bg-orange-600"></div>
          <div className="w-8 h-1 mt-1.5 bg-orange-600"></div>
          <div className="w-8 h-1 mt-1.5 bg-orange-600"></div>
        </span>
      </div>
      <div className={`mobile-menu ${toggle ? "open" : ""}`}>
        <div className="navbar-links font-bold text-orange-600 bg-orange-200 shadow-orange-300 shadow-2xl">
          <Link to="/" smooth={true} duration={1000} className="text-xl font-medium p-4 block" onClick={toggleButton}>
            Home
          </Link>
          <Link className="relative group">
            <button className="text-xl font-medium">Menu ▼</button>
            <ul className="absolute left-0 mt-2 w-40 text-orange-100 bg-orange-500 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <Link to="/DailyMenu" smooth={true} duration={1000} className="text-xl font-medium block" onClick={toggleButton}>
                Daily Menu
              </Link>
              <Link to="/WeekendSpecial" smooth={true} duration={1000} className="text-xl font-medium block" onClick={toggleButton}>
                Weekend Special
              </Link>
            </ul>
          </Link>
          <Link to="/Dessert" smooth={true} duration={1000} className="text-xl font-medium block" onClick={toggleButton}>
            Dessert
          </Link>
          <Link to="/Touch" smooth={true} duration={1000} className="text-xl font-medium p-4 block" onClick={toggleButton}>
            Touch
          </Link>
        </div>
      </div>

      <div className="flex justify-between items-center font-medium bg-orange-200">
        <div className="hidden md:block w-full ">
          <nav className="navbar flex justify-between items-center">
            <img src={NavbarIcon} className="w-20" />
            <div className="flex justify-center gap-5">
              <div className="navbar-links lg:flex justify-center items-center gap-5">
                <Link to="/" smooth={true} duration={1000} className="text-xl font-medium hover:underline">
                  Home
                </Link>

                <div className="relative group">
                  <button className="text-xl font-medium">Menu ▼</button>
                  <ul className="absolute left-0 mt-2 w-48 text-orange-100 bg-orange-500 p-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link to="/DailyMenu" smooth={true} duration={1000} className="text-xl font-medium hover:underline">
                      Daily Menu
                    </Link>
                    <br />

                    <Link to="/WeekendSpecial" smooth={true} duration={1000} className="text-xl font-medium hover:underline">
                      Weekend Special
                    </Link>
                  </ul>
                </div>
                <Link to="/Dessert" smooth={true} duration={1000} className="text-xl font-medium hover:underline">
                  Dessert
                </Link>
                <Link to="/Touch" smooth={true} duration={1000} className="text-xl font-medium hover:underline">
                  Contact
                </Link>
              </div>

              <div className="flex justify-center items-center">
                <button className="text-xl text-orange-100 bg-orange-500 font-medium rounded py-1.5 px-4 ">Order Now</button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}