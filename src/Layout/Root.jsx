import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  return (
    <div className="w-[95%] mx-auto">
      <Navbar />
      <div className="my-6">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
