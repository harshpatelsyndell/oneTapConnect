// import React from "react";
import Logo from "../assets/Logo.png";
import Profile from "../assets/profile.png";
import CloudIcon from "../assets/cloud-computing.png";
import Google from "../assets/google.png";

export default function Login() {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white1">
      <div className="bg-black w-full  md:w-1/2 h-screen flex items-center justify-center md:rounded-se-lg md:rounded-ee-lg">
        <div className="p-5 fixed top-0 left-0">
          <img src={Logo} alt="logo" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div>
            <h1 className="text-white font-bold text-2xl text-center">
              Login to Your Account
            </h1>
            <p className="text-grey my-3 text-xs text-center">
              New to OneTapConnect ?{" "}
              <span className="text-orange cursor-pointer">
                <a href="#">Create new account</a>
              </span>
            </p>
          </div>

          <div className="w-[20rem] bg-white h-15 my-5 px-3 py-1 flex justify-between items-center">
            <div className="flex items-center">
              <div className="h-full w-auto flex items-center">
                <img src={CloudIcon} alt="cloud" className="w-6" />
              </div>
              <div className="ms-3 space-y-0">
                <p className="text-xs ps-1">Continue as Ghislain</p>
                <select className="bg-transparent text-xs">
                  <option value="info@cloudcabin.io">info@cloudcabin.io</option>
                </select>
              </div>
            </div>
            <div className="h-full w-auto flex items-center">
              <img src={Google} alt="cloud" className="w-6" />
            </div>
          </div>

          <div className="w-full flex justify-center items-center">
            <div className="w-2/5 h-px bg-white"></div>
            <div>
              <p className="text-white mx-3">OR</p>
            </div>
            <div className="w-2/5 h-px bg-white"></div>
          </div>

          <div className="w-[20rem] my-5 space-y-5">
            <input
              className="w-full h-15 p-3"
              type="text"
              placeholder="Your Email"
            />
            <input
              className="w-full h-15 p-3"
              type="password"
              placeholder="password"
            />
            <button className="w-full h-15 p-3 bg-orange text-white">
              Login
            </button>
          </div>

          <div>
            <a href="#" className="text-orange text-sm">
              Forgot your password?
            </a>
          </div>
        </div>
      </div>

      {/* ------------------------------------- */}

      <div className="w-1/2 h-screen flex flex-col items-center justify-center space-y-4">
        <div>
          <h3 className="font-bold">Meet Kimba</h3>
        </div>
        <div className="">
          <img src={Profile} alt="phoneImg" />
        </div>
      </div>
    </div>
  );
}
