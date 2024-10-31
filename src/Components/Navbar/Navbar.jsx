import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mt-3">
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
        <NavLink to="/protfolio" className="text-[#737373] text-lg">
          Portfolio
        </NavLink>
        <NavLink to="/blogs" className="text-[#737373] text-lg">
          Blogs
        </NavLink>
        <NavLink to="/contact-us" className="text-[#737373] text-lg">
          Contact Us
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
