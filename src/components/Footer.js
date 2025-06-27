import React from "react";
import {
  BiLocationPlus,
  BiPhoneCall,
  BiLogoFacebookSquare,
} from "react-icons/bi";
import { BiEnvelope } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="">
      <section className="bg-black py-12">
        <div className="container mx-auto">
          <div className="flex justify-between  ">
            <div>
              <h1 className="text-white text-[28px] font-medium mb-3 capitalize">
                Shop
              </h1>
              <ul className="text-white text-[20px] font-light leading-9 tracking-wider capitalize ">
                <li className="hover:text-red-500">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="hover:text-red-500">
                  <Link to={"/men"}>men's cloth</Link>
                </li>
                <li className="hover:text-red-500">
                  <Link to={"/women"}>women's cloth </Link>{" "}
                </li>
                <li className="hover:text-red-500">
                  <Link to={"/jewelery"}> jewelwry</Link>
                </li>
                <li className="hover:text-red-500">
                  <Link to={"/electronic"}>electronics</Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-white text-[28px] font-medium mb-3  capitalize">
                customer services
              </h1>
              <ul className="text-white text-[20px] font-light leading-9 tracking-wider capitalize">
                <li className="hover:text-red-500">
                  <Link to={"/contact"}> contact us</Link>
                </li>
                <li className="hover:text-red-500">
                  <Link to={"/about"}> About us</Link>
                </li>
              </ul>
            </div>

            <div>
              <h1 className="text-white text-[28px] font-medium mb-3  capitalize">
                information
              </h1>
              <ul className="text-white text-[20px] font-light leading-9 tracking-wider capitalize">
                <li className="hover:text-red-500">
                  <Link to={"/terms"}>Terms & Conditions</Link>
                </li>
                <li className="hover:text-red-500">
                  <Link to={"/policy"}>Privacy Policy</Link>
                </li>
              </ul>
            </div>

            <div>
              <h1 className="text-white text-[28px] font-medium mb-3 capitalize">
                Address
              </h1>
              <div className="flex items-center gap-5">
                <BiLocationPlus className="text-white text-[20px]" />
                <p className="text-white text-[20px] font-light leading-9 tracking-wider hover:text-red-500 cursor-pointer">
                  123,Devarabeesanahalli Village ,<br /> Karnataka, India
                </p>
              </div>
              <div className="flex items-center gap-5">
                <BiEnvelope className="text-white text-[20px]" />
                <p className="text-white text-[20px] font-light leading-9 tracking-wider hover:text-red-500">
                  <Link
                    to={"/"}
                    onClick={() =>
                      (window.location = "mailto:ecommerceshop@gmail.com")
                    }
                  >
                    e-shop@gmail.com
                  </Link>
                </p>
              </div>

              <div className="flex items-center gap-5">
                <BiPhoneCall className="text-white" />
                <p className="text-white text-[20px] font-light leading-9 tracking-wider hover:text-red-500">
                  <Link
                    to={"/"}
                    onClick={() => (window.location = "callto:1234567890")}
                  >
                    1234567890
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-black">
        <div className="container mx-auto py-10 border-t-2 border-white">
          <div className="flex justify-between items-center">
            <p className="text-white text-xl">
              Copyright &copy;{" "}
              <Link to={"/"}>
                <b className="hover:text-red-500">E-Shop </b>
              </Link>{" "}
              2025. All rights reserved.
            </p>
            <div className="flex gap-10">
              <FaFacebookF className="text-white text-[30px] bg-blue-700 rounded-full w-9 h-9 py-1" />
              <BsInstagram className="text-white text-[25px] bg-red-800 rounded-full w-10 h-9 py-1 " />
              <FaPinterestP className="text-white text-[30px] bg-red-600 rounded-full w-9 h-9 py-1" />
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
