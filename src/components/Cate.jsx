import React from "react";

import {
  Search,
  Pencil,
  Trash2,
  Plus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Categories = ({ setActivePage }) => {
  return (
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

        <button
          onClick={() => setActivePage("Add category")}
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

          <table className="w-full text-sm">

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
            Showing{" "}
            <span className="font-medium text-gray-700">
              1
            </span>{" "}
            to{" "}
            <span className="font-medium text-gray-700">
              6
            </span>{" "}
            of{" "}
            <span className="font-medium text-gray-700">
              36
            </span>{" "}
            categories
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
  );
};

export default Categories;
