import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import Women from "../components/Womens";
import { BsArrow90DegDown } from "react-icons/bs";

const Womens = () => {
  const { products } = useContext(ProductContext);

  const filteredProducts = products.filter((item) => {
    return item.category === "women's clothing";
  });

  const [num, setNum] = useState(false);
  const [btn, setBtn] = useState(false);
  const handleClick = () => {
    setNum(!num);
    setBtn(!btn);
  };

  return (
    <div>
      {/* <Hero /> */}
      <section className="py-16 mt-20">
        <div className="container mx-auto ">
          <h1 className="text-center mb-6 text-[35px] uppercase font-semibold leading-[1.4] tracking-wider">
            Women's Clothing
          </h1>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]
          max-w-sm mx-auto md:max-w-none md:mx-0"
          >
            {filteredProducts.slice(0, 5).map((product) => {
              return <Women product={product} key={product.id} />;
            })}
          </div>

          <div>
            {num ? (
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]
          max-w-sm mx-auto md:max-w-none md:mx-0"
              >
                {filteredProducts.slice(5, 6).map((product) => {
                  return <Women product={product} key={product.id} />;
                })}
              </div>
            ) : (
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]
          max-w-sm mx-auto md:max-w-none md:mx-0"
              >
                {filteredProducts.slice(0, 0).map((product) => {
                  return <Women product={product} key={product.id} />;
                })}
              </div>
            )}

            <div className="mt-5 text-center">
              <button
                onClick={handleClick}
                className=" bg-black text-white py-3 px-6 font-bold text-xl tracking-wider rounded-xl"
              >
                {btn ? "Show Less" : "Show More"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Womens;
