import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { BsPlus, BsEyeFill, BsBag, BsStar } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";

const Categories = ({}) => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  const [visibleCount, setVisibleCount] = useState(4);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [categoryName]);

  const toggleShowMore = () => {
    if (showAll) {
      setVisibleCount(4);
    } else {
      setVisibleCount(products.length);
    }
    setShowAll(!showAll);
  };

  const [showAlert, setShowAlert] = useState(false);

  const handleAddToCart = () => {
    addToCart(products, products.id);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 1000);
  };

  return (
    <div className="py-16 mt-12">
      <div className="container mx-auto max-md:px-4">
        {showAlert && (
          <div className="mt-4 px-4 py-3 flex items-center gap-4  bg-green-100 text-green-800 border border-green-300 rounded mb-3">
            <BsBag /> Product added to cart!
          </div>
        )}
        <h1 className="text-center mb-6 text-[35px] uppercase font-semibold leading-[1.4] tracking-wider">
          {categoryName}
        </h1>
        <div
          className=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-[30px]
          max-w-sm mx-auto md:max-w-none md:mx-0 pl-5 max-md:pl-0"
        >
          {products.slice(0, visibleCount).map((products) => (
            <div>
              <div className="border border-[#a79b9b] h-[300px] mb-4 relative  overflow-hidden group transition:">
                <div key={products.id}>
                  <div className="w-full h-full flex justify-center items-center">
                    <div className="w-[1260px] mx-auto flex justify-center items-center p-6">
                      <img
                        className="max-h[100px] h-[200px]   group-hover:scale-110 transition duration-300"
                        src={products.image}
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="absolute top-6 -right-11 group-hover:right-5   p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button onClick={() => addToCart(products, products.id)}>
                      <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
                        <BsPlus
                          className="text-3xl"
                          onClick={handleAddToCart}
                        />
                      </div>
                    </button>
                    <Link
                      to={`/product/${products.id}`}
                      className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
                    >
                      <BsEyeFill />
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-sm capitalize text-gray-500">
                  {categoryName}
                </div>
                <Link to={`/product/${products.id}`}>
                  <h2 className="font-semibold mb-1 ">{products.title}</h2>
                </Link>
               
                
                <h2 className="font-bold text-xl text-red-500 ">
                  ${products.price}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {products.length > 4 && (
          <div className="text-center font-bold text-xl mt-8">
            <button
              onClick={toggleShowMore}
              className="px-6 py-2 bg-black border border-black text-white rounded-full hover:bg-transparent hover:text-black"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
