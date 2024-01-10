import Group from "../assets/Group.png";
import notification from "../assets/notification.png";
import Profile from "../assets/Ellipse 40.png";
import { Link } from "react-router-dom";
// import React from "react";

export default function Navigation() {
  return (
    <div className="sticky top-0 p-5 flex justify-between items-center bg-white">
      <Link to="/">
        <img src={Group} alt="logo" />
      </Link>
      <div className="flex items-center justify-end space-x-5">
        <div>
          <img src={notification} alt="alert" />
        </div>
        <div>
          <img className="cursor-pointer" src={Profile} alt="profile" />
        </div>
      </div>
    </div>
  );
}
