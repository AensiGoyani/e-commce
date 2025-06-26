import React from "react";
import { Link } from "react-router-dom";
import WomanImg from "../image/women.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Banner1 from "../image/banner1.jpg";
import Banner2 from "../image/banner2.jpg";
import Banner3 from "../image/banner3.jpg"

const Hero = () => {
  const settings = {
    arrow: true,
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


    <section className="py-24 px-0 h-[600px]">
      <div className="container mx-auto">
        <Slider {...settings}>
          <div className=" relative">
            <div>
              <img src={Banner1} className="" />
            </div>
            <div className=" absolute right-[40%] top-[20%] left-[10%]">
              <div className="font-semibold flex items-center uppercase tracking-widest ">
                <div className=" w-10 h-[2px] bg-red-500 mr-3"></div>New Trend
              </div>
              <h1 className="text-[65px] leading-[1.4] font-light mb-4 tracking-wider">
                AUTUMN SALE  STYLES{" "}
                <span className="font-semibold">MEN'S</span>
              </h1>
              <Link
                to={"/men"}
                className="self-start uppercase font-semibold border-b-2 border-black"
              >
                Discover More
              </Link>
            </div>
          </div>


          <div className=" relative">
            <div>
              <img src={Banner2} className="" />
            </div>
            <div className=" absolute right-[40%] top-[20%] left-[10%]">
              <div className="font-semibold flex items-center uppercase tracking-widest ">
                <div className=" w-10 h-[2px] bg-red-500 mr-3"></div>New Trend
              </div>
              <h1 className="text-[65px] leading-[1.4] font-light mb-4 tracking-wider">
                AUTUMN SALE  STYLES{" "}
                <span className="font-semibold">WOMEN'S</span>
              </h1>
              <Link
                to={"/women"}
                className="self-start uppercase font-semibold border-b-2  border-black"
              >
                Discover More
              </Link>
            </div>
          </div>


          <div className=" relative">
            <div>
              <img src={Banner3} className="w-[1700px] h-[513px]" />
            </div>
            <div className=" absolute right-[40%] top-[20%] left-[10%] ">
              <div className="font-semibold flex items-center uppercase tracking-widest ">
                <div className=" w-10 h-[2px] bg-red-500 mr-3"></div>sale
              </div>
              <h1 className="text-[65px] leading-[1.4] font-light mb-4 tracking-wider uppercase ">
                get up to 30% off{" "}
                <span className="font-semibold uppercase">electronics</span>
              </h1>
              <button className="bg-black text-white py-3 px-5 rounded-full hover:bg-transparent hover:text-black hover:border border-black tracking-wider leading-5">
              <Link
                to={"/electronic"}
                className="self-start uppercase font-semibold "
              >
                Shop Now
              </Link></button>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Hero;
