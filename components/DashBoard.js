import React from "react";

const DashBoard = () => {
  return (
    <div className="bg-gray-800 text-white rounded-lg  md:w-1/3 shadow-md m-auto md:ml-12 mt-12 pb-12">
      <h2 className="text-3xl font-semibold pb-4 pt-4 mb-4 text-center bg-orange-600 rounded-md">
        Quick Menu
      </h2>
      <div className="flex flex-col space-y-4 text-xl ">
        <button className="bg-red-600 text-white py-2 rounded-md hover:bg-yellow-500 transition duration-300 md:w-1/2 m-auto">
          Upload Video
        </button>
        <button className="bg-red-600 text-white py-2 rounded-md hover:bg-yellow-500 transition duration-300 md:w-1/2 m-auto">
          Settings
        </button>
        <button className="bg-red-600 text-white py-2 rounded-md hover:bg-yellow-500 transition duration-300 md:w-1/2 m-auto">
          Subscriptions
        </button>
        <button className="bg-red-600 text-white py-2 rounded-md hover:bg-yellow-500 transition duration-300 md:w-1/2 m-auto">
          Notifications
        </button>
      </div>
    </div>
  );
};

export default DashBoard;
