import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-10 capitalize font-normal text-[17px] ">
        <li className="border-b-2 border-white hover:text-red-600 hover:border-b-2 hover:border-red-600">
          <NavLink to="/">home</NavLink>
        </li>
        <li className="border-b-2 border-white hover:text-red-600 hover:border-b-2 hover:border-red-600">
          <NavLink to="/men">men's clothing</NavLink>
        </li>
        <li className="border-b-2 border-white hover:text-red-600 hover:border-b-2 hover:border-red-600">
          <NavLink to="/women">women's clothing</NavLink>
        </li>
        <li className="border-b-2 border-white hover:text-red-600 hover:border-b-2 hover:border-red-600">
          <NavLink to="/jewelery">jewelery</NavLink>
        </li>
        <li className="border-b-2 border-white hover:text-red-600 hover:border-b-2 hover:border-red-600">
          <NavLink to="electronic">electronics</NavLink>
        </li>
        <li className="border-b-2 border-white hover:text-red-600 hover:border-b-2 hover:border-red-600">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="border-b-2 border-white hover:text-red-600 hover:border-b-2 hover:border-red-600">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
