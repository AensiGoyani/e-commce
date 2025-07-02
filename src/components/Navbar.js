import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" ">
      <ul className="flex gap-10 capitalize font-normal text-[17px]">
        <li className="border-b border-white hover:text-red-600 hover:border-b-2 hover:border-red-600">
          <NavLink to="/">home</NavLink>
        </li>
        <NavLink to="/category/electronics" className=" hover:text-red-600 hover:border-b-2 hover:border-red-600" >
          Electronics
        </NavLink>
        <NavLink to="/category/jewelery" className=" hover:text-red-600 hover:border-b-2 hover:border-red-600">
          Jewelery
        </NavLink>
        <NavLink to="/category/men's clothing" className=" hover:text-red-600 hover:border-b-2 hover:border-red-600">
          Men
        </NavLink>
        <NavLink to="/category/women's clothing" className=" hover:text-red-600 hover:border-b-2 hover:border-red-600">Women</NavLink>

        <li className=" hover:text-red-600 hover:border-b-2 hover:border-red-600">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className=" hover:text-red-600 hover:border-b-2 hover:border-red-600">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
     {/* <FaBars className="hidden max-md:block" /> */}
    </nav>
   
  );
};

export default Navbar;
