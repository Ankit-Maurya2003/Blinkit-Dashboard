import React from "react";

const MobileNavbar = ({ setSidebarOpen }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-4 lg:hidden bg-green-900 shadow">
      <div className="bg-yellow-300 px-2 py-2 text-xl font-black rounded-xl text-black">
        blinkit
      </div>

      <button
        onClick={() => setSidebarOpen(true)}
        className="text-3xl text-white"
      >
        ☰
      </button>
    </nav>
  );
};

export default MobileNavbar;
