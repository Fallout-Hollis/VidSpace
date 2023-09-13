import React from "react";

const Navbar = () => {
  return (
    <div className="md:mx-40 md:pt-6">
      <nav className=" bg-gray-800 rounded-lg ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
          <a href="#" className="flex items-center ">
            <img
              src="VidSpace_Logo.PNG"
              className="h-16 mr-3"
              alt="VidSpace Logo"
            />
            <span className="self-center text-2xl font-semibold  text-white">
              VidSpace
            </span>
          </a>
          <div className="w-full block md:w-auto ">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-800">
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0  hover:text-orange-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="About"
                  className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0  hover:text-orange-500"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="Shop"
                  className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0  hover:text-orange-500"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="Contact"
                  className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0  hover:text-orange-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
