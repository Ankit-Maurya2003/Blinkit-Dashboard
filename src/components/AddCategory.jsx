import React from "react";

const AddCategory = ({ setActivePage }) => {
  return (
    <div className="min-h-screen p-2 md:p-6">

      {/* Back */}
      <p
        onClick={() => setActivePage("Categories")}
        className="text-xs text-gray-500 mb-2"
      >
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
  );
};

export default AddCategory;
