import React, { useEffect, useRef, useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { Link } from "react-router-dom";

import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

import CartItem from "../components/CartItem";
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
  const { isOpen, handleClose } = useContext(SidebarContext);
  const sidebarRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      handleClose();
    }
  };

  if (isOpen) {
    document.addEventListener("keydown", handleKeyDown);
  }

  return (
    <div
      ref={sidebarRef}
      className=" w-full bg-white fixed top-0  h-full shadow-2xl md:w-[30vw]
    transition-all duration-300 z-20 px-4 lg:px-[35px] justify-between right-0 "
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({itemAmount})
        </div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>

      <div>
        {cart.length === 0 ? (
          <p className="text-xl text-center mt-10 text-red-600">
            Your cart is empty.{" "}
          </p>
        ) : (
          <div>
            <p>You have items in your cart!</p>
          </div>
        )}
      </div>

      <div className="flex flex-col   gap-y-2 h-[350px]  overflow-y-auto overflow-x-hidden border-b  ">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>

      <div className=" flex flex-col gap-y-2 py-4 mt-3 ">
        <div className="flex w-full justify-between items-center">
          {cart.length > 0 && (
            <div className="uppercase font-semibold">
              <span className="mr-2">Total:</span>${" "}
              {parseFloat(total).toFixed(2)}
            </div>
          )}

          {cart.length > 0 && (
            <div
              onClick={clearCart}
              className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
            >
              <FiTrash2 />
            </div>
          )}
        </div>

        <div className="text-center mt-3 border border-red-500 py-3">
          <button>
            <Link to="/cart">View Cart</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
