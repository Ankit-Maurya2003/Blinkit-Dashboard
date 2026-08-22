import React from "react";
import { useState } from "react";

import MobileNavbar from "./components/MobileNavbar";
import Sidebar from "./components/Sidebar";
import LogoutModal from "./components/LogoutModal";

import Dashboard from "./components/Dashboard";
import Categories from "./components/Cate";
import AddCategory from "./components/AddCategory";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";
import Orders from "./components/Orders";
import Users from "./components/Users";
import Settings from "./components/Settings";

const App = () => {
  const [activePage, setActivePage] = useState("Dashboard");
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <MobileNavbar setSidebarOpen={setSidebarOpen} />

      <div
        onClick={() => setSidebarOpen(false)}
        className="w-full h-auto inset-0 bg-green-200 flex"
      >

        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          activePage={activePage}
          setActivePage={setActivePage}
          setShowLogoutModal={setShowLogoutModal}
        />

        <div className="bg-green-200 mt-20 h-screen lg:mt-0 flex-1 min-w-0 overflow-y-auto">

          {activePage === "Dashboard" && (
            <Dashboard setActivePage={setActivePage} />
          )}

          {activePage === "Categories" && (
            <Categories setActivePage={setActivePage} />
          )}

          {activePage === "Add category" && (
            <AddCategory setActivePage={setActivePage} />
          )}

          {activePage === "Product" && (
            <Products setActivePage={setActivePage} />
          )}

          {activePage === "Add Product" && (
            <AddProduct setActivePage={setActivePage} />
          )}

          {activePage === "Orders" && (
            <Orders />
          )}

          {activePage === "Users" && (
            <Users />
          )}

          {activePage === "Settings" && (
            <Settings />
          )}

        </div>
      </div>

      {showLogoutModal && (
        <LogoutModal
          setShowLogoutModal={setShowLogoutModal}
          setActivePage={setActivePage}
        />
      )}
    </>
  );
};

export default App;
