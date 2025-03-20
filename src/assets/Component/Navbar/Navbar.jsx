import React, { useState } from "react";
// import NavbarIcon from "../../../Gallery/NavbarIcon.png"
// import { Link } from "react-scroll";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const toggleButton = () => {
    setToggle(!toggle);
  };

  return (
    <div className="fixed w-full text-white font-medium top-0 z-50 shadow-sm">
      {/* Mobile Navbar */}
      <div className="md:hidden sm:block text-sm ml-3" onClick={toggleButton}>
        <span className="cursor-pointer p-5">
          <div className="w-8 h-1  bg-orange-600"></div>
          <div className="w-8 h-1 mt-1.5 bg-orange-600"></div>
          <div className="w-8 h-1 mt-1.5 bg-orange-600"></div>
        </span>
      </div>
      <div className={`mobile-menu ${toggle ? "open" : ""}`}>
        <div className="navbar-links font-bold text-teal-300">
          <Link to="/" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            Home
          </Link>
          <li className="relative group">
            <button className="hover:text-[#f59425]">Menu ▼</button>
            <ul className="absolute left-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <Link to="/DailyMenu" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
                Daily Menu
              </Link>
              <Link to="/WeekendSpecial" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
                Weekend Special
              </Link>
              <Link to="/Dessert" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
                Dessert
              </Link>
            </ul>
          </li>
          <Link to="/Touch" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            Touch
          </Link>
        </div>
      </div>

      <div className="flex justify-between items-center bg">
        <div className="hidden md:block w-full ">
          <nav className="navbar flex justify-between items-center">
            {/* <img src={NavbarIcon} className="w-16" /> */}
            <div className="navbar-links lg:flex justify-center items-center gap-5">
              <Link to="/" smooth={true} duration={1000} className="text-xl hover:text-teal-200 hover:underline">
                Home
              </Link>

              <li className="relative group">
                <button className="hover:text-[#f59425]">Menu ▼</button>
                <ul className="absolute left-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link to="/DailyMenu" smooth={true} duration={1000} className="text-xl hover:text-teal-200 hover:underline">
                    Daily Menu
                  </Link>
                  <Link to="/WeekendSpecial" smooth={true} duration={1000} className="text-xl hover:text-teal-200 hover:underline">
                    Weekend Special
                  </Link>
                  <Link to="/Dessert" smooth={true} duration={1000} className="text-xl hover:text-teal-200 hover:underline">
                    Dessert
                  </Link>
                </ul>
              </li>

              <Link to="/Touch" smooth={true} duration={1000} className="text-xl hover:text-teal-200 hover:underline">
                Contact
              </Link>
            </div>
            <div className="flex justify-center items-center">
              <button className="text-lg text-slate-700 font-bold rounded py-2 px-4 bg-teal-300">Buy Now</button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}