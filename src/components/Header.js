import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { BsBag } from "react-icons/bs";
import Logo from "../image/logo.png";
import { Link, Links } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FaBars, FaUser } from "react-icons/fa";
import { AuthContext } from "../contexts/AuthContext";


const Header = () => {
  const { user, logout  } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setisOpen } = useContext(SidebarContext);
  const { itemAmount , clearCart } = useContext(CartContext);
  

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  const handleLogout = () => {
    alert("Are you Sure Logout!");
  logout();
  clearCart();
};

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md " : "bg-none py-6 max-md:py-2"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full max-md:px-4 max-lg:justify-normal  ">
        <Link to={"/"}>
          <div className="flex items-center " title="Home">
            <img className="w-[40px]" src={Logo} />
            <span className="pl-4 uppercase text-2xl tracking-widest">
              e-shop
            </span>
          </div>
        </Link>
        <Navbar />

        <div className="items-center flex  max-lg:flex max-lg:gap-8">
          <div className="relative" >
            {user ? (
              <div
                className="flex items-center gap-4 top-3 cursor-pointer"
                onClick={toggleDropdown}
              >
                <span className="capitalize font-medium">{user}</span>
              </div>
            ) : (
              <Link to="/login" className="hover:underline">
                <FaUser className="text-2xl" />
              </Link>
            )}

            {user && showDropdown && (
              <div className="absolute right-0 mt-3 w-48 bg-white text-black rounded shadow z-50">
                <div className="px-4 py-2 border-b border-gray-200">
                  <span className="font-semibold">Name: {user}</span>
                </div>
                <Link to="/login">
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-red-100 text-red-600"
                >
                  Logout
                </button>
                </Link>
              </div>
            )}
          </div>
          <div
            onClick={() => setisOpen(!isOpen)}
            className="cursor-pointer flex relative "
          >
            <div className="flex pr-5  items-center"></div>

            <BsBag className="text-2xl" />
            <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </div>

          {/* <FaBars className="hidden max-lg:block" /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
