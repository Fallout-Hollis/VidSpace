import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-4 ">
      <div className="container mx-auto text-center">
        <p className="text-xs m-4">
          &copy; {new Date().getFullYear()} VidSpace. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
