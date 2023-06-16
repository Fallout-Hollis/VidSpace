import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col bg-gray-100">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-2 bg-white">
        <div className="flex items-center">
          {/* YouTube logo */}
          <img
            src="/path/to/your-logo.png"
            alt="YouTube Logo"
            className="h-8 w-auto"
          />
          {/* Search bar */}
          <input
            type="text"
            placeholder="Search"
            className="ml-4 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        {/* User avatar */}
        <div className="flex items-center">
          <img
            src="/path/to/your-avatar.png"
            alt="User Avatar"
            className="h-8 w-8 rounded-full"
          />
        </div>
      </header>

      {/* Main content */}
      <main className="flex flex-row">
        {/* Sidebar */}
        <aside className="w-1/4 p-4 bg-white">{/* Sidebar content */}</aside>

        {/* Video feed */}
        <div className="flex-grow p-4 bg-gray-200">
          {/* Video feed content */}
        </div>
      </main>

      {/* Footer */}
      <footer className="flex items-center justify-center px-4 py-2 bg-white">
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default Home;
