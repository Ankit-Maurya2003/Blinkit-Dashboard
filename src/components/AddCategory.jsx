import React, { useEffect, useState } from "react";

const icons = [
  "🥬",
  "🍎",
  "🍞",
  "🍪",
  "🥤",
  "🧴",
  "🧹",
  "🥛",
];

const AddCategory = ({
  initialData,
  onSave,
  onCancel,
}) => {
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("🥬");
  const [status, setStatus] = useState("Active");

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setIcon(initialData.icon);
      setStatus(initialData.status);
    } else {
      setName("");
      setIcon("🥬");
      setStatus("Active");
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Please enter category name");
      return;
    }

    onSave({
      ...(initialData || {}),
      name: name.trim(),
      icon,
      status,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Back */}
      <button
        onClick={onCancel}
        className="mb-2 text-xs text-gray-500 hover:text-green-600"
      >
        ← Back to Categories
      </button>

      {/* Heading */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          {initialData
            ? "Edit Category"
            : "Add New Category"}
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          {initialData
            ? "Update category details"
            : "Add a new category to organize your products"}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-gray-200 bg-white p-6 lg:col-span-2"
        >
          {/* Name */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Category Name *
            </label>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter category name"
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-green-500"
            />
          </div>

          {/* Icon */}
          <div className="mb-6">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Icon
            </label>

            <p className="mb-3 text-xs text-gray-400">
              Choose an icon
            </p>

            <div className="flex flex-wrap gap-3">
              {icons.map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => setIcon(item)}
                  className={`
                    flex h-11 w-11 items-center justify-center rounded-lg text-xl
                    ${
                      icon === item
                        ? "border-2 border-green-500 bg-green-50"
                        : "border border-gray-200 bg-white"
                    }
                  `}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Status */}
          <div className="mb-8">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Status
            </label>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-green-500"
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              type="submit"
              className="rounded-lg bg-green-600 px-7 py-2.5 text-sm font-medium text-white hover:bg-green-700"
            >
              {initialData
                ? "Update Category"
                : "Save Category"}
            </button>

            <button
              type="button"
              onClick={onCancel}
              className="rounded-lg border border-gray-200 bg-white px-6 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        </form>

        {/* Preview */}
        <div className="h-fit rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="mb-6 text-sm font-semibold text-gray-700">
            Preview
          </h2>

          <div className="flex flex-col items-center justify-center py-8">
            <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-xl border border-green-100 bg-green-50 text-4xl">
              {icon}
            </div>

            <h3 className="text-base font-semibold text-gray-800">
              {name || "Category Name"}
            </h3>

            <span
              className={`
                mt-3 rounded-full px-3 py-1 text-xs font-medium
                ${
                  status === "Active"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-500"
                }
              `}
            >
              {status}
            </span>

            <p className="mt-5 text-center text-xs text-gray-400">
              This is how your category will appear
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
