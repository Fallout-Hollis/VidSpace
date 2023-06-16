import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center px-4 py-2 bg-white">
      <p className="text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} VidSpace
      </p>
    </footer>
  );
};

export default Footer;
