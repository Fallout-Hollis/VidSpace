import React from "react";
import snek from "../Images/Snek.png";
import thumbnail1 from "../Images/thumbnail1.jpg";

const MainContent = () => {
  return (
    <div className="flex-grow p-4 bg-gray-200">
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <img src={snek} alt="Video Thumbnail" className="h-24 w-32" />
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              There's a Snake in my Hotel
            </h2>
            <p className="text-sm text-gray-500">Blue Art Gaming</p>
            {/* Add more video details */}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <img src={thumbnail1} alt="Video Thumbnail" className="h-24 w-32" />
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              3 Scary Games #99
            </h2>
            <p className="text-sm text-gray-500">Markiplier</p>
            {/* Add more video details */}
          </div>
        </div>

        {/* Add more videos */}
      </div>
    </div>
  );
};

export default MainContent;
