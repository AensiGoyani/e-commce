import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import Jewelerys from "../components/Jewelerys";

const Jewelery = () => {
  const { products } = useContext(ProductContext);

  const filteredProducts = products.filter((item) => {
    return item.category === "jewelery";
  });

  return (
    <div>
      {/* <Hero /> */}
      <section className="py-16 mt-20">
        <div className="container mx-auto ">
          <h1 className="text-center mb-6 text-[35px] uppercase font-semibold leading-[1.4] tracking-wider">
            Jewelery
          </h1>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]
          max-w-sm mx-auto md:max-w-none md:mx-0"
          >
            {filteredProducts.map((product) => {
              return <Jewelerys product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Jewelery;
