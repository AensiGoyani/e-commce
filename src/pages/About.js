import React from "react";
import { Link } from "react-router-dom";
import Aboutus from "../image/about.jpg";

const About = () => {
  return (
    <section className="pt-32 pb-12 lg:py-20 h-screen-[443px]">
      <div className="container mx-auto">
 
        <div>
          <img src={Aboutus} className="w-[1700px]" />
        </div>
        <div className=" absolute right-[40%] top-[40%] left-[10%]">
          <h1 className="text-[50px] uppercase font-medium leading-5 tracking-widest text-center">
            About us
          </h1>
        </div>
        <div className="mt-16 ">
          <div>
            <p className="text-xl ">
              <b className="text-blue-500">
                <Link to="/"> E-commerce shop </Link>
              </b>{" "}
              is India's foremost leading manufacturer, Exporter and wholesaler
              of Indian ethnic wear.
            </p>
          </div>
          <div className="mt-10">
            <p className="text-xl leading-9">
              We give express deliveries to USA, UK, Canada, Australia, New
              Zealand, South Africa, France, Germany, Netherlands, Singapore,
              Switzerland, Norway, Sweden, Austria, Mauritius, Ireland, Belgium,
              Finland, Denmark, India or anywhere in the world!
            </p>
          </div>
          <div className="mt-10">
            <p className="text-xl ">
              Today, when customers shop for clothing online, they are concerned
              about things:
            </p>
            <div className="mt-6 pl-10 leading-10">
              <p className="text-[20px] font-bold">1 . Is it Authentic?</p>
              <p className="text-[20px] font-bold">
                2 . Would it be exactly similar to how it looks in the picture?
              </p>
            </div>
          </div>

          <div className="mt-10">
            <p className="text-xl leading-9">
              Our extreme dedication to customer satisfaction and our utmost
              care for the authenticity of our products have earned Tapee the
              recognition as <b> "The Most Trusted E-commerce Shop Of India"</b>{" "}
              and we proudly flaunt it!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
