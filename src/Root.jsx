import React from "react";
import { Outlet } from "react-router-dom";
import Home from "./assets/Component/Home/Home";
import Navbar from "./assets/Component/Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
