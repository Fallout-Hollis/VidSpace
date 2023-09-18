import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="md:mx-40 md:pt-6">
      <nav className=" bg-gray-800 rounded-lg ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
          <Link href="/" className="flex items-center ">
            <Image
              src="/VidSpace_Logo.png"
              priority={true}
              width={70}
              height={80}
              className=" mr-3"
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
                  href="Login"
                  className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0  hover:text-orange-500"
                >
                  Login
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
