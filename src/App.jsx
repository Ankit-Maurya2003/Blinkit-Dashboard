import React from 'react'
import { useState } from 'react';
import {
  LayoutDashboard,
  Grid2X2,
  Package,
  ShoppingCart,
  Users,
  Settings,
  LogOut,
  Search,
  ChevronDown,
  MoreVertical,
  Pencil,
  Trash2,
  Plus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", sales: 100 },
  { month: "Feb", sales: 150 },
  { month: "Mar", sales: 120 },
  { month: "Apr", sales: 200 },
  { month: "May", sales: 250 },
];
const App = () => {
   const [activePage, setActivePage] = useState("Dashboard");
   const [showLogoutModal, setShowLogoutModal] = useState(false);
   const [sidebarOpen, setSidebarOpen] = useState(false);
 


  return (
    <>
 
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

  <div className=' w-full bg-green-200  flex'>
   

<div
  className={`
    fixed lg:static
    left-0 top-0 z-50
    h-screen w-52 shrink-0
    bg-green-900 shadow-lg
    transition-transform duration-300
    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
    lg:translate-x-0
  `}
>



      {/* Logo */}
      <div className="flex h-20 items-center gap-4 px-5">
        <div onClick={()=>setDash(false)} className="bg-yellow-300 px-2 py-2 text-xl font-black rounded-xl text-black">
          blinkit
        </div>

        <span className="text-xl font-medium text-white">
          {name} 
        </span>
      </div>

    
      <div className="px-2 pb-2 pt-1 text-md font-medium text-gray-400">
        Pages
      </div>

    <div className='px-1'>
       <button
  onClick={() => {setActivePage("Dashboard"),setSidebarOpen(false)}}
  className={`flex h-10 w-full items-center gap-4 rounded-lg px-4 text-lg
    ${activePage === "Dashboard"
      ? "bg-white text-black"
      : "text-white hover:text-black hover:bg-white"
    }`}
>
  <LayoutDashboard size={25} />
  Dashboard
</button>

        <button
  onClick={() => {setActivePage("Categories"),setSidebarOpen(false)}}
  className={`flex h-10 w-full items-center gap-4 rounded-lg px-4 text-lg
    ${activePage === "Categories"
      ? "bg-white text-black"
      : "text-white hover:text-black hover:bg-white"
    }`}
>
  <Grid2X2 size={25} />
  Categories
</button>
<button
  onClick={() => {setActivePage("Add category"),setSidebarOpen(false)}}
  className={`flex h-10 w-full items-center gap-4 rounded-lg px-4 text-lg
    ${activePage === "Add category"
      ? "bg-white text-black"
      : "text-white hover:text-black hover:bg-white"
    }`}
>
<Plus size={20} />
  Add categories
</button>

       <button
  onClick={() => {setActivePage("Product"),setSidebarOpen(false)}}
  className={`flex h-10 w-full items-center gap-4 rounded-lg px-4 text-lg
    ${activePage === "Product"
      ? "bg-white text-black"
      : "text-white hover:text-black hover:bg-white"
    }`}
>
  <Package size={25} />
  Product
</button>
<button
  onClick={() => {setActivePage("Add Product"),setSidebarOpen(false)}}
  className={`flex h-10 w-full items-center gap-4 rounded-lg px-4 text-lg
    ${activePage === "Add Product"
      ? "bg-white text-black"
      : "text-white hover:text-black hover:bg-white"
    }`}
>
  <Plus size={20} />
  Add Product
</button>

        <button
  onClick={() => {setActivePage("Orders"),setSidebarOpen(false)}}
  className={`flex h-10 w-full items-center gap-4 rounded-lg px-4 text-lg
    ${activePage === "Orders"
      ? "bg-white text-black"
      : "text-white hover:text-black hover:bg-white"
    }`}
>
  <ShoppingCart size={25} />
  Orders
</button>

        <button
  onClick={() => {setActivePage("Users"),setSidebarOpen(false)}}
  className={`flex h-10 w-full items-center gap-4 rounded-lg px-4 text-lg
    ${activePage === "Users"
      ? "bg-white text-black"
      : "text-white hover:text-black hover:bg-white"
    }`}
>
  <Users size={25} />
  Users
</button>
<button
  onClick={() => {setActivePage("Settings"),setSidebarOpen(false)}}
  className={`flex h-10 w-full items-center gap-4 rounded-lg px-4 text-lg
    ${activePage === "Settings"
      ? "bg-white text-black"
      : "text-white hover:text-black hover:bg-white"
    }`}
>
  <Settings size={25} />
  Settings
</button>

        
    </div>

    
      <div className="absolute bottom-2 left-2 right-2 ">
<button
  onClick={() => setShowLogoutModal(true)}
  className="flex h-10  w-full items-center gap-4 rounded-lg px-4 text-lg text-white hover:text-black hover:bg-white"
>
  <LogOut size={25} />
  Logout
</button>

      </div>
    




           </div>
          <div className="bg-green-200 mt-20 lg:mt-0  h-screen flex-1  min-w-0  p-8 overflow-y-auto">

 {activePage === "Dashboard" && (
  <div className="min-h-screen w-full  p-6">

    {/* Dashboard Header */}
    <div className="sm:flex  items-center justify-between mb-6">

      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Dashboard
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Overview of your store
        </p>
      </div>

      <div className="sm:flex items-center gap-4">

        {/* Search */}
        <div className="flex my-5 sm:my-0 items-center gap-2 bg-white border rounded-lg px-3 py-2 w-auto">
          <Search size={17} className="text-gray-400" />

          <input
            type="text"
            placeholder="Search anything..."
            className="outline-none text-sm w-full"
          />
        </div>

        {/* Admin */}
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-green-700 text-white flex items-center justify-center font-bold">
            A
          </div>

          <div>
            <p className="text-sm font-semibold">{name}</p>
            <p className="text-xs text-gray-400">Administrator</p>
          </div>

          <ChevronDown size={16} />
        </div>

      </div>
    </div>


    {/* Statistics Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

   
      <div onClick={()=>setActivePage("Categories")} className="bg-white border border-purple-100 rounded-xl p-5">
        <div className="flex items-center justify-between">

          <div>
            <p className="text-sm text-gray-500">
              Total Categories
            </p>

            <h2 className="text-2xl font-bold mt-2">
              36
            </h2>
          </div>

          <div className="h-11 w-11 rounded-lg bg-purple-100 flex items-center justify-center">
            <Grid2X2
              size={22}
              className="text-purple-600"
            />
          </div>

        </div>
      </div>

      <div onClick={()=>setActivePage("Product")} className="bg-white border border-orange-100 rounded-xl p-5">
        <div className="flex items-center justify-between">

          <div>
            <p className="text-sm text-gray-500">
              Total Products
            </p>

            <h2 className="text-2xl font-bold mt-2">
              1,248
            </h2>
          </div>

          <div className="h-11 w-11 rounded-lg bg-orange-100 flex items-center justify-center">
            <Package
              size={22}
              className="text-orange-500"
            />
          </div>

        </div>
      </div>


      <div onClick={()=> setActivePage("Orders")} className="bg-white border border-red-100 rounded-xl p-5">
        <div className="flex items-center justify-between">

          <div>
            <p className="text-sm text-gray-500">
              Total Orders
            </p>

            <h2 className="text-2xl font-bold mt-2">
              5,862
            </h2>
          </div>

          <div className="h-11 w-11 rounded-lg bg-red-100 flex items-center justify-center">
            <ShoppingCart
              size={22}
              className="text-red-500"
            />
          </div>

        </div>
      </div>


      {/* Users */}
      <div onClick={()=>setActivePage("Users")} className="bg-white border border-blue-100 rounded-xl p-5">
        <div className="flex items-center justify-between">

          <div>
            <p className="text-sm text-gray-500">
              Total Users
            </p>

            <h2 className="text-2xl font-bold mt-2">
              2,356
            </h2>
          </div>

          <div className="h-11 w-11 rounded-lg bg-blue-100 flex items-center justify-center">
            <Users
              size={22}
              className="text-blue-500"
            />
          </div>

        </div>
      </div>

    </div>


    {/* Middle Section */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5  mt-6">

      {/* Orders Overview */}
      <div className="lg:col-span-2 bg-white rounded-xl overflow-x-auto border h-auto p-10">

        <div className="sm:flex items-center  justify-between mb-5">

          <div>
            <h2 className="font-bold text-gray-800">
              Orders Overview
            </h2>

            <p className="text-xs text-gray-400 mt-1">
              Order statistics
            </p>
          </div>

          <select className="border rounded-lg px-3 sm:mt-0 mt-2 py-2 text-xs outline-none">
            <option>This Month</option>
            <option>Last Month</option>
            <option>This Year</option>
          </select>

        </div>


        {/* Fake Chart */}
         <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="month" />

        <YAxis />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="sales"
          stroke="#4f46e5"
        />
      </LineChart>
      
      </div>


   
      <div className="bg-white rounded-xl border p-5">

        <div className="flex items-center justify-between mb-5">

          <h2 className="font-bold text-gray-800">
            Top Categories
          </h2>

          <button onClick={()=>setActivePage("Categories")}  className="text-xs text-gray-400 hover:text-blue-400">
            View All
          </button>

        </div>


        <div className="space-y-5">

          <div className="flex justify-between">
            <div className="flex gap-2">
              <span>🍊</span>
              <span className="text-sm">
                Fruits & Vegetables
              </span>
            </div>

            <span className="text-sm font-semibold">
              1,248
            </span>
          </div>


          <div className="flex justify-between">
            <div className="flex gap-2">
              <span>🍞</span>
              <span className="text-sm">
                Dairy & Bread
              </span>
            </div>

            <span className="text-sm font-semibold">
              982
            </span>
          </div>


          <div className="flex justify-between">
            <div className="flex gap-2">
              <span>🍪</span>
              <span className="text-sm">
                Snacks & Munchies
              </span>
            </div>

            <span className="text-sm font-semibold">
              753
            </span>
          </div>


          <div className="flex justify-between">
            <div className="flex gap-2">
              <span>🥤</span>
              <span className="text-sm">
                Beverages
              </span>
            </div>

            <span className="text-sm font-semibold">
              642
            </span>
          </div>


          <div className="flex justify-between">
            <div className="flex gap-2">
              <span>🧴</span>
              <span className="text-sm">
                Personal Care
              </span>
            </div>

            <span className="text-sm font-semibold">
              512
            </span>
          </div>

        </div>

      </div>

    </div>


    <div className="bg-white border rounded-xl mt-6 p-5">

      <div className="flex items-center overflow-x-auto justify-between mb-5">

        <h2 className="font-bold text-gray-800">
          Recent Orders
        </h2>

        <button onClick={()=>setActivePage("Orders")}  className="text-xs border rounded-lg px-3 py-2">
          View All Orders
        </button>

      </div>


      <div className="overflow-x-auto">

        <table className="w-full text-sm">

          <thead>
            <tr className="border-b text-center text-gray-400">
              <th className="py-3">Order ID</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>

            <tr className="border-b">
              <td className="py-4 font-medium">
                #ORD-1024
              </td>

              <td>Rahul Kumar</td>

              <td>₹1,250</td>

              <td>
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs">
                  Delivered
                </span>
              </td>

              <td className="text-gray-500">
                12 May 2026
              </td>
            </tr>


            <tr className="border-b">
              <td className="py-4 font-medium">
                #ORD-1023
              </td>

              <td>Aman Sharma</td>

              <td>₹850</td>

              <td>
                <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-xs">
                  Pending
                </span>
              </td>

              <td className="text-gray-500">
                11 May 2026
              </td>
            </tr>


            <tr>
              <td className="py-4 font-medium">
                #ORD-1022
              </td>

              <td>Priya Singh</td>

              <td>₹2,450</td>

              <td>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs">
                  Processing
                </span>
              </td>

              <td className="text-gray-500">
                10 May 2026
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>

  </div>
)}

  {activePage === "Categories" && (
  <div className="min-h-screen p-2 md:p-6">

    {/* Header */}
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Category Management
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Manage your store categories
        </p>
      </div>

      <button onClick={()=>setActivePage("Add category")} 
        className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg font-medium transition"
      >
        <Plus size={18} />
        Add Category
      </button>

    </div>


    {/* Main Card */}
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm">

      {/* Search */}
      <div className="p-4 md:p-5 border-b">

        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 w-full md:w-80">

          <Search
            size={18}
            className="text-gray-400 shrink-0"
          />

          <input
            type="text"
            placeholder="Search category..."
            className="bg-transparent outline-none w-full text-sm text-gray-700 placeholder-gray-400"
          />

        </div>

      </div>


      {/* Table */}
      <div className="overflow-x-auto">

        <table className="w-full  text-sm">

          <thead>
            <tr className="border-b bg-gray-50 text-left">

              <th className="px-5 py-4 font-semibold text-gray-500">
                Category Name
              </th>

              <th className="px-5 py-4 font-semibold text-gray-500">
                Icon
              </th>

              <th className="px-5 py-4 font-semibold text-gray-500">
                Status
              </th>

              <th className="px-5 py-4 font-semibold text-gray-500">
                Products
              </th>

              <th className="px-5 py-4 font-semibold text-gray-500 text-center">
                Actions
              </th>

            </tr>
          </thead>


          <tbody>

            {/* Fruits & Vegetables */}
            <tr className="border-b hover:bg-gray-50 transition">

              <td className="px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-xl">
                    🍎
                  </div>

                  <span className="font-medium text-gray-800">
                    Fruits & Vegetables
                  </span>
                </div>
              </td>

              <td className="px-5 py-4">
                <span className="w-9 h-9 rounded-lg bg-green-50 flex items-center justify-center text-lg">
                  🍎
                </span>
              </td>

              <td className="px-5 py-4">
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium">
                  Active
                </span>
              </td>

              <td className="px-5 py-4 font-medium text-gray-700">
                248
              </td>

              <td className="px-5 py-4">
                <div className="flex justify-center gap-3">

                  <button className="text-gray-500 hover:text-green-600">
                    <Pencil size={17} />
                  </button>

                  <button className="text-gray-500 hover:text-red-500">
                    <Trash2 size={17} />
                  </button>

                </div>
              </td>

            </tr>


            {/* Dairy & Bread */}
            <tr className="border-b hover:bg-gray-50 transition">

              <td className="px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-xl">
                    🍞
                  </div>

                  <span className="font-medium text-gray-800">
                    Dairy & Bread
                  </span>
                </div>
              </td>

              <td className="px-5 py-4">
                <span className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center text-lg">
                  🍞
                </span>
              </td>

              <td className="px-5 py-4">
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium">
                  Active
                </span>
              </td>

              <td className="px-5 py-4 font-medium text-gray-700">
                162
              </td>

              <td className="px-5 py-4">
                <div className="flex justify-center gap-3">
                  <button className="text-gray-500 hover:text-green-600">
                    <Pencil size={17} />
                  </button>

                  <button className="text-gray-500 hover:text-red-500">
                    <Trash2 size={17} />
                  </button>
                </div>
              </td>

            </tr>


            {/* Snacks */}
            <tr className="border-b hover:bg-gray-50 transition">

              <td className="px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-xl">
                    🍪
                  </div>

                  <span className="font-medium text-gray-800">
                    Snacks & Munchies
                  </span>
                </div>
              </td>

              <td className="px-5 py-4">
                <span className="w-9 h-9 rounded-lg bg-purple-50 flex items-center justify-center text-lg">
                  🍪
                </span>
              </td>

              <td className="px-5 py-4">
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium">
                  Active
                </span>
              </td>

              <td className="px-5 py-4 font-medium text-gray-700">
                214
              </td>

              <td className="px-5 py-4">
                <div className="flex justify-center gap-3">
                  <button className="text-gray-500 hover:text-green-600">
                    <Pencil size={17} />
                  </button>

                  <button className="text-gray-500 hover:text-red-500">
                    <Trash2 size={17} />
                  </button>
                </div>
              </td>

            </tr>


            {/* Beverages */}
            <tr className="border-b hover:bg-gray-50 transition">

              <td className="px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-xl">
                    🥤
                  </div>

                  <span className="font-medium text-gray-800">
                    Beverages
                  </span>
                </div>
              </td>

              <td className="px-5 py-4">
                <span className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-lg">
                  🥤
                </span>
              </td>

              <td className="px-5 py-4">
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium">
                  Active
                </span>
              </td>

              <td className="px-5 py-4 font-medium text-gray-700">
                189
              </td>

              <td className="px-5 py-4">
                <div className="flex justify-center gap-3">
                  <button className="text-gray-500 hover:text-green-600">
                    <Pencil size={17} />
                  </button>

                  <button className="text-gray-500 hover:text-red-500">
                    <Trash2 size={17} />
                  </button>
                </div>
              </td>

            </tr>


            {/* Personal Care */}
            <tr className="border-b hover:bg-gray-50 transition">

              <td className="px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-pink-100 flex items-center justify-center text-xl">
                    🧴
                  </div>

                  <span className="font-medium text-gray-800">
                    Personal Care
                  </span>
                </div>
              </td>

              <td className="px-5 py-4">
                <span className="w-9 h-9 rounded-lg bg-pink-50 flex items-center justify-center text-lg">
                  🧴
                </span>
              </td>

              <td className="px-5 py-4">
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium">
                  Active
                </span>
              </td>

              <td className="px-5 py-4 font-medium text-gray-700">
                128
              </td>

              <td className="px-5 py-4">
                <div className="flex justify-center gap-3">
                  <button className="text-gray-500 hover:text-green-600">
                    <Pencil size={17} />
                  </button>

                  <button className="text-gray-500 hover:text-red-500">
                    <Trash2 size={17} />
                  </button>
                </div>
              </td>

            </tr>


            {/* Household */}
            <tr className="hover:bg-gray-50 transition">

              <td className="px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center text-xl">
                    🧹
                  </div>

                  <span className="font-medium text-gray-800">
                    Household
                  </span>
                </div>
              </td>

              <td className="px-5 py-4">
                <span className="w-9 h-9 rounded-lg bg-cyan-50 flex items-center justify-center text-lg">
                  🧹
                </span>
              </td>

              <td className="px-5 py-4">
                <span className="bg-red-100 text-red-500 px-3 py-1 rounded-full text-xs font-medium">
                  Inactive
                </span>
              </td>

              <td className="px-5 py-4 font-medium text-gray-700">
                87
              </td>

              <td className="px-5 py-4">
                <div className="flex justify-center gap-3">
                  <button className="text-gray-500 hover:text-green-600">
                    <Pencil size={17} />
                  </button>

                  <button className="text-gray-500 hover:text-red-500">
                    <Trash2 size={17} />
                  </button>
                </div>
              </td>

            </tr>

          </tbody>

        </table>

      </div>


      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-5 py-4 border-t">

        <p className="text-sm text-gray-500">
          Showing <span className="font-medium text-gray-700">1</span> to{" "}
          <span className="font-medium text-gray-700">6</span> of{" "}
          <span className="font-medium text-gray-700">36</span> categories
        </p>


        <div className="flex items-center gap-1">

          <button className="w-9 h-9 flex items-center justify-center rounded-lg border text-gray-400 hover:bg-gray-100">
            <ChevronLeft size={17} />
          </button>

          <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-green-600 text-white font-medium">
            1
          </button>

          <button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100">
            2
          </button>

          <button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100">
            3
          </button>

          <button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100">
            4
          </button>

          <button className="w-9 h-9 flex items-center justify-center rounded-lg border text-gray-600 hover:bg-gray-100">
            <ChevronRight size={17} />
          </button>

        </div>

      </div>

    </div>

  </div>
)}
{activePage === "Add category" && (
  <div className="min-h-screen p-2 md:p-6">

    {/* Back */}
    <p onClick={()=>setActivePage("Categories")}  className="text-xs text-gray-500 mb-2">
      ← Back to Categories
    </p>

    {/* Heading */}
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-gray-800">
        Add New Category
      </h1>

      <p className="text-sm text-gray-500 mt-1">
        Add a new category to organize your products
      </p>
    </div>

    {/* Content */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

      {/* Left Form */}
      <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">

        {/* Category Name */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category Name *
          </label>

          <input
            type="text"
            placeholder="Enter category name"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-green-500"
          />
        </div>

        {/* Icon */}
        <div className="mb-6">

          <label className="block text-sm font-medium text-gray-700 mb-1">
            Icon
          </label>

          <p className="text-xs text-gray-400 mb-3">
            Choose an icon
          </p>

          <div className="flex gap-3 flex-wrap">

            <button className="w-11 h-11 rounded-lg border-2 border-green-500 bg-green-50 text-xl">
              🥬
            </button>

            <button className="w-11 h-11 rounded-lg border border-gray-200 bg-white text-xl">
              🍎
            </button>

            <button className="w-11 h-11 rounded-lg border border-gray-200 bg-white text-xl">
              🍞
            </button>

            <button className="w-11 h-11 rounded-lg border border-gray-200 bg-white text-xl">
              🍪
            </button>

            <button className="w-11 h-11 rounded-lg border border-gray-200 bg-white text-xl">
              🥤
            </button>

            <button className="w-11 h-11 rounded-lg border border-gray-200 bg-white text-xl">
              🧴
            </button>

            <button className="w-11 h-11 rounded-lg border border-gray-200 bg-white text-xl">
              🧹
            </button>

            <button className="w-11 h-11 rounded-lg border border-gray-200 bg-white text-xl text-gray-400">
              +
            </button>

          </div>
        </div>

        {/* Status */}
        <div className="mb-8">

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Status
          </label>

          <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none bg-white">
            <option>Active</option>
            <option>Inactive</option>
          </select>

        </div>

        {/* Buttons */}
        <div className="flex gap-3">

          <button className="bg-green-600 hover:bg-green-700 text-white px-7 py-2.5 rounded-lg text-sm font-medium">
            Save Category
          </button>

          <button className="border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 px-6 py-2.5 rounded-lg text-sm font-medium">
            Cancel
          </button>

        </div>

      </div>


      {/* Right Preview */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 h-fit">

        <h2 className="text-sm font-semibold text-gray-700 mb-6">
          Preview
        </h2>

        <div className="flex flex-col items-center justify-center py-8">

          {/* Icon */}
          <div className="w-20 h-20 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center text-4xl mb-4">
            🥬
          </div>

          {/* Name */}
          <h3 className="text-base font-semibold text-gray-800">
            Category Name
          </h3>

          {/* Status */}
          <span className="mt-3 bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium">
            Active
          </span>

          <p className="text-xs text-gray-400 text-center mt-5">
            This is how your category will appear
          </p>

        </div>

      </div>

    </div>

  </div>
)}

{showLogoutModal && (
  <div
    className="fixed inset-0 z-400 flex items-center justify-center bg-black/50 px-4"
    onClick={() => setShowLogoutModal(false)}
  >
    <div
      className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center justify-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
          <LogOut size={28} className="text-red-600" />
        </div>
      </div>

      <h2 className="mt-4 text-center text-xl font-bold text-gray-800">
        Confirm Logout
      </h2>

      <p className="mt-2 text-center text-sm text-gray-500">
        Are you sure you want to logout?
        <br />
        You will need to login again to access your account.
      </p>

      <div className="mt-6 flex gap-3">
        <button
          onClick={() => setShowLogoutModal(false)}
          className="w-full rounded-lg border border-gray-300 bg-white py-3 font-medium text-gray-700 hover:bg-gray-100"
        >
          Cancel
        </button>

        <button
          onClick={() => {
            setShowLogoutModal(false);
           setActivePage("Dashboard")
           
          }}
          className="w-full rounded-lg bg-red-600 py-3 font-medium text-white hover:bg-red-700"
        >
          Yes, Logout
        </button>
      </div>
    </div>
  </div>
)}


  {activePage === "Product" && (
  <div className="min-h-screen p-2 md:p-6">

    {/* Header */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Product Management
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Manage your store products
        </p>
      </div>

      <button
        onClick={() => setActivePage("Add Product")}
        className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg font-medium transition"
      >
        <Plus size={18} />
        Add Product
      </button>

    </div>


    {/* Main Card */}
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

      {/* Filters */}
      <div className="p-4 md:p-5 border-b">

        <div className="flex flex-col lg:flex-row gap-3">

          {/* Search */}
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 flex-1">

            <Search
              size={18}
              className="text-gray-400 shrink-0"
            />

            <input
              type="text"
              placeholder="Search product..."
              className="bg-transparent outline-none w-full text-sm text-gray-700 placeholder-gray-400"
            />

          </div>


          {/* Category */}
          <div className="relative">

            <select
              className="appearance-none bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 pr-10 text-sm text-gray-600 outline-none w-full lg:w-44"
            >
              <option>All Categories</option>
              <option>Fruits & Vegetables</option>
              <option>Dairy & Bread</option>
              <option>Snacks & Munchies</option>
              <option>Beverages</option>
              <option>Personal Care</option>
            </select>

            <ChevronDown
              size={16}
              className="absolute right-3 top-3 text-gray-400 pointer-events-none"
            />

          </div>


          {/* Status */}
          <div className="relative">

            <select
              className="appearance-none bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 pr-10 text-sm text-gray-600 outline-none w-full lg:w-36"
            >
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>

            <ChevronDown
              size={16}
              className="absolute right-3 top-3 text-gray-400 pointer-events-none"
            />

          </div>


          {/* Filter */}
          <button
            className="flex items-center justify-center gap-2 border border-gray-200 bg-white hover:bg-gray-50 rounded-lg px-4 py-2.5 text-sm text-gray-600"
          >
            <span>☷</span>
            Filter
          </button>

        </div>

      </div>


      {/* Product Table */}
      <div className="overflow-x-auto">

        <table className="w-full text-sm">

          <thead>
            <tr className="border-b bg-gray-50 text-left">

              <th className="px-5 py-4 font-semibold text-gray-500">
                Product Name
              </th>

              <th className="px-5 py-4 font-semibold text-gray-500">
                Category
              </th>

              <th className="px-5 py-4 font-semibold text-gray-500">
                Price
              </th>

              <th className="px-5 py-4 font-semibold text-gray-500">
                Stock
              </th>

              <th className="px-5 py-4 font-semibold text-gray-500">
                Status
              </th>

              <th className="px-5 py-4 font-semibold text-gray-500 text-center">
                Actions
              </th>

            </tr>
          </thead>


          <tbody>

            {/* Apple */}
            <tr className="border-b hover:bg-gray-50 transition">

              <td className="px-5 py-3.5">
                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-2xl">
                    🍎
                  </div>

                  <span className="font-medium text-gray-800">
                    Apple - Red
                  </span>

                </div>
              </td>

              <td className="px-5 py-3.5 text-gray-600">
                Fruits & Vegetables
              </td>

              <td className="px-5 py-3.5 font-medium text-gray-700">
                ₹120/kg
              </td>

              <td className="px-5 py-3.5 text-gray-700">
                120
              </td>

              <td className="px-5 py-3.5">
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium">
                  Active
                </span>
              </td>

              <td className="px-5 py-3.5">
                <div className="flex justify-center gap-3">

                  <button
                    className="text-gray-400 hover:text-green-600 transition"
                    title="Edit"
                  >
                    <Pencil size={16} />
                  </button>

                  <button
                    className="text-gray-400 hover:text-red-500 transition"
                    title="Delete"
                  >
                    <Trash2 size={16} />
                  </button>

                </div>
              </td>

            </tr>


            {/* Milk */}
            <tr className="border-b hover:bg-gray-50 transition">

              <td className="px-5 py-3.5">
                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-2xl">
                    🥛
                  </div>

                  <span className="font-medium text-gray-800">
                    Milk - Toned 1L
                  </span>

                </div>
              </td>

              <td className="px-5 py-3.5 text-gray-600">
                Dairy & Bread
              </td>

              <td className="px-5 py-3.5 font-medium text-gray-700">
                ₹56
              </td>

              <td className="px-5 py-3.5 text-gray-700">
                80
              </td>

              <td className="px-5 py-3.5">
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium">
                  Active
                </span>
              </td>

              <td className="px-5 py-3.5">
                <div className="flex justify-center gap-3">

                  <button className="text-gray-400 hover:text-green-600">
                    <Pencil size={16} />
                  </button>

                  <button className="text-gray-400 hover:text-red-500">
                    <Trash2 size={16} />
                  </button>

                </div>
              </td>

            </tr>


            {/* Lays */}
            <tr className="border-b hover:bg-gray-50 transition">

              <td className="px-5 py-3.5">
                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-lg bg-yellow-50 flex items-center justify-center text-2xl">
                    🥔
                  </div>

                  <span className="font-medium text-gray-800">
                    Lay's Classic Salted
                  </span>

                </div>
              </td>

              <td className="px-5 py-3.5 text-gray-600">
                Snacks & Munchies
              </td>

              <td className="px-5 py-3.5 font-medium text-gray-700">
                ₹20
              </td>

              <td className="px-5 py-3.5 text-gray-700">
                200
              </td>

              <td className="px-5 py-3.5">
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium">
                  Active
                </span>
              </td>

              <td className="px-5 py-3.5">
                <div className="flex justify-center gap-3">

                  <button className="text-gray-400 hover:text-green-600">
                    <Pencil size={16} />
                  </button>

                  <button className="text-gray-400 hover:text-red-500">
                    <Trash2 size={16} />
                  </button>

                </div>
              </td>

            </tr>


            {/* Coca Cola */}
            <tr className="border-b hover:bg-gray-50 transition">

              <td className="px-5 py-3.5">
                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-2xl">
                    🥤
                  </div>

                  <span className="font-medium text-gray-800">
                    Coca Cola 1.5L
                  </span>

                </div>
              </td>

              <td className="px-5 py-3.5 text-gray-600">
                Beverages
              </td>

              <td className="px-5 py-3.5 font-medium text-gray-700">
                ₹75
              </td>

              <td className="px-5 py-3.5 text-gray-700">
                150
              </td>

              <td className="px-5 py-3.5">
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium">
                  Active
                </span>
              </td>

              <td className="px-5 py-3.5">
                <div className="flex justify-center gap-3">

                  <button className="text-gray-400 hover:text-green-600">
                    <Pencil size={16} />
                  </button>

                  <button className="text-gray-400 hover:text-red-500">
                    <Trash2 size={16} />
                  </button>

                </div>
              </td>

            </tr>


            {/* Dove */}
            <tr className="hover:bg-gray-50 transition">

              <td className="px-5 py-3.5">
                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-2xl">
                    🧼
                  </div>

                  <span className="font-medium text-gray-800">
                    Dove Soap
                  </span>

                </div>
              </td>

              <td className="px-5 py-3.5 text-gray-600">
                Personal Care
              </td>

              <td className="px-5 py-3.5 font-medium text-gray-700">
                ₹45
              </td>

              <td className="px-5 py-3.5 text-gray-700">
                90
              </td>

              <td className="px-5 py-3.5">
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium">
                  Active
                </span>
              </td>

              <td className="px-5 py-3.5">
                <div className="flex justify-center gap-3">

                  <button className="text-gray-400 hover:text-green-600">
                    <Pencil size={16} />
                  </button>

                  <button className="text-gray-400 hover:text-red-500">
                    <Trash2 size={16} />
                  </button>

                </div>
              </td>

            </tr>

          </tbody>

        </table>

      </div>


      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-5 py-4 border-t">

        <p className="text-sm text-gray-500">
          Showing{" "}
          <span className="font-medium text-gray-700">
            1
          </span>{" "}
          to{" "}
          <span className="font-medium text-gray-700">
            5
          </span>{" "}
          of{" "}
          <span className="font-medium text-gray-700">
            1,248
          </span>{" "}
          products
        </p>


        <div className="flex items-center gap-1">

          <button
            className="w-9 h-9 flex items-center justify-center rounded-lg border text-gray-400 hover:bg-gray-100"
          >
            <ChevronLeft size={17} />
          </button>

          <button
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-green-600 text-white font-medium"
          >
            1
          </button>

          <button
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100"
          >
            2
          </button>

          <button
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100"
          >
            3
          </button>

          <button
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100"
          >
            4
          </button>

          <button
            className="w-9 h-9 flex items-center justify-center rounded-lg border text-gray-600 hover:bg-gray-100"
          >
            <ChevronRight size={17} />
          </button>

        </div>

      </div>

    </div>

  </div>
)}

{activePage === "Add Product" && (
  <div className="min-h-screen p-2 md:p-6">

    {/* Back */}
    <button
      onClick={() => {setActivePage("Product"),setActivePage("Product")} }
      className="text-xs text-gray-500 hover:text-green-600 mb-2"
    >
      ← Back to Products
    </button>

    {/* Heading */}
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-gray-800">
        Add New Product
      </h1>

      <p className="text-sm text-gray-500 mt-1">
        Add a new product to your store
      </p>
    </div>

    {/* Content */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

      {/* Left Form */}
      <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">

        {/* Product Name */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Product Name *
          </label>

          <input
            type="text"
            placeholder="Enter product name"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-green-500"
          />
        </div>

        {/* Category */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category *
          </label>

          <select
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none bg-white focus:border-green-500"
          >
            <option value="">Select category</option>
            <option>Fruits & Vegetables</option>
            <option>Dairy & Bread</option>
            <option>Snacks & Munchies</option>
            <option>Beverages</option>
            <option>Personal Care</option>
            <option>Household</option>
          </select>
        </div>

        {/* Price + Stock */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price *
            </label>

            <div className="relative">
              <span className="absolute left-4 top-3 text-gray-500">
                ₹
              </span>

              <input
                type="number"
                placeholder="Enter price"
                className="w-full border border-gray-200 rounded-lg pl-9 pr-4 py-3 text-sm outline-none focus:border-green-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Stock *
            </label>

            <input
              type="number"
              placeholder="Enter stock quantity"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-green-500"
            />
          </div>

        </div>

        {/* Weight */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Weight / Quantity
          </label>

          <input
            type="text"
            placeholder="Example: 1 kg, 500 g, 1 L"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-green-500"
          />
        </div>

        {/* Description */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>

          <textarea
            rows="4"
            placeholder="Enter product description"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none resize-none focus:border-green-500"
          />
        </div>

        {/* Product Image */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Product Image
          </label>

          <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-green-400 transition">

            <div className="text-4xl mb-3">
              📦
            </div>

            <p className="text-sm font-medium text-gray-700">
              Upload product image
            </p>

            <p className="text-xs text-gray-400 mt-1">
              PNG, JPG or JPEG
            </p>

            <input
              type="file"
              accept="image/*"
              className="mt-4 text-sm"
            />

          </div>
        </div>

        {/* Status */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Status
          </label>

          <select
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none bg-white"
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">

          <button
            onClick={() => setActivePage("Product")}
            className="bg-green-600 hover:bg-green-700 text-white px-7 py-2.5 rounded-lg text-sm font-medium"
          >
            Save Product
          </button>

          <button
            onClick={() => setActivePage("Product")}
            className="border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 px-6 py-2.5 rounded-lg text-sm font-medium"
          >
            Cancel
          </button>

        </div>

      </div>


      {/* Right Preview */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 h-fit">

        <h2 className="text-sm font-semibold text-gray-700 mb-6">
          Product Preview
        </h2>

        <div className="flex flex-col items-center justify-center py-8">

          {/* Image */}
          <div className="w-32 h-32 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-6xl mb-5">
            📦
          </div>

          {/* Product Name */}
          <h3 className="text-base font-semibold text-gray-800">
            Product Name
          </h3>

          {/* Category */}
          <p className="text-xs text-gray-400 mt-1">
            Category Name
          </p>

          {/* Price */}
          <p className="text-lg font-bold text-gray-900 mt-3">
            ₹0
          </p>

          {/* Stock */}
          <span className="mt-3 bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium">
            In Stock
          </span>

          <p className="text-xs text-gray-400 text-center mt-5">
            This is how your product will appear in the store
          </p>

        </div>

      </div>

    </div>

  </div>
)}


  {activePage === "Orders" && (
    <div>
      <h1 className="text-3xl font-bold">Orders</h1>
      <p className="mt-2 text-gray-600">
        All orders will appear here.
      </p>
    </div>
  )}

  {activePage === "Users" && (
    <div>
      <h1 className="text-3xl font-bold">Users</h1>
      <p className="mt-2 text-gray-600">
        All users will appear here.
      </p>
    </div>
  )}

  {activePage === "Settings" && (
    <div>
      <h1 className="text-3xl font-bold">Settings</h1>
      <p className="mt-2 text-gray-600">
        Settings will appear here.
      </p>
    </div>
  )}

           </div>
    
  </div>





  
      
    </>
  )
}

export default App
