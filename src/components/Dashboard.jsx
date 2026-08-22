import React from "react";

import {
  Grid2X2,
  Package,
  ShoppingCart,
  Users,
  Search,
  ChevronDown,
} from "lucide-react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import data from "../data/chartData";

const Dashboard = ({ setActivePage }) => {
  return (
    <div className="min-h-screen w-full p-6">

      {/* Dashboard Header */}
      <div className="sm:flex items-center justify-between mb-6">

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
              <p className="text-sm font-semibold">
                {name}
              </p>

              <p className="text-xs text-gray-400">
                Administrator
              </p>
            </div>

            <ChevronDown size={16} />

          </div>

        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        {/* Categories */}
        <div
          onClick={() => setActivePage("Categories")}
          className="bg-white border border-purple-100 rounded-xl p-5"
        >
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

        {/* Products */}
        <div
          onClick={() => setActivePage("Product")}
          className="bg-white border border-orange-100 rounded-xl p-5"
        >
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

        {/* Orders */}
        <div
          onClick={() => setActivePage("Orders")}
          className="bg-white border border-red-100 rounded-xl p-5"
        >
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
        <div
          onClick={() => setActivePage("Users")}
          className="bg-white border border-blue-100 rounded-xl p-5"
        >
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-6">

        {/* Orders Overview */}
        <div className="lg:col-span-2 bg-white rounded-xl overflow-x-auto border h-auto p-10">

          <div className="sm:flex items-center justify-between mb-5">

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

          {/* Chart */}
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

        {/* Top Categories */}
        <div className="bg-white rounded-xl border p-5">

          <div className="flex items-center justify-between mb-5">

            <h2 className="font-bold text-gray-800">
              Top Categories
            </h2>

            <button
              onClick={() => setActivePage("Categories")}
              className="text-xs text-gray-400 hover:text-blue-400"
            >
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

      {/* Recent Orders */}
      <div className="bg-white border rounded-xl mt-6 p-5">

        <div className="flex items-center overflow-x-auto justify-between mb-5">

          <h2 className="font-bold text-gray-800">
            Recent Orders
          </h2>

          <button
            onClick={() => setActivePage("Orders")}
            className="text-xs border rounded-lg px-3 py-2"
          >
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

                <td>
                  Rahul Kumar
                </td>

                <td>
                  ₹1,250
                </td>

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

                <td>
                  Aman Sharma
                </td>

                <td>
                  ₹850
                </td>

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

                <td>
                  Priya Singh
                </td>

                <td>
                  ₹2,450
                </td>

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
  );
};

export default Dashboard;
