import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);
  const { id, title, image, price, amount } = item;
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <div className="flex items-center">
          <Link to={`/product/${id}`}>
            <img className="max-w-[80px]" src={image} alt="" />
          </Link>
          <div className="w-full flex flex-col">
            <div className="pl-4 mb-2 flex justify-between">
              <Link
                to={`/product/${id}`}
                className="text-sm uppercase
             font-medium max-w[240px] text-black hover:underline"
              >
                {title}
              </Link>
              <div
                onClick={() => removeFromCart(id)}
                className="text-xl cursor-pointer "
              >
                <IoMdClose className="text-gray-500 hover:text-red-500 transition justify-end" />
              </div>
            </div>

            <div className="flex gap-x-2 h-[36px] text-sm pl-4 items-center">
              <div className="flex flex-1 max-w-[100px] items-center h-full border text-black font-medium">
                <div
                  onClick={() => decreaseAmount(id)}
                  className="flex-1 cursor-pointer flex justify-center items-center  h-full"
                >
                  <IoMdRemove />
                </div>
                <div className="h-full flex justify-center items-center px-2">
                  {amount}
                </div>
                <div
                  onClick={() => increaseAmount(id)}
                  className="flex-1  flex justify-center items-center cursor-pointer h-full"
                >
                  <IoMdAdd />
                </div>
              </div>
              <div className="flex-1 flex justify-around items-center text-black font-medium">
                $ {price}
              </div>
              <div className=" flex justify-end items-center text-black font-medium">{`$ ${parseFloat(
                item.price * amount
              ).toFixed(2)}`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
