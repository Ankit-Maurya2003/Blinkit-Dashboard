import React, { useMemo, useState } from "react";
import {
  Search,
  Pencil,
  Trash2,
  Plus,
} from "lucide-react";

const Cate = ({
  categories,
  onAdd,
  onEdit,
  onDelete,
}) => {
  const [search, setSearch] = useState("");

  const filteredCategories = useMemo(() => {
    return categories.filter((category) =>
      category.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [categories, search]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
            Category Management
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage your store categories
          </p>
        </div>

        <button
          onClick={onAdd}
          className="flex items-center justify-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-700"
        >
          <Plus size={18} />
          Add Category
        </button>
      </div>

      {/* Card */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

        {/* Search */}
        <div className="border-b p-4 md:p-5">
          <div className="flex w-full items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 md:w-80">
            <Search size={18} className="text-gray-400" />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search category..."
              className="w-full bg-transparent text-sm outline-none"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-sm">
            <thead>
              <tr className="border-b bg-gray-50 text-left">
                <th className="px-5 py-4 text-gray-500">
                  Category Name
                </th>

                <th className="px-5 py-4 text-gray-500">
                  Icon
                </th>

                <th className="px-5 py-4 text-gray-500">
                  Status
                </th>

                <th className="px-5 py-4 text-gray-500">
                  Products
                </th>

                <th className="px-5 py-4 text-center text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredCategories.map((category) => (
                <tr
                  key={category.id}
                  className="border-b transition hover:bg-gray-50"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-xl">
                        {category.icon}
                      </div>

                      <span className="font-medium text-gray-800">
                        {category.name}
                      </span>
                    </div>
                  </td>

                  <td className="px-5 py-4 text-xl">
                    {category.icon}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`
                        rounded-full px-3 py-1 text-xs font-medium
                        ${
                          category.status === "Active"
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-500"
                        }
                      `}
                    >
                      {category.status}
                    </span>
                  </td>

                  <td className="px-5 py-4 font-medium text-gray-700">
                    {category.products}
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={() => onEdit(category)}
                        className="text-gray-400 hover:text-green-600"
                      >
                        <Pencil size={17} />
                      </button>

                      <button
                        onClick={() => onDelete(category.id)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <Trash2 size={17} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredCategories.length === 0 && (
            <div className="py-12 text-center text-sm text-gray-400">
              No categories found
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t px-5 py-4">
          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-medium text-gray-700">
              {filteredCategories.length}
            </span>{" "}
            of{" "}
            <span className="font-medium text-gray-700">
              {categories.length}
            </span>{" "}
            categories
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cate;
