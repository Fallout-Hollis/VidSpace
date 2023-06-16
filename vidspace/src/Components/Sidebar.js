import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-1/4 p-4 bg-white">
      <ul className="space-y-2">
        <li className="flex items-center space-x-2">
          <span className="text-gray-800">Home</span>
        </li>
        <li className="flex items-center space-x-2">
          <span className="text-gray-800">Explore</span>
        </li>
        {/* Add more sidebar items */}
      </ul>
    </aside>
  );
};

export default Sidebar;
