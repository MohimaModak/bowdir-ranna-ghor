import React from "react";
import { Outlet } from "react-router-dom";
import Home from "./assets/Component/Home/Home";

const Root = () => {
  return (
    <div>
      <Home></Home>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
