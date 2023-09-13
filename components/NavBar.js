import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="md:mx-40 md:pt-6">
      <nav className=" bg-gray-800 rounded-lg ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
          <Link href="#" className="flex items-center ">
            <img
              src="VidSpace_Logo.PNG"
              className="h-16 mr-3"
              alt="VidSpace Logo"
            />
            <span className="self-center text-2xl font-semibold  text-white">
              VidSpace
            </span>
          </Link>
          <div className="w-full block md:w-auto ">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-800">
              <li>
                <Link
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0  hover:text-orange-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="About"
                  className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0  hover:text-orange-500"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="Shop"
                  className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0  hover:text-orange-500"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="Contact"
                  className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0  hover:text-orange-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
