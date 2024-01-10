// import React from "react";
import { useState } from "react";
import Navigation from "../components/Navigation";
import PlanHeroSec from "../components/PlanHeroSec";

export default function Plans() {
  return (
    <div>
      <Navigation />
      <div className="bg-white1 p-5">
        <PlanHeroSec />
        <PlanSec />
      </div>
    </div>
  );
}

function PlanSec() {
  const [monthly, setMonthly] = useState(true);

  return (
    <div className="m-10">
      <div className="sm:p-10">
        <div className="text-center">
          <h3 className="font-semibold text-[1.4rem]">Plan Selection</h3>
          <div className="flex items-center justify-center my-10 mx-auto bg-white w-full lg:w-2/5  rounded-full">
            <button
              className={`w-full p-3 text-xs sm:text-sm ${
                monthly
                  ? "text-white bg-orange rounded-full"
                  : "text-black bg-transparent"
              } transition-all duration-300 ease-in-out`}
              onClick={() => setMonthly(true)}
            >
              Pay Monthly
            </button>
            <button
              className={`w-full p-3 text-xs sm:text-sm ${
                monthly
                  ? "text-black bg-transparent"
                  : "text-white bg-orange rounded-full"
              } transition-all duration-300 ease-in-out`}
              onClick={() => setMonthly(false)}
            >
              Yearly and save 20%
            </button>
          </div>
        </div>

        <div className="flex">
          <div className="components-card bg-white rounded ">
            <div className="p-3">
              <h2 className="text-black font-semibold text-xl">Free</h2>
              <p className="text-greyCard text-xs">
                Create your free digital card in minute
              </p>
            </div>
            <hr className="my-1" />
            <div className="p-3">
              <p className="text-xs text-grey">For Individuals</p>
              <h3 className="font-semibold font-base">$ 0</h3>
              {/* <p className="text-xs text-grey">+ $499 one time setup fee</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
