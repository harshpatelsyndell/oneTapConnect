import { useState } from "react";
import tick from "../assets/tick.png";

const cardDetails = {
  monthly: [
    {
      cardType: "Free",
      typeDes: "Create your free digital card in minute",
      userLimit: "For Individuals",
      price: "$0",
      userCountBox: false,
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
      userCountBox: false,
      buttonType: "Select Plan",
      includeHeading: "Includes:",
      includes: [
        "Advanced card designer",
        "Lead capture options",
        "Free OneTapConnect smart card",
        "Video onboarding and training",
        "Analytics",
        "Email support",
        "Add-on available",
      ],
    },
    {
      cardType: "Team",
      typeDes: "Manage your whole team",
      userLimit: "3 users included!",
      price: "$60/month",
      extraCharge: "+ $499 one time setup fee",
      userCountBox: true,
      buttonType: "Select Plan",
      includeHeading: "Everything in “Professional” plus:",
      includes: [
        "Professionally designed card template",
        "Templates management",
        "Organize users by team",
        "User content control",
        "User access levels",
        "Team analytics",
        "Priority support",
        "Add-on available",
      ],
    },
    {
      cardType: "Large Team & Enterprise",
      typeDes: "Personalized solution",
      userLimit: "No user limits!",
      price: "Dynamic pricing",
      userCountBox: false,
      buttonType: "Talk to sales",
      includeHeading: "Everything in “Team” plus:",
      includes: [
        "Dedicated account manager",
        "Full concierge service available",
        "VIP support",
        "Add-on available",
      ],
    },
  ],
  yearly: [
    {
      cardType: "Professional",
      typeDes: "Win your first impression",
      userLimit: "For Individuals",
      price: "$199/year",
      userCountBox: false,
      buttonType: "Select Plan",
      includeHeading: "Includes:",
      includes: [
        "Advanced card designer",
        "Lead capture options",
        "Free OneTapConnect smart card",
        "Video onboarding and training",
        "Analytics",
        "Email support",
        "Add-on available",
      ],
    },
    {
      cardType: "Large Team & Enterprise",
      typeDes: "Personalized solution",
      userLimit: "No user limits!",
      price: "Dynamic pricing",
      userCountBox: false,
      buttonType: "Talk to sales",
      includeHeading: "Everything in “Team” plus:",
      includes: [
        "Dedicated account manager",
        "Full concierge service available",
        "VIP support",
        "Add-on available",
      ],
    },
    {
      cardType: "Team",
      typeDes: "Manage your whole team",
      userLimit: "3 users included!",
      price: "$700/year",
      extraCharge: "+ one time setup fee",
      userCountBox: true,
      buttonType: "Select Plan",
      includeHeading: "Everything in “Professional” plus:",
      includes: [
        "Professionally designed card template",
        "Templates management",
        "Organize users by team",
        "User content control",
        "User access levels",
        "Team analytics",
        "Priority support",
        "Add-on available",
      ],
    },
  ],
};

console.log(cardDetails.monthly.length);

export default function PlanSec() {
  const [monthly, setMonthly] = useState(true);

  return (
    <div className="m-10 relative">
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

        <div className="flex flex-wrap justify-center gap-3 ">
          {monthly
            ? cardDetails.monthly.map((item, index) => (
                <div
                  key={index}
                  className="min-w-[200px] relative w-1/5 shadow-xl h-auto pb-10 bg-white rounded "
                >
                  <div className="p-3">
                    <h2 className="text-black font-semibold text-xl">
                      {item.cardType}
                    </h2>
                    <p className="text-greyCard text-xs">{item.typeDes}</p>
                  </div>
                  <hr className="my-1" />
                  <div className="p-3">
                    <p className="text-xs text-grey">{item.userLimit}</p>
                    <h3 className="font-semibold font-base">{item.price}</h3>
                    <p className="text-xs text-grey">{item?.extraCharge}</p>
                    {item.userCountBox ? (
                      <div className="flex w-full h-5 my-2">
                        <input
                          type="text"
                          placeholder="add user"
                          className="p-4 w-4/5 bg-white1 text-xs rounded-s-sm"
                        />

                        <button className="w-1/5 text-xs bg-black text-white1 h-8 rounded-e-sm">
                          3
                        </button>
                      </div>
                    ) : (
                      ""
                    )}
                    <button className="w-full bg-orange text-sm p-2 my-5 rounded text-white">
                      {item.buttonType}
                    </button>
                    <p className="text-black text-sm">{item.includeHeading}</p>
                    <ul className="text-xs text-cardList">
                      {item.includes.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <img src={tick} alt="tick" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="absolute bottom-0 w-full text-center">
                    <hr className="my-1" />
                    <button className="text-xs py-2">Compare Plans</button>
                  </div>
                </div>
              ))
            : cardDetails.yearly.map((item, index) => (
                <div
                  key={index}
                  className="min-w-[200px] relative w-1/5 shadow-xl h-auto pb-10 bg-white rounded "
                >
                  <div className="p-3">
                    <h2 className="text-black font-semibold text-xl">
                      {item.cardType}
                    </h2>
                    <p className="text-greyCard text-xs">{item.typeDes}</p>
                  </div>
                  <hr className="my-1" />
                  <div className="p-3">
                    <p className="text-xs text-grey">{item.userLimit}</p>
                    <h3 className="font-semibold font-base">{item.price}</h3>
                    <p className="text-xs text-grey">{item?.extraCharge}</p>
                    {item.userCountBox ? (
                      <div className="flex w-full h-5 my-2">
                        <input
                          type="text"
                          placeholder="add user"
                          className="p-4 w-4/5 bg-white1 text-xs rounded-s-sm"
                        />

                        <button className="w-1/5 text-xs bg-black text-white1 h-8 rounded-e-sm">
                          3
                        </button>
                      </div>
                    ) : (
                      ""
                    )}
                    <button className="w-full bg-orange text-sm p-2 my-5 rounded text-white">
                      {item.buttonType}
                    </button>
                    <p className="text-black text-sm">{item.includeHeading}</p>
                    <ul className="text-xs text-cardList">
                      {item.includes.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <img src={tick} alt="tick" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="absolute bottom-0 w-full text-center">
                    <hr className="my-1" />
                    <button className="text-xs py-2">Compare Plans</button>
                  </div>
                </div>
              ))}
        </div>

        {/* ---------- */}
      </div>
    </div>
  );
}
