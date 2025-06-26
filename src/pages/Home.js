import React, { useContext } from "react";

import { ProductContext } from "../contexts/ProductContext";

import Product from "../components/Product";
import Hero from "../components/Hero";

const Home = () => {
  const { products } = useContext(ProductContext);

  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" ||
      item.category === "jewelery" ||
      item.category === "electronics" ||
      item.category === "women's clothing"
    );
  });

  return (
    <div>
      <Hero />
      <section className="py-16 ">
        <div className="container mx-auto ">
          <h1 className="text-center mb-6 text-[35px] uppercase font-semibold leading-[1.4] tracking-wider">
            our product
          </h1>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]
          max-w-sm mx-auto md:max-w-none md:mx-0"
          >
            {filteredProducts && filteredProducts.slice(0,10) .map((product ) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
