import React from "react";

const DashBoard = () => {
  return (
    <div className="bg-gray-800 text-white rounded-lg w-1/3 shadow-md ml-12 mt-12 h-auto">
      <h2 className="text-3xl font-semibold pb-4 pt-4 mb-4 text-center bg-orange-600 rounded-md">
        Dash Board
      </h2>
      <div className="flex flex-col space-y-4 text-xl ">
        <button className="bg-red-600 text-white py-2 rounded-md hover:bg-yellow-500 transition duration-300 w-1/2 m-auto">
          Upload Video
        </button>
        <button className="bg-red-600 text-white py-2 rounded-md hover:bg-yellow-500 transition duration-300 w-1/2 m-auto">
          Liked Videos
        </button>
        <button className="bg-red-600 text-white py-2 rounded-md hover:bg-yellow-500 transition duration-300 w-1/2 m-auto">
          Saved Videos
        </button>
        <button className="bg-red-600 text-white py-2 rounded-md hover:bg-yellow-500 transition duration-300 w-1/2 m-auto">
          Subscriptions
        </button>
      </div>
    </div>
  );
};

export default DashBoard;
