import React from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Banner1 from "../image/banner5.jpg";
import Banner2 from "../image/banner4.jpg";
import Banner3 from "../image/banner6.jpg";

const Hero = () => {
  const banners = {
    arrow: false,
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // cssEase: "linear"
  };
  return (
    <section className="py-20 px-0 max-md:py-15 ">
      <div className="container mx-auto ">
        <Slider {...banners}>
          <div className=" relative ">
            <div>
              <img
                src={Banner1}
                className="max-md:h-[300px] max-lg:h-[450px]"
              />
            </div>
            <div className=" absolute right-[40%] top-[20%] left-[10%]">
              <div className="font-semibold flex items-center uppercase tracking-widest ">
                <div className=" w-10 h-[2px] bg-red-500 mr-3"></div>New Trend
              </div>
              <h1 className="text-[65px] leading-[1.4] font-light mb-4 tracking-wider max-md:text-[20px] max-md:leading-[40px] max-lg:text-[45px] max-lg:leading-[65px]">
                E-SHOP SALE STYLES <span className="font-semibold">MEN'S</span>
              </h1>
              <button className="bg-black text-white py-3 px-5 rounded-full hover:bg-transparent hover:text-black hover:border border-black tracking-wider leading-5 max-md:py-2 ">
                <Link
                  to={"/category/men's clothing"}
                  className="self-start uppercase font-semibold  border-black"
                >
                  Show More
                </Link>
              </button>
            </div>
          </div>

          <div className=" relative">
            <div>
              <img
                src={Banner2}
                className="max-md:h-[300px] max-lg:h-[450px]"
              />
            </div>
            <div className=" absolute right-[40%] top-[20%] left-[10%]">
              <div className="font-semibold flex items-center uppercase tracking-widest ">
                <div className=" w-10 h-[2px] bg-red-500 mr-3"></div>New Trend
              </div>
              <h1 className="text-[65px] leading-[1.4] font-light mb-4 tracking-wider max-md:text-[20px] max-md:leading-[40px] max-lg:text-[40px] max-lg:leading-[65px]">
                E-SHOP SALE STYLES{" "}
                <span className="font-semibold">WOMEN'S</span>
              </h1>
              <button className="bg-black text-white py-3 px-5 rounded-full hover:bg-transparent hover:text-black hover:border border-black tracking-wider leading-5 max-md:py-2">
                <Link
                  to={"/category/women's clothing"}
                  className="self-start uppercase font-semibold   border-black"
                >
                  View All
                </Link>
              </button>
            </div>
          </div>

          <div className=" relative">
            <div>
              <img
                src={Banner3}
                className="w-[1700px] max-md:h-[300px] max-lg:h-[450px]"
              />
            </div>
            <div className=" absolute right-[40%] top-[20%] left-[10%] ">
              <div className="font-semibold flex items-center uppercase tracking-widest ">
                <div className=" w-10 h-[2px] bg-red-500 mr-3"></div>sale
              </div>
              <h1 className="text-[65px] leading-[1.4] font-light mb-4 tracking-wider uppercase max-md:text-[17px] max-md:leading-[40px] max-lg:text-[35px] max-lg:leading-[65px]">
                get up to 30% off{" "}
                <span className="font-semibold uppercase">electronics</span>
              </h1>
              <button className="bg-black text-white py-3 px-5 rounded-full hover:bg-transparent hover:text-black hover:border border-black tracking-wider leading-5 max-md:py-2">
                <Link
                  to={"/category/electronics"}
                  className="self-start uppercase font-semibold "
                >
                  Shop Now
                </Link>
              </button>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Hero;
