import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-4 pb-20">
      <div className="container mx-auto text-center">
        <p className="text-xs m-4">
          &copy; {new Date().getFullYear()} VidSpace. All rights reserved.
        </p>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="w-full block md:w-auto m-auto ">
            <ul className="font-medium flex flex-col p-12 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 text-xl">
              <li>
                <Link
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0  hover:text-orange-500 "
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
                  href="Login"
                  className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0  hover:text-orange-500"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
