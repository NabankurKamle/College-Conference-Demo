import { useState } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/fontawesome-free-solid";

const Navbar = () => {
  const [displayList, setDisplayList] = useState(false);

  const showList = () => setDisplayList(!displayList);

  const closeMenu = () => {
    setDisplayList(false);
  };

  return (
    <div
      style={!displayList ? { overflow: "hidden" } : { overflow: "visible" }}
      className="w-[100vw] space-x-3 flex items-center justify-between bg-[#000000a0] fixed top-0 py-4 px-12 sm:overflow-visible backdrop-blur-sm z-50"
    >
      <div className=" ">
        <Link className="text-xl font-bold" to="home">
          <img className="h-[50px]" src="/img/logo.png" alt="" />
        </Link>
      </div>

      <div
        style={!displayList ? { right: "-150px" } : { right: "50px" }}
        className="lg:static absolute top-[81px] transition-all duration-200"
      >
        <ul className="flex w-[150px]  lg:w-auto flex-col lg:flex-row items-center justify-start lg:justify-between lg:space-x-6 space-y-5 lg:py-0 py-5 lg:py-auto lg:space-y-0 z-20 text-white bg-[#000000a0] lg:bg-transparent">
          <li>
            <Link
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="font-bold text-xl cursor-pointer"
              to="home"
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="font-bold text-xl cursor-pointer"
              to="topics"
              onClick={closeMenu}
            >
              Topics
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="font-bold text-xl cursor-pointer"
              to="schedule"
              onClick={closeMenu}
            >
              Schedule
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="font-bold text-xl cursor-pointer"
              to="speakers"
              onClick={closeMenu}
            >
              Speakers
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="font-bold text-xl cursor-pointer"
              to="committee"
              onClick={closeMenu}
            >
              Committee
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="font-bold text-xl cursor-pointer"
              to="sponsers"
              onClick={closeMenu}
            >
              Sponsers
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="font-bold text-xl cursor-pointer"
              to="aboutUs"
              onClick={closeMenu}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="font-bold text-xl cursor-pointer"
              to="contactUS"
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      <div onClick={showList} className="lg:hidden cursor-pointer">
        <FontAwesomeIcon
          className="text-xl"
          icon={!displayList ? faBars : faXmark}
        />
      </div>

      <div className=" lg:block hidden">
        <button className="px-5 py-2 text-white bg-gradient-to-r from-[#AC1400] to-[#FF1E00] font-semibold rounded-lg ">
          <Link to="/register">Register Now</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
