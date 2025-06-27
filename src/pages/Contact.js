import react from "react";
import { Link } from "react-router-dom";
import Contactus from "../image/contact.jpg";

const Contact = () => {
  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen-[443px]">
      <div className="container mx-auto">
        <div>
          <img src={Contactus} className="w-[1700px] h-[400px]" />
        </div>
        <div className=" absolute right-[40%] top-[50%] left-[10%]">
          <h1 className="text-[50px] uppercase font-medium leading-5 tracking-widest text-center">
            Contact us
          </h1>
        </div>
        <div className="mt-16 flex justify-between gap-11">
          <div>
            <form className="bg-purple-200 py-[30px] px-[20px] items-center rounded-lg w-[600px] h-[550px]">
              <div className="">
                <p className="mb-2">Your Name:</p>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your name"
                  className="border p-2 w-[560px] rounded-lg"
                />
              </div>

              <div className="mt-5">
                <p className="mb-2">Your Mobile:</p>
                <input
                  type="tel"
                  name="number"
                  placeholder="Enter Your Mobile"
                  className="border p-2 w-[560px] rounded-lg"
                  maxLength="10"
                />
              </div>

              <div className="mt-5">
                <p className="mb-2">Your Email:</p>
                <input
                  type="email"
                  name="number"
                  placeholder="Enter Your Email"
                  className="border p-2 w-[560px] rounded-lg"
                />
              </div>

              <div className="mt-5 ">
                <p className="mb-2">Your Comment:</p>
                <textarea
                  type="text"
                  name="number"
                  placeholder="Enter Your Comment"
                  className="border p-2 w-[560px] h-[100px] resize-none rounded-lg"
                />
              </div>

              <div className="mt-5">
                <button className="bg-black text-white px-12 py-3 rounded-lg">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="flex">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d59503.34479529226!2d72.786149566676!3d21.233472386937713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1show%20to%20get%20iframe%20google%20maps!5e0!3m2!1sen!2sin!4v1750912251130!5m2!1sen!2sin"
              width="600"
              height="550"
              className="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
