import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/fontawesome-free-solid";

const Navbar = () => {
  const [displayList, setDisplayList] = useState(false);

  const showList = () => setDisplayList(!displayList);

  return (
    <div
      style={!displayList ? { overflow: "hidden" } : { overflow: "visible" }}
      className="w-[100vw] space-x-3 flex items-center justify-between bg-transparent fixed top-0 py-6 px-12 sm:overflow-visible backdrop-blur-md shadow-md z-50"
    >
      <div className="px-2 py-1 text-white bg-gradient-to-r  from-[#232B69] to-[#66328F] rounded-md">
        <Link className="text-xl font-bold" to="/">
          Logo
        </Link>
      </div>

      <div
        style={!displayList ? { right: "-150px" } : { right: "50px" }}
        className="md:static absolute top-20 transition-all duration-200"
      >
        <ul className="flex w-[150px]  md:w-auto flex-col md:flex-row items-center justify-start md:justify-between md:space-x-6 space-y-5 md:py-0 py-5 md:py-auto md:space-y-0 z-20">
          <li>
            <Link className="font-bold text-xl" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="font-bold text-xl" to="/topics">
              Topics
            </Link>
          </li>
          <li>
            <Link className="font-bold text-xl" to="/schedule">
              Schedule
            </Link>
          </li>
          <li>
            <Link className="font-bold text-xl" to="/speakers">
              Speakers
            </Link>
          </li>
          <li>
            <Link className="font-bold text-xl" to="/commitee">
              Committee
            </Link>
          </li>
          <li>
            <Link className="font-bold text-xl" to="/sponsers">
              Sponsers
            </Link>
          </li>
          <li>
            <Link className="font-bold text-xl" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="font-bold text-xl" to="/contact">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      <div onClick={showList} className="md:hidden cursor-pointer">
        <FontAwesomeIcon
          className="text-xl"
          icon={!displayList ? faBars : faXmark}
        />
      </div>

      <div className=" lg:block hidden">
        <button className="px-5 py-2 text-white bg-gradient-to-r  from-[#232B69] to-[#66328F] rounded-lg ">
          <Link to="/register">Register Now</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
