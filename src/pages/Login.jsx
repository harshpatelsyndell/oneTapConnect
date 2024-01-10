// import React from "react";
import Logo from "../assets/Logo.png";
import profile from "../assets/profile.png";

export default function Login() {
  return (
    <div className="flex items-center">
      <div className="bg-black w-1/2 h-screen flex items-center justify-center rounded-se-lg rounded-ee-lg">
        <div className="p-5 fixed top-0 left-0">
          <img src={Logo} alt="logo" />
        </div>
        <div>
          <h1 className="text-white font-bold text-2xl">
            Login to Your Accounts
          </h1>
        </div>
      </div>

      {/* ------------------------------------- */}

      <div className="w-1/2 h-screen flex flex-col items-center justify-center space-y-4">
        <div>
          <h3 className="font-bold">Meet Kimba</h3>
        </div>
        <div className="">
          <img src={profile} alt="phoneImg" />
        </div>
      </div>
    </div>
  );
}
