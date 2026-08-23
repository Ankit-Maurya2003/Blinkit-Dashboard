import React, { useMemo, useState } from "react";
import {
  Search,
  Pencil,
  Trash2,
  Plus,
} from "lucide-react";

const Products = ({
  products,
  onAdd,
  onEdit,
  onDelete,
}) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [status, setStatus] = useState("All Status");

  const categories = [
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchSearch =
        product.name
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchCategory =
        category === "All Categories" ||
        product.category === category;

      const matchStatus =
        status === "All Status" ||
        product.status === status;

      return (
        matchSearch &&
        matchCategory &&
        matchStatus
      );
    });
  }, [products, search, category, status]);

  return (
    <div className="min-h-screen">

      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
            Product Management
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage your store products
          </p>
        </div>

        <button
          onClick={onAdd}
          className="flex items-center justify-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-700"
        >
          <Plus size={18} />
          Add Product
        </button>
      </div>

      {/* Card */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

        {/* Filters */}
        <div className="border-b p-4 md:p-5">
          <div className="flex flex-col gap-3 lg:flex-row">

            {/* Search */}
            <div className="flex flex-1 items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5">
              <Search size={18} className="text-gray-400" />

              <input
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Search product..."
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>

            {/* Category */}
            <select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
              className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm outline-none lg:w-52"
            >
              <option>All Categories</option>

              {categories.map((item) => (
                <option key={item}>
                  {item}
                </option>
              ))}
            </select>

            {/* Status */}
            <select
              value={status}
              onChange={(e) =>
                setStatus(e.target.value)
              }
              className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm outline-none lg:w-40"
            >
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>

          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-sm">

            <thead>
              <tr className="border-b bg-gray-50 text-left">
                <th className="px-5 py-4 text-gray-500">
                  Product Name
                </th>

                <th className="px-5 py-4 text-gray-500">
                  Category
                </th>

                <th className="px-5 py-4 text-gray-500">
                  Price
                </th>

                <th className="px-5 py-4 text-gray-500">
                  Stock
                </th>

                <th className="px-5 py-4 text-gray-500">
                  Status
                </th>

                <th className="px-5 py-4 text-center text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredProducts.map((product) => (
                <tr
                  key={product.id}
                  className="border-b transition hover:bg-gray-50"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-gray-50 text-2xl">
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          "📦"
                        )}
                      </div>

                      <div>
                        <p className="font-medium text-gray-800">
                          {product.name}
                        </p>

                        {product.weight && (
                          <p className="text-xs text-gray-400">
                            {product.weight}
                          </p>
                        )}
                      </div>

                    </div>
                  </td>

                  <td className="px-5 py-4 text-gray-600">
                    {product.category}
                  </td>

                  <td className="px-5 py-4 font-medium text-gray-700">
                    ₹{product.price}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={
                        product.stock <= 10
                          ? "font-medium text-red-500"
                          : "text-gray-700"
                      }
                    >
                      {product.stock}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`
                        rounded-full px-3 py-1 text-xs font-medium
                        ${
                          product.status === "Active"
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-500"
                        }
                      `}
                    >
                      {product.status}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={() => onEdit(product)}
                        className="text-gray-400 hover:text-green-600"
                      >
                        <Pencil size={16} />
                      </button>

                      <button
                        onClick={() => onDelete(product.id)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

          {filteredProducts.length === 0 && (
            <div className="py-12 text-center text-sm text-gray-400">
              No products found
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t px-5 py-4">
          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-medium text-gray-700">
              {filteredProducts.length}
            </span>{" "}
            of{" "}
            <span className="font-medium text-gray-700">
              {products.length}
            </span>{" "}
            products
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
