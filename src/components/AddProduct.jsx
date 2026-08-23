import React, { useEffect, useState } from "react";

const AddProduct = ({
  categories,
  initialData,
  onSave,
  onCancel,
}) => {
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    weight: "",
    description: "",
    image: "",
    status: "Active",
  });

  useEffect(() => {
    if (initialData) {
      setForm({
        name: initialData.name || "",
        category: initialData.category || "",
        price: initialData.price || "",
        stock: initialData.stock || "",
        weight: initialData.weight || "",
        description: initialData.description || "",
        image: initialData.image || "",
        status: initialData.status || "Active",
      });
    } else {
      setForm({
        name: "",
        category: "",
        price: "",
        stock: "",
        weight: "",
        description: "",
        image: "",
        status: "Active",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setForm((prev) => ({
        ...prev,
        image: reader.result,
      }));
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim()) {
      alert("Please enter product name");
      return;
    }

    if (!form.category) {
      alert("Please select category");
      return;
    }

    if (!form.price || Number(form.price) < 0) {
      alert("Please enter valid price");
      return;
    }

    if (!form.stock || Number(form.stock) < 0) {
      alert("Please enter valid stock");
      return;
    }

    onSave({
      ...(initialData || {}),
      ...form,
    });
  };

  return (
    <div className="min-h-screen">

      {/* Back */}
      <button
        onClick={onCancel}
        className="mb-2 text-xs text-gray-500 hover:text-green-600"
      >
        ← Back to Products
      </button>

      {/* Heading */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          {initialData
            ? "Edit Product"
            : "Add New Product"}
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          {initialData
            ? "Update your product details"
            : "Add a new product to your store"}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-gray-200 bg-white p-6 lg:col-span-2"
        >

          {/* Product Name */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Product Name *
            </label>

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter product name"
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-green-500"
            />
          </div>

          {/* Category */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Category *
            </label>

            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-green-500"
            >
              <option value="">
                Select category
              </option>

              {categories
                .filter(
                  (category) =>
                    category.status === "Active"
                )
                .map((category) => (
                  <option
                    key={category.id}
                    value={category.name}
                  >
                    {category.name}
                  </option>
                ))}
            </select>
          </div>

          {/* Price Stock */}
          <div className="mb-6 grid grid-cols-1 gap-5 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Price *
              </label>

              <div className="relative">
                <span className="absolute left-4 top-3 text-gray-500">
                  ₹
                </span>

                <input
                  name="price"
                  type="number"
                  min="0"
                  value={form.price}
                  onChange={handleChange}
                  placeholder="Enter price"
                  className="w-full rounded-lg border border-gray-200 py-3 pl-9 pr-4 text-sm outline-none focus:border-green-500"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Stock *
              </label>

              <input
                name="stock"
                type="number"
                min="0"
                value={form.stock}
                onChange={handleChange}
                placeholder="Enter stock quantity"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-green-500"
              />
            </div>

          </div>

          {/* Weight */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Weight / Quantity
            </label>

            <input
              name="weight"
              value={form.weight}
              onChange={handleChange}
              placeholder="Example: 1 kg, 500 g, 1 L"
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-green-500"
            />
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Description
            </label>

            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows="4"
              placeholder="Enter product description"
              className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-green-500"
            />
          </div>

          {/* Image */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Product Image
            </label>

            <div className="rounded-xl border-2 border-dashed border-gray-200 p-8 text-center transition hover:border-green-400">

              {form.image ? (
                <img
                  src={form.image}
                  alt="Preview"
                  className="mx-auto mb-4 h-32 w-32 rounded-xl object-cover"
                />
              ) : (
                <div className="mb-3 text-4xl">
                  📦
                </div>
              )}

              <p className="text-sm font-medium text-gray-700">
                Upload product image
              </p>

              <p className="mt-1 text-xs text-gray-400">
                PNG, JPG or JPEG
              </p>

              <input
                type="file"
                accept="image/png,image/jpeg,image/jpg"
                onChange={handleImage}
                className="mx-auto mt-4 block text-sm"
              />
            </div>
          </div>

          {/* Status */}
          <div className="mb-8">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Status
            </label>

            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none"
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
                ? "Update Product"
                : "Save Product"}
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
            Product Preview
          </h2>

          <div className="flex flex-col items-center justify-center py-8">

            <div className="mb-5 flex h-32 w-32 items-center justify-center overflow-hidden rounded-xl border border-gray-100 bg-gray-50 text-6xl">
              {form.image ? (
                <img
                  src={form.image}
                  alt={form.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                "📦"
              )}
            </div>

            <h3 className="text-center text-base font-semibold text-gray-800">
              {form.name || "Product Name"}
            </h3>

            <p className="mt-1 text-xs text-gray-400">
              {form.category || "Category Name"}
            </p>

            <p className="mt-3 text-lg font-bold text-gray-900">
              ₹{form.price || "0"}
            </p>

            <span
              className={`
                mt-3 rounded-full px-3 py-1 text-xs font-medium
                ${
                  Number(form.stock) > 0
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-500"
                }
              `}
            >
              {Number(form.stock) > 0
                ? `${form.stock} In Stock`
                : "Out of Stock"}
            </span>

            <p className="mt-5 text-center text-xs text-gray-400">
              This is how your product will appear in the store
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
