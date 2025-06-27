import React, { useContext } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { ProductContext } from "../contexts/ProductContext";
import Mens from "../components/Mens";
import Electronics from "../components/Electronics";

import Product from "../components/Product";
import Hero from "../components/Hero";
import Menimage from "../image/mens.jpg";
import Electricimage from "../image/electric.jpg";
import Free from "../image/free.png";
import Earth from "../image/earth.png";
import Secure from "../image/secure.png";
import { Link } from "react-router-dom";

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

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const trend = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrow: false,
  };

  return (
    <div>
      <Hero />
      <section className="py-16 ">
        <div className="container mx-auto ">
          <div className="flex justify-between items-center">
            <h1 className=" mb-6 text-[35px] capitalize font-semibold leading-[1.4] tracking-wider  ">
              Season’s Top Picks
            </h1>

            <p className="text-[20px] capitalize  leading-[1.4] tracking-wider underline hover:text-red-500">
              <Link to={"/men"}> View all </Link>
            </p>
          </div>
          <div className="flex justify-between ">
            <div className="">
              <img
                src={Menimage}
                className="w-[350px] h-[400px] rounded-br-[30px] rounded-lg"
              />
            </div>
            <div className="">
              <Slider {...settings} className="w-[900px]">
                <div>
                  <div
                    className="grid grid-cols-1 w-[900px] md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 gap-[30px]
          max-w-sm mx-auto md:max-w-none md:mx-0 pl-5 "
                  >
                    {filteredProducts &&
                      filteredProducts.slice(0, 1).map((product) => {
                        return <Mens product={product} key={product.id} />;
                      })}
                  </div>
                </div>
                <div>
                  <div
                    className="grid grid-cols-1 w-[900px] md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 gap-[30px]
          max-w-sm mx-auto md:max-w-none md:mx-0 pl-5 "
                  >
                    {filteredProducts &&
                      filteredProducts.slice(1, 2).map((product) => {
                        return <Mens product={product} key={product.id} />;
                      })}
                  </div>
                </div>
                <div>
                  <div
                    className="grid grid-cols-1 w-[900px] md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 gap-[30px]
          max-w-sm mx-auto md:max-w-none md:mx-0 pl-5 "
                  >
                    {filteredProducts &&
                      filteredProducts.slice(2, 3).map((product) => {
                        return <Mens product={product} key={product.id} />;
                      })}
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-purple-100 py-8 ">
        <div className="container mx-auto  ">
          <div>
            <div className="text-center mb-6 text-[30px] capitalize font-bold leading-[1.4] tracking-wider text-red-600">
              <h1>best sale</h1>
            </div>
            <div className="">
              <Slider {...trend} className=" mx-auto">
                <div>
                  <div
                    className="grid grid-cols-1 w-[900px] md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 gap-[30px]
          max-w-sm mx-auto md:max-w-none md:mx-0 pl-5 "
                  >
                    {filteredProducts &&
                      filteredProducts.slice(3, 4).map((product) => {
                        return <Product product={product} key={product.id} />;
                      })}
                  </div>
                </div>
                <div>
                  <div
                    className="grid grid-cols-1 w-[900px] md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 gap-[30px]
          max-w-sm mx-auto md:max-w-none md:mx-0 pl-5 "
                  >
                    {filteredProducts &&
                      filteredProducts.slice(5, 6).map((product) => {
                        return <Product product={product} key={product.id} />;
                      })}
                  </div>
                </div>
                <div>
                  <div
                    className="grid grid-cols-1 w-[900px] md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 gap-[30px]
          max-w-sm mx-auto md:max-w-none md:mx-0 pl-5 "
                  >
                    {filteredProducts &&
                      filteredProducts.slice(19, 20).map((product) => {
                        return <Product product={product} key={product.id} />;
                      })}
                  </div>
                </div>

                <div>
                  <div
                    className="grid grid-cols-1 w-[900px] md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 gap-[30px]
          max-w-sm mx-auto md:max-w-none md:mx-0 pl-5 "
                  >
                    {filteredProducts &&
                      filteredProducts.slice(9, 10).map((product) => {
                        return <Product product={product} key={product.id} />;
                      })}
                  </div>
                </div>

                <div>
                  <div
                    className="grid grid-cols-1 w-[900px] md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 gap-[30px]
          max-w-sm mx-auto md:max-w-none md:mx-0 pl-5 "
                  >
                    {filteredProducts &&
                      filteredProducts.slice(17, 18).map((product) => {
                        return <Product product={product} key={product.id} />;
                      })}
                  </div>
                </div>

                <div>
                  <div
                    className="grid grid-cols-1 w-[900px] md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 gap-[30px]
          max-w-sm mx-auto md:max-w-none md:mx-0 pl-5 "
                  >
                    {filteredProducts &&
                      filteredProducts.slice(6, 7).map((product) => {
                        return <Product product={product} key={product.id} />;
                      })}
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section className="py-13 mb-10 mt-10">
        <div className="container mx-auto  ">
          <div className="flex justify-between items-center">
            <h1 className=" mb-6 text-[35px] capitalize font-semibold leading-[1.4] tracking-wider">
              Best of Electronics
            </h1>
            <p className="text-[20px] capitalize  leading-[1.4] tracking-wider underline hover:text-red-500">
              <Link to={"/electronic"}> View all </Link>
            </p>
          </div>
          <div className="flex justify-between ">
            <div className="">
              <img
                src={Electricimage}
                className="w-[350px] h-[400px] rounded-br-[30px] rounded-lg"
              />
            </div>
            <div className="">
              <Slider {...settings} className="w-[890px] mx-auto">
                <div>
                  <div
                    className="grid grid-cols-1 w-[900px] md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 gap-[30px]
          max-w-sm mx-auto md:max-w-none md:mx-0 pl-5 "
                  >
                    {filteredProducts &&
                      filteredProducts.slice(10, 11).map((product) => {
                        return (
                          <Electronics product={product} key={product.id} />
                        );
                      })}
                  </div>
                </div>
                <div>
                  <div
                    className="grid grid-cols-1 w-[900px] md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 gap-[30px]
          max-w-sm mx-auto md:max-w-none md:mx-0 pl-5 "
                  >
                    {filteredProducts &&
                      filteredProducts.slice(11, 12).map((product) => {
                        return (
                          <Electronics product={product} key={product.id} />
                        );
                      })}
                  </div>
                </div>
                <div>
                  <div
                    className="grid grid-cols-1 w-[900px] md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 gap-[30px]
          max-w-sm mx-auto md:max-w-none md:mx-0 pl-5 "
                  >
                    {filteredProducts &&
                      filteredProducts.slice(12, 13).map((product) => {
                        return (
                          <Electronics product={product} key={product.id} />
                        );
                      })}
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto">
          <div className="flex justify-between items-center ">
            <div className="flex gap-6 cursor-pointer border-2 border-gray-300 rounded-xl py-9 px-3">
              <div className="w-[50px]">
                <img src={Free} />
              </div>

              <div>
                <h1 className="text-xl font-bold leading-[1.4]">
                  Free Standard Delivery
                </h1>
                <p className="text-gray-500 capitalize leading-7">in india</p>
              </div>
            </div>

            <div className="flex gap-6 cursor-pointer border-2 border-gray-300 rounded-xl py-9 px-3">
              <div className="w-[50px]">
                <img src={Earth} />
              </div>

              <div>
                <h1 className="text-xl font-bold leading-[1.4]">
                  World wide shipping
                </h1>
                <p className="text-gray-500 capitalize leading-7">
                  we ship all over the world
                </p>
              </div>
            </div>

            <div className="flex gap-6 cursor-pointer border-2 border-gray-300 rounded-xl py-9 px-3">
              <div className="w-[50px]">
                <img src={Secure} />
              </div>

              <div>
                <h1 className="text-xl font-bold leading-[1.4]">
                  100% Secure Checkout
                </h1>
                <p className="text-gray-500 capitalize leading-7">
                  We ensure secure payment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
