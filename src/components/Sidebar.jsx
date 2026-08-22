import React from "react";

import {
  LayoutDashboard,
  Grid2X2,
  Package,
  ShoppingCart,
  Users,
  Settings,
  LogOut,
  Plus,
} from "lucide-react";

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
  activePage,
  setActivePage,
  setShowLogoutModal,
}) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`
        fixed lg:static
        
        left-0 top-0 z-50
        h-dvh w-52 shrink-0
        bg-green-900 shadow-lg
        transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
      `}
    >

      {/* Logo */}
      <div className="flex h-20 items-center gap-4 px-5">
        <div className="bg-yellow-300 px-2 py-2 text-xl font-black rounded-xl text-black">
          blinkit
        </div>
      </div>

      <div className="px-2 pb-2 pt-1 text-md font-medium text-gray-400">
        Pages
      </div>

      <div className="px-1">

        <button
          onClick={() => {
            setActivePage("Dashboard");
            setSidebarOpen(false);
          }}
          className={`flex h-10 w-full items-center gap-4 rounded-lg px-4 text-lg
            ${
              activePage === "Dashboard"
                ? "bg-white text-black"
                : "text-white hover:text-black hover:bg-white"
            }`}
        >
          <LayoutDashboard size={25} />
          Dashboard
        </button>

        <button
          onClick={() => {
            setActivePage("Categories");
            setSidebarOpen(false);
          }}
          className={`flex h-10 w-full items-center gap-4 rounded-lg px-4 text-lg
            ${
              activePage === "Categories"
                ? "bg-white text-black"
                : "text-white hover:text-black hover:bg-white"
            }`}
        >
          <Grid2X2 size={25} />
          Categories
        </button>

        <button
          onClick={() => {
            setActivePage("Add category");
            setSidebarOpen(false);
          }}
          className={`flex h-10 w-full items-center gap-4 rounded-lg px-4 text-lg
            ${
              activePage === "Add category"
                ? "bg-white text-black"
                : "text-white hover:text-black hover:bg-white"
            }`}
        >
          <Plus size={20} />
          Add categories
        </button>

        <button
          onClick={() => {
            setActivePage("Product");
            setSidebarOpen(false);
          }}
          className={`flex h-10 w-full items-center gap-4 rounded-lg px-4 text-lg
            ${
              activePage === "Product"
                ? "bg-white text-black"
                : "text-white hover:text-black hover:bg-white"
            }`}
        >
          <Package size={25} />
          Product
        </button>

        <button
          onClick={() => {
            setActivePage("Add Product");
            setSidebarOpen(false);
          }}
          className={`flex h-10 w-full items-center gap-4 rounded-lg px-4 text-lg
            ${
              activePage === "Add Product"
                ? "bg-white text-black"
                : "text-white hover:text-black hover:bg-white"
            }`}
        >
          <Plus size={20} />
          Add Product
        </button>

        <button
          onClick={() => {
            setActivePage("Orders");
            setSidebarOpen(false);
          }}
          className={`flex h-10 w-full items-center gap-4 rounded-lg px-4 text-lg
            ${
              activePage === "Orders"
                ? "bg-white text-black"
                : "text-white hover:text-black hover:bg-white"
            }`}
        >
          <ShoppingCart size={25} />
          Orders
        </button>

        <button
          onClick={() => {
            setActivePage("Users");
            setSidebarOpen(false);
          }}
          className={`flex h-10 w-full items-center gap-4 rounded-lg px-4 text-lg
            ${
              activePage === "Users"
                ? "bg-white text-black"
                : "text-white hover:text-black hover:bg-white"
            }`}
        >
          <Users size={25} />
          Users
        </button>

        <button
          onClick={() => {
            setActivePage("Settings");
            setSidebarOpen(false);
          }}
          className={`flex h-10 w-full items-center gap-4 rounded-lg px-4 text-lg
            ${
              activePage === "Settings"
                ? "bg-white text-black"
                : "text-white hover:text-black hover:bg-white"
            }`}
        >
          <Settings size={25} />
          Settings
        </button>

      </div>

      <div className="fixed bottom-2 left-2 right-2">
        <button
          onClick={() => setShowLogoutModal(true)}
          className="flex h-10 w-full items-center gap-4 rounded-lg px-4 text-lg text-white hover:text-black hover:bg-white"
        >
          <LogOut size={25} />
          Logout
        </button>
      </div>

    </div>
  );
};

export default Sidebar;
