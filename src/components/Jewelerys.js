import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { DiVim } from "react-icons/di";
import { CartContext } from "../contexts/CartContext";

const Jewelerys = ({ product }) => {
  const { id, image, price, title, category } = product;
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <div>
        <div className="border border-[#a79b9b] h-[300px] mb-4 relative overflow-hidden group transition:">
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-[160px] mx-auto flex justify-center items-center">
              <img
                className="max-h[100px] group-hover:scale-110 transition duration-300"
                src={image}
                alt=""
              />
            </div>
          </div>
          <div className="absolute top-6 -right-11 group-hover:right-5   p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button onClick={() => addToCart(product, id)}>
              <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
                <BsPlus
                  className="text-3xl"
                  onClick={() => window.alert("Your Item Is Cart")}
                />
              </div>
            </button>
            <Link
              to={`/product/${id}`}
              className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
            >
              <BsEyeFill />
            </Link>
          </div>
        </div>
        <div>
          <div className="text-sm capitalize text-gray-500">{category}</div>
          <Link to={`/product/${id}`}>
            <h2 className="font-semibold mb-1 ">{title}</h2>
          </Link>

          <h2 className="font-bold text-xl text-red-500 ">${price}</h2>
        </div>
      </div>
    </>
  );
};

export default Jewelerys;
