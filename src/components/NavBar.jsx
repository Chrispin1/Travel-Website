import {
  FaBars,
  FaInstagram,
  FaGooglePlusG,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import { BsChatSquareDots } from "react-icons/bs";
import { useState } from "react";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full min-h-[50px] flex absolute z-10 justify-between items-center bg-gray-700/80 text-white">
      <ul className="hidden sm:flex px-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#deals">Deals</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="flex justify-between">
        <FaFacebookF className="mx-4 cursor-pointer" />
        <FaTwitter className="mx-4 cursor-pointer" />
        <FaGooglePlusG className="mx-4 cursor-pointer" />
        <FaInstagram className="mx-4 cursor-pointer" />
      </div>
      <div onClick={handleNav} className="sm:hidden z-10">
        <FaBars size={20} className="mr-4 cursor-pointer" />
      </div>
      <div
        onClick={handleNav}
        className={
          nav
            ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 top-0 left-0 h-screen bg-black/90 w-full px-4 py-7 flex flex-col"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }>
        <ul className="w-full h-full pt-12 text-center">
          <li className="text-2xl py-8">
            <a href="/">Home</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#gallery">Gallery</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#deals">Deals</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
