import React from "react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mt-3 cc flex justify-between w-[95%] mx-auto">
      <div className="flex gap-2 items-center hover:cursor-pointer">
        <figure className="bg-[#ABEF5F] p-2 rounded-full">
          <img className="" src="../../../images/Group 1.png" alt="" />
        </figure>
        <h3 className="text-3xl font-extrabold">Rinterio</h3>
      </div>
      <div className="flex gap-3 items-center">
        <NavLink to="/" className="text-[#737373] text-lg">
          Home
        </NavLink>
        <NavLink to="/services" className="text-[#737373] text-lg">
          Services
        </NavLink>
        <NavLink to="/portfolio" className="text-[#737373] text-lg">
          Portfolio
        </NavLink>
        <NavLink to="/blogs" className="text-[#737373] text-lg">
          Blogs
        </NavLink>
        <NavLink to="/contact-us" className="text-[#737373] text-lg">
          Contact Us
        </NavLink>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-3">
          <CiSearch className="text-2xl" />
          <IoCartOutline className="text-2xl" />
        </div>
        <button className="bg-[#ABEF5F] text-[#1C1C1C] px-4 py-2 rounded-full items-center text-xl font-extrabold flex gap-2">
          Book Consult
          <span className="bg-[#1C1C1C] p-2 rounded-full">
            <img className="w-3" src="../../../images/Group 111.png" alt="" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
