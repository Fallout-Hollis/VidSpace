'use client'
import React, { useState } from "react";

const CollapsibleBar = () => {
  const [isBarOpen, setIsBarOpen] = useState(true);

  const toggleBar = () => {
    setIsBarOpen(!isBarOpen);
  };

  return (
    <div className={` p-4 rounded-lg items-center ${isBarOpen ? "" : "hidden"}`}>
       {/* Chat Bubble */}
          <div className={`bg-purple-600 p-4 rounded-lg ${isBarOpen ? "rounded-bl-none" : "rounded-tl-none"}`}>
              <button
        onClick={toggleBar}
        className="px-4 py-2 my-2 bg-red-600 text-white text-xl rounded-xl text-right "
      >
        X
      </button>
          <p className="text-lg font-bold mb-2 text-white">Welcome to Vidspace!</p>
          <p className="text-white "> We are the best video sharing and viewing app around. With a wide
            range of content and user-friendly interface, Vidspace is your
            one-stop destination for all your video needs. Join our community
            today and start exploring!
          </p>
        </div>
    </div>
  );
};

export default CollapsibleBar;
