import React from "react";
import { Outlet } from "react-router-dom";
import Home from "./assets/Component/Home/Home";
import Navbar from "./assets/Component/Navbar/Navbar";
// import Footer from "./assets/Component/Footer/Footer";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Root;
