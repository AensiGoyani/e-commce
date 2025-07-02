import React, { useContext } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { ProductContext } from "../contexts/ProductContext";


import Product from "../components/Product";
import Hero from "../components/Hero";
import Menimage from "../image/mens.jpg";
import Electricimage from "../image/electric.jpg";
import Free from "../image/free.png";
import Earth from "../image/earth.png";
import Secure from "../image/secure.png";
import { Link } from "react-router-dom";
import Categories from "../components/Categories";

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
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const trend = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrow: false,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="">
        <Hero />
      </div>
      <section className="">
        <div className="container mx-auto max-md:px-4">
          <div className="">
            <div className="flex justify-between items-center">
              <h1 className="  text-[35px] capitalize font-semibold leading-[1.4] tracking-wider max-md:text-[22px] max-md:mb-0 ">
                Season’s Top Picks
              </h1>

              <p className="text-[20px] capitalize  leading-[1.4] tracking-wider underline hover:text-red-500 max-md:text-[17px]">
                <Link to={"/category/men's clothing"}> View all </Link>
              </p>
            </div>
            <div className="flex mt-5">
              <div className="">
                <img
                  src={Menimage}
                  className="w-[450px] h-[400px] rounded-br-[30px] rounded-lg"
                />
              </div>
              <div className="w-full md:w-[75%] pl-3">
                <div>
                  <Slider {...settings} className=" ">
                    {[0, 1, 2, 3].map((index) => (
                      <div key={index} className="p-4">
                        {filteredProducts
                          ?.slice(index, index + 1)
                          .map((product) => (
                            <Product product={product} key={product.id} />
                          ))}
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-8 mt-5 max-md:py-0 max-md:mt-4">
        <div className="container mx-auto  ">
          <div>
            <div className="text-center mb-6 text-[30px] capitalize font-bold leading-[1.4] tracking-wider text-red-600">
              <h1>best sale</h1>
            </div>
            <div className="">
              <Slider {...trend} className=" mx-auto">
                {[3, 5, 19, 9, 17, 6, 3, 2, 7].map((index) => (
                  <div key={index} className="p-4">
                    {/* <div
                      className="grid grid-cols-1 w-[900px] md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 gap-[30px]
                  max-w-sm mx-auto md:max-w-none md:mx-0 relative "
                    > */}
                    {filteredProducts
                      ?.slice(index, index + 1)
                      .map((product) => (
                        <Product product={product} key={product.id} />
                      ))}
                  </div>
                  // </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section className="py-13 mt-5  max-md:py-0 max-md:mt-2 max-md:mb-0">
        <div className="container mx-auto max-md:px-4">
          <div className="flex justify-between items-center mb-4 max-md:items-center">
            <h1 className=" text-[35px] capitalize font-semibold leading-[1.4] tracking-wider max-md:text-[22px] max-md:mb-0">
              Best of Electronics
            </h1>
            <p className="text-[20px] capitalize  leading-[1.4] tracking-wider underline hover:text-red-500 max-md:text-[17px]">
              <Link to={"/electronic"}> View all </Link>
            </p>
          </div>

          <div className="flex mt-5">
            <div className="">
              <img
                src={Electricimage}
                className="w-[450px] h-[400px] rounded-br-[30px] rounded-lg"
              />
            </div>
            <div className="w-full md:w-[75%] pl-3">
              <div>
                <Slider {...settings} className="">
                  {[8, 9, 10, 12, 13].map((index) => (
                    <div key={index} className="p-4">
                      {filteredProducts
                        ?.slice(index, index + 1)
                        .map((product) => (
                          <Product product={product} key={product.id} />
                        ))}
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 max-md:py-0">
        <div className="container mx-auto px-4 max-md:max-w-[650px] max-md:px-4">
          <div className="flex flex-wrap justify-between gap-6">
            <div className="flex gap-6 cursor-pointer border-2 border-gray-300 rounded-xl py-9 px-8 w-full md:w-[30%]">
              <div className="w-[60px]">
                <img src={Free} />
              </div>
              <div>
                <h1 className="text-xl font-bold leading-[1.4]">
                  Free Standard Delivery
                </h1>
                <p className="text-gray-500 capitalize leading-7 text-lg">
                  in india
                </p>
              </div>
            </div>

            <div className="flex gap-6 cursor-pointer border-2 border-gray-300 rounded-xl py-9 px-8 w-full md:w-[30%]">
              <div className="w-[60px]">
                <img src={Earth} />
              </div>
              <div>
                <h1 className="text-xl font-bold leading-[1.4]">
                  World wide shipping
                </h1>
                <p className="text-gray-500 capitalize leading-7 text-lg">
                  we ship all over the world
                </p>
              </div>
            </div>

            <div className="flex gap-6 cursor-pointer border-2 border-gray-300 rounded-xl py-9 px-8 w-full md:w-[30%]">
              <div className="w-[60px]">
                <img src={Secure} />
              </div>
              <div>
                <h1 className="text-xl font-bold leading-[1.4]">
                  100% Secure Checkout
                </h1>
                <p className="text-gray-500 capitalize text-lg leading-7">
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
