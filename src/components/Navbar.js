import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="">
      <ul className="flex gap-10 capitalize font-normal text-[17px] max-lg:hidden">
        <Link
          to="/"
          className="border-b-2 border-white hover:text-red-600 hover:border-b-2 hover:border-red-600"
        >
          home
        </Link>

        <Link
          to="/category/electronics"
          className=" hover:text-red-600 hover:border-b-2 hover:border-red-600"
        >
          Electronics
        </Link>
        <Link
          to="/category/jewelery"
          className=" hover:text-red-600 hover:border-b-2 hover:border-red-600"
        >
          Jewelery
        </Link>
        <Link
          to="/category/men's clothing"
          className=" hover:text-red-600 hover:border-b-2 hover:border-red-600"
        >
          Men
        </Link>
        <Link
          to="/category/women's clothing"
          className=" hover:text-red-600 hover:border-b-2 hover:border-red-600"
        >
          Women
        </Link>

        <Link
          to="/about"
          className="hover:text-red-600 hover:border-b-2 hover:border-red-600 "
        >
          About
        </Link>

        <Link
          to="/contact"
          className="hover:text-red-600 hover:border-b-2 hover:border-red-600"
        >
          Contact
        </Link>
      </ul>
      <div>
        <FaBars className="hidden max-lg:block" />
      </div>
    </nav>
  );
};

export default Navbar;
