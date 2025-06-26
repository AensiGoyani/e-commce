import React from "react";
import { BiLocationPlus , BiPhoneCall , BiLogoFacebookSquare } from "react-icons/bi";
import {BiEnvelope} from "react-icons/bi"
import { Link } from "react-router-dom";
import Facebook from "../image/facebook.png";
import Instragram from "../image/instr.png";
import Pinterest from "../image/pintrest.png";

const Footer = () => {
  return (
    <footer className="">
      <section className="bg-black py-12">
        <div className="container mx-auto">
          <div className="flex justify-between  ">
            <div>
              <h1 className="text-white text-[28px] font-medium mb-3 capitalize">Shop</h1>
              <ul className="text-white text-[20px] font-light leading-9 tracking-wider capitalize">
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/men'}>men's cloth</Link></li>
                <li><Link to={'/women'}>women's cloth </Link> </li>
                <li><Link to={'/jewelery'}> jewelwry</Link></li>
                <li><Link to={'/electronic'}>electronics</Link></li>
              </ul>
            </div>
            <div>
              <h1 className="text-white text-[28px] font-medium mb-3  capitalize">customer services</h1>
              <ul className="text-white text-[20px] font-light leading-9 tracking-wider capitalize">
                <li><Link to={'/contact'}> contact us</Link></li>
                <li><Link to={'/about'}> About us</Link></li>
                
              </ul>
            </div>

            <div>
              <h1 className="text-white text-[28px] font-medium mb-3 capitalize">Address</h1>
              <div className="flex items-center gap-5"> 
                <BiLocationPlus className="text-white text-[20px]" />
                <p className="text-white text-[20px] font-light leading-9 tracking-wider">
                  123,Devarabeesanahalli Village ,<br/>  Karnataka, India
                </p>
              </div>
              <div className="flex items-center gap-5"> 
                <BiEnvelope className="text-white text-[20px]"  />
                <p className="text-white text-[20px] font-light leading-9 tracking-wider">
                  <Link to={"/"} onClick={() => window.location = 'mailto:ecommerceshop@gmail.com'}>ecommerceshop@gmail.com</Link>
                </p>
              </div>

              <div className="flex items-center gap-5"> 
                <BiPhoneCall className="text-white" />
                <p className="text-white text-[20px] font-light leading-9 tracking-wider ">
                  <Link to={"/"} onClick={() => window.location = 'callto:1234567890'}>1234567890</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </section>
      <section className=" bg-black">
        <div className="container mx-auto py-10 border-t-2 border-white">
          <div className="flex justify-between items-center">
          <p className='text-white text-xl'>Copyright &copy; <Link to={'/'}><b>Ecommerce Shop </b></Link> 2025. All rights reserved.</p>
            <div className="flex gap-10">
             <img src={Facebook} className="w-[40px]"/>
             <img src={Instragram} className="w-[50px]"/>
             <img src={Pinterest} className="w-[40px]"/>
            </div>
          </div>
        </div>
      </section>
    </footer>
  
  );
};

export default Footer;
