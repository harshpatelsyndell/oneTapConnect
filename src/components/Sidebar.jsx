import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import mycard from "../assets/mycard.png";

Sidebar.propTypes = {
  showSidebar: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default function Sidebar({ showSidebar, toggleSidebar }) {
  return (
    <div
      className={`absolute md:relative md:block w-[20rem] md:w-1/5 h-screen bg-black ${
        showSidebar ? "translate-x-0" : "-translate-x-full"
      } transition-transform ease-in-out duration-300 z-50`}
    >
      <Link to="/" onClick={toggleSidebar}>
        <img className="m-3 my-6 lg:m-6 w-4/5 lg:w-3/5" src={Logo} alt="logo" />
      </Link>
      <ul className="text-white m-5 py-5 lg:m-6">
        <li className="flex items-center hover:bg-blackFont py-3 px-2 cursor-pointer rounded">
          <img src={mycard} alt="card" className="me-3" />
          My Card
        </li>
      </ul>
    </div>
  );
}
