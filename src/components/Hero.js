import React from "react";
import { Link } from "react-router-dom";
import WomanImg from "../image/women.png";

const Hero = () => {
  return (
    <section className="bg-purple-200 h-[700px] bg-hero bg-no-repeat bg-cover bg-center py-24 px-0">
      <div className="container mx-auto flex justify-between h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase tracking-widest ">
            <div className=" w-10 h-[2px] bg-red-500 mr-3"></div>New Trend
          </div>
          <h1 className="text-[70px] leading-[1.4] font-light mb-4 tracking-wider">
            AUTUMN SALE STYLES <span className="font-semibold">WOMEN'S</span>
          </h1>
          <Link to={'/'} className="self-start uppercase font-semibold border-b-2 border-black">Discover More</Link>
        </div>
        <div className="hidden lg:block lg:justify-between">
          <img src={WomanImg} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
