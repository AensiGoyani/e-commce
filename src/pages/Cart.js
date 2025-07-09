import React, { useEffect, useRef, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { SidebarContext } from "../contexts/SidebarContext";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

import CartItem from "../components/CartItem";
import { CartContext } from "../contexts/CartContext";

const Cart = () => {
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
  const { isOpen, handleClose } = useContext(SidebarContext);
  return (
    <>
      <div
        className={`${
          isOpen ? "right-0" : "right-0"
        } pt-32 pb-12 lg:py-20 h-screen-[943px]`}
      >
        <div className="container mx-auto">
          <div className="text-center mt-14">
            <h1 className="text-2xl capitalize font-semibold">Cart Page</h1>
          </div>
          <div className="flex items-center justify-between py-6 border-b">
            <div className="uppercase text-xl font-semibold">
              Shopping Bag ({itemAmount})
            </div>
            <Link to="/">
              <div
                onClick={handleClose}
                className="cursor-pointer w-8 h-8 flex justify-center items-center"
              >
                <IoMdArrowForward className="text-2xl" />
              </div>
            </Link>
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

          <div className="flex flex-col gap-y-2 h-[350px] lg:h-[auto] overflow-y-auto overflow-x-hidden border-b ">
            {cart.map((item) => {
              return <CartItem item={item} key={item.id} />;
            })}
          </div>

          <div className=" flex flex-col gap-y-2 py-4 mt-4 ">
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

            <div className="flex justify-center mt-4">
              <Link to="/category/electronics">
                <button className="border bg-red-500 text-white text-xl font-semibold capitalize py-3 px-6 rounded-2xl hover:border-red-600 hover:bg-transparent hover:text-black">
                  countine Shopping
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
