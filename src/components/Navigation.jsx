import Group from "../assets/Group.png";
import notification from "../assets/notification.png";
import Profile from "../assets/Ellipse 40.png";
import { Link } from "react-router-dom";
// import React from "react";
import search from "../assets/search.png";
import PropTypes from "prop-types";
import menu from "../assets/menu.png";

Navigation.propTypes = {
  searchBar: PropTypes.bool,
  logo: PropTypes.bool,
  menubtn: PropTypes.bool,
  toggleSidebar: PropTypes.func,
};

export default function Navigation({
  searchBar,
  logo,
  menubtn,
  toggleSidebar,
}) {
  return (
    <div className="sticky top-0 p-5 flex justify-start items-center bg-white z-40">
      {menubtn ? (
        <img
          className="w-5 md:hidden"
          src={menu}
          alt=""
          onClick={toggleSidebar}
        />
      ) : (
        ""
      )}
      {logo ? (
        <Link to="/">
          <img src={Group} alt="logo" />
        </Link>
      ) : (
        <Link className="md:hidden mx-5" to="/">
          <img src={Group} alt="logo" />
        </Link>
      )}
      {searchBar ? (
        <div className=" mx-4 w-auto hidden sm:flex">
          <img
            src={search}
            alt="icon"
            className="w-full p-1 bg-white1 rounded-s"
          />
          <input
            type="text"
            placeholder="search"
            className="bg-white1 p-1 px-3 rounded-e focus:outline-none"
          />
        </div>
      ) : (
        ""
      )}

      <div className="flex items-center justify-end space-x-5 ms-auto ">
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
