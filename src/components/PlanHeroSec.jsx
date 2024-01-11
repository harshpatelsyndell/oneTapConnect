// import React from "react";
import tapclick from "../assets/tapclick.png";
import usercircle from "../assets/usercircle.png";
import { Link } from "react-router-dom";

export default function PlanHeroSec() {
  return (
    <div>
      <div className="text-center my-10">
        <h1 className="text-blackFont font-bold text-[2rem] sm:text-[2.4rem] sm:leading-3 ">
          Get Started with OneTapConnect
        </h1>
        <p className="my-10 sm:w-[30rem] mx-auto">
          Experience the power of networking like never before! Designed for
          business owners and sales professionals
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-x-8 sm:space-y-0">
        <button className="relative w-4/5 sm:w-2/5 lg:w-1/5 bg-orange hover:bg-orangeHover transition-colors duration-300 ease-in-out p-3 text-white rounded-lg ">
          <Link to="/acount&billing">
            <img src={tapclick} alt="tapIcon" className="absolute w-7 left-5" />
            Select Plan
          </Link>
        </button>
        <p>Or</p>
        <button className="relative w-4/5 sm:w-2/5 lg:w-1/5 bg-blackFont hover:bg-black transition-colors duration-300 ease-in-out p-3 text-white rounded-lg ">
          <img src={usercircle} alt="tapIcon" className="absolute w-7 left-5" />
          Book a demo
        </button>
      </div>
    </div>
  );
}
