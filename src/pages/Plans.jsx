// import React from "react";
import Navigation from "../components/Navigation";
import PlanHeroSec from "../components/PlanHeroSec";
import PlanSec from "../components/PlanSec";

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
