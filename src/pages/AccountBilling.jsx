// import React from "react";

import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import transaction from "../assets/transaction.png";
import payment from "../assets/payment.png";
import billing from "../assets/billing.png";
import subplan from "../assets/sub&plan.png";

export default function AccountBilling() {
  const [showSidebar, setShowSidebar] = useState(window.innerWidth > 768);

  const toggleSidebar = () => {
    setShowSidebar((isOpen) => !isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setShowSidebar(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex justify-start">
      <Sidebar showSidebar={showSidebar} />
      {/* ---------------- */}
      <div className="w-full md:w-4/5">
        <Navigation
          toggleSidebar={toggleSidebar}
          searchBar={true}
          logo={false}
          menubtn={true}
        />
        <BillingSec />
      </div>
    </div>
  );
}

function BillingSec() {
  return (
    <div className="bg-white1 h-screen p-5">
      <div className="flex space-x-3 text-xs">
        <a href="#">Deshboard</a>
        <p>&gt;</p>
        <a href="#">Account & Billing</a>
        <p>&gt;</p>
        <a href="#" className="text-orange">
          Overview
        </a>
      </div>
      <div className="flex items-center my-5 text-sm space-x-5">
        <div className="flex items-center text-orange space-x-2">
          <img className="bg-orange p-1 rounded" src={subplan} alt="plan" />
          <p>Subscription & add-ons</p>
        </div>
        <div className="flex items-center space-x-2">
          <img className="p-1 rounded" src={billing} alt="plan" />
          <p>Billing information</p>
        </div>
        <div className="flex items-center space-x-2">
          <img className="p-1 rounded" src={transaction} alt="plan" />
          <p>Transactions</p>
        </div>
        <div className="flex items-center space-x-2">
          <img className="p-1 rounded" src={payment} alt="plan" />
          <p>Payment Methods</p>
        </div>
      </div>
    </div>
  );
}
