'use client'
import React, { useState } from "react";

const Login: React.FC = () => {
  const [showLoginForm, setShowLoginForm] = useState<boolean>(false);

  const handleLoginButtonClick = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <>
      <button
        className="px-4 py-2 bg-yellow-600 text-white rounded-lg"
        onClick={handleLoginButtonClick}
      >
        Login
      </button>
      {showLoginForm && (
        <form className="absolute top-16 right-8 bg-white p-4 rounded shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="px-4 py-2 bg-gray-100 border rounded-lg w-full text-purple-600"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Favorite Weekday
            </label>
            <input
              type="text"
              id="text"
              className="px-4 py-2 bg-gray-100 border rounded-lg w-full text-purple-600"
              placeholder="Enter your Favorite Weekday"
            />
          </div>
          <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg">Submit</button>
        </form>
      )}
    </>
  );
};

export default Login;
