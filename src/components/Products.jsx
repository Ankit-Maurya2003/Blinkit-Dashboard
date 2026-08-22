import React from "react";
import {
  Plus,
  Search,
  ChevronDown,
  Pencil,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Products = ({ setActivePage }) => {
  return (
    <div className="min-h-screen p-2 md:p-6">

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

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

        <div className="p-4 md:p-5 border-b">

          <div className="flex flex-col lg:flex-row gap-3">

            <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 flex-1">

              <Search size={18} className="text-gray-400 shrink-0" />

              <input
                type="text"
                placeholder="Search product..."
                className="bg-transparent outline-none w-full text-sm text-gray-700 placeholder-gray-400"
              />

            </div>

            <div className="relative">

              <select className="appearance-none bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 pr-10 text-sm text-gray-600 outline-none w-full lg:w-44">
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

            <div className="relative">

              <select className="appearance-none bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 pr-10 text-sm text-gray-600 outline-none w-full lg:w-36">
                <option>All Status</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>

              <ChevronDown
                size={16}
                className="absolute right-3 top-3 text-gray-400 pointer-events-none"
              />

            </div>

            <button className="flex items-center justify-center gap-2 border border-gray-200 bg-white hover:bg-gray-50 rounded-lg px-4 py-2.5 text-sm text-gray-600">
              <span>☷</span>
              Filter
            </button>

          </div>

        </div>

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
                    <button className="text-gray-400 hover:text-green-600 transition">
                      <Pencil size={16} />
                    </button>

                    <button className="text-gray-400 hover:text-red-500 transition">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>

              </tr>

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

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-5 py-4 border-t">

          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-medium text-gray-700">1</span>{" "}
            to{" "}
            <span className="font-medium text-gray-700">5</span>{" "}
            of{" "}
            <span className="font-medium text-gray-700">1,248</span>{" "}
            products
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

export default Products;
