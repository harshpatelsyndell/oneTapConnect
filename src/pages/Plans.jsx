// import React from "react";
import { useState } from "react";
import Navigation from "../components/Navigation";
import PlanHeroSec from "../components/PlanHeroSec";
import tick from "../assets/tick.png";

const cardDetails = {
  monthly: [
    {
      cardType: "Free",
      typeDes: "Create your free digital card in minute",
      userLimit: "For Individuals",
      price: "$0",
      buttonType: "Select Plan",
      includeHeading: "Includes:",
      includes: [
        "Basic card designer",
        "Share card by text, email and social media",
        "Upgrade at anytime",
      ],
    },
    {
      cardType: "Professional",
      typeDes: "Win your first impression",
      userLimit: "For Individuals",
      price: "$20/month",
      buttonType: "Select Plan",
      includeHeading: "Includes:",
      includes: [
        "Advanced card designer",
        "Lead capture options",
        "Free OneTapConnect smart card",
        "Video onboarding and training",
        " Analytics",
        "Email support",
        "Add-on available",
      ],
    },
  ],
  yearly: [
    {
      cardType: "Free",
      typeDes: "Create your free digital card in minute",
      userLimit: "For Individuals",
    },
  ],
};

console.log(cardDetails.monthly.length);

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

        <div className="flex justify-center space-x-3">
          {/* -----------card1------------ */}
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
              {/* <div className="flex w-full h-5 my-2">
                <input
                  type="text"
                  placeholder="add user"
                  className="p-4 w-4/5 bg-white1 text-xs rounded-s-sm"
                />

                <button className="w-1/5 text-xs bg-black text-white1 h-8 rounded-e-sm">
                  3
                </button>
              </div> */}
              <button className="w-full bg-orange text-sm p-2 my-2 rounded text-white">
                Select a plan
              </button>
              <p className="text-black text-sm">Includes:</p>
              <ul className="text-xs text-cardList">
                <li className="flex items-center">
                  <img src={tick} alt="tick" /> Basic card designer
                </li>
                <li className="flex items-center">
                  <img src={tick} alt="tick" /> Basic card designer
                </li>
                <li className="flex items-center">
                  <img src={tick} alt="tick" /> Basic card designer
                </li>
              </ul>
            </div>
          </div>
          {/* -----------card1------------ */}
          {/* -----------card2------------ */}
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
              {/* <div className="flex w-full h-5 my-2">
                <input
                  type="text"
                  placeholder="add user"
                  className="p-4 w-4/5 bg-white1 text-xs rounded-s-sm"
                />

                <button className="w-1/5 text-xs bg-black text-white1 h-8 rounded-e-sm">
                  3
                </button>
              </div> */}
              <button className="w-full bg-orange text-sm p-2 my-2 rounded text-white">
                Select a plan
              </button>
              <p className="text-black text-sm">Includes:</p>
              <ul className="text-xs text-cardList">
                <li className="flex items-center">
                  <img src={tick} alt="tick" /> Basic card designer
                </li>
                <li className="flex items-center">
                  <img src={tick} alt="tick" /> Basic card designer
                </li>
                <li className="flex items-center">
                  <img src={tick} alt="tick" /> Basic card designer
                </li>
              </ul>
            </div>
          </div>
          {/* -----------card2------------ */}
        </div>

        {/* ---------- */}
      </div>
    </div>
  );
}
