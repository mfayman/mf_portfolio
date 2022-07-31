import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";
import Socials from "../components/Socials";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const myLinks = ["home", "about", "skills", "work", "contact"];

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="logo" style={{ width: "70px" }} />
      </div>
      <ul className="hidden md:flex">
        {
          myLinks.map((linkName) => (
            <li key={linkName}>
              <Link className="hover:text-[#E8A82A] capitalize" to={linkName} smooth={true} duration={500}>
                {linkName}
              </Link>
            </li>
          ))
        }
      </ul>
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      <div className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
        <ul>
          {
            myLinks.map((linkName) => (
              <li key={linkName} className="py-6 text-4xl">
                <Link onClick={handleClick} className="capitalize" to={linkName} smooth={true} duration={500}>
                  {linkName}
                </Link>
              </li>
            ))
          }
        </ul>
        <Socials section="menu" />
      </div>

      <Socials section="page" />
    </div>
  );
};

export default Navbar;
