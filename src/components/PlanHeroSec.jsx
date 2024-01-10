// import React from "react";

export default function PlanHeroSec() {
  return (
    <div>
      <div className="text-center my-10">
        <h1 className="text-blackFont font-bold text-[2rem] sm:text-[2.4rem] sm:leading-3">
          Get Started with OneTapConnect
        </h1>
        <p className="my-10 sm:w-[30rem] mx-auto">
          Experience the power of networking like never before! Designed for
          business owners and sales professionals
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-x-8 sm:space-y-0">
        <button className="w-4/5 sm:w-1/5 bg-orange hover:bg-orangeHover transition-colors duration-300 ease-in-out p-3 text-white rounded-lg">
          Select Plan
        </button>
        <p>Or</p>
        <button className=" w-4/5 sm:w-1/5 bg-blackFont hover:bg-black transition-colors duration-300 ease-in-out p-3 text-white rounded-lg">
          Book a demo
        </button>
      </div>
    </div>
  );
}
