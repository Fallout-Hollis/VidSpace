import React from "react";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import logo from "../Images/VidSpace.png";
import doggo from "../Images/doggo.jpg";

const Home = () => {
  return (
    <div className="flex flex-col bg-gray-100">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-2 bg-white">
        <div className="flex items-center">
          {/* VidSpace logo */}
          <img src={logo} alt="VidSpace Logo" className="h-16 w-auto" />
          {/* Search bar */}
          <input
            type="text"
            placeholder="Search"
            className="ml-4 px-6 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        {/* User avatar */}
        <div className="flex items-center">
          <img
            src={doggo}
            alt="User Avatar"
            className="h-16 w-16 rounded-full"
          />
        </div>
      </header>

      {/* Main content */}
      <main className="flex flex-row">
        <Sidebar />
        <MainContent />
      </main>

      {/* Footer */}
      <footer className="flex items-center justify-center px-4 py-2 bg-white">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
