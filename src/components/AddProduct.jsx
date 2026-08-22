import React from "react";

const AddProduct = ({ setActivePage }) => {
  return (
    <div className="min-h-screen p-2 md:p-6">

      <button
        onClick={() => setActivePage("Product")}
        className="text-xs text-gray-500 hover:text-green-600 mb-2"
      >
        ← Back to Products
      </button>

      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Add New Product
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Add a new product to your store
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">

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

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category *
            </label>

            <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none bg-white focus:border-green-500">
              <option value="">Select category</option>
              <option>Fruits & Vegetables</option>
              <option>Dairy & Bread</option>
              <option>Snacks & Munchies</option>
              <option>Beverages</option>
              <option>Personal Care</option>
              <option>Household</option>
            </select>
          </div>

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

          <div className="mb-8">

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>

            <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none bg-white">
              <option>Active</option>
              <option>Inactive</option>
            </select>

          </div>

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

        <div className="bg-white rounded-xl border border-gray-200 p-6 h-fit">

          <h2 className="text-sm font-semibold text-gray-700 mb-6">
            Product Preview
          </h2>

          <div className="flex flex-col items-center justify-center py-8">

            <div className="w-32 h-32 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-6xl mb-5">
              📦
            </div>

            <h3 className="text-base font-semibold text-gray-800">
              Product Name
            </h3>

            <p className="text-xs text-gray-400 mt-1">
              Category Name
            </p>

            <p className="text-lg font-bold text-gray-900 mt-3">
              ₹0
            </p>

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
  );
};

export default AddProduct;
