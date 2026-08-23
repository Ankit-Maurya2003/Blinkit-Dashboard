import React, { useMemo, useState } from "react";
import {
  Search,
  Pencil,
  Trash2,
  Plus,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

const initialUsers = [
  {
    id: 1,
    name: "Rahul Kumar",
    email: "rahul@gmail.com",
    phone: "9876543210",
    orders: 24,
    spent: 12500,
    status: "Active",
  },
  {
    id: 2,
    name: "Aman Sharma",
    email: "aman@gmail.com",
    phone: "9876543211",
    orders: 18,
    spent: 8500,
    status: "Active",
  },
  {
    id: 3,
    name: "Priya Singh",
    email: "priya@gmail.com",
    phone: "9876543212",
    orders: 31,
    spent: 24500,
    status: "Active",
  },
  {
    id: 4,
    name: "Neha Verma",
    email: "neha@gmail.com",
    phone: "9876543213",
    orders: 12,
    spent: 5600,
    status: "Inactive",
  },
  {
    id: 5,
    name: "Rohit Gupta",
    email: "rohit@gmail.com",
    phone: "9876543214",
    orders: 9,
    spent: 3200,
    status: "Active",
  },
];

const Users = () => {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    status: "Active",
  });

  // Filter Users
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        user.name.toLowerCase().includes(searchValue) ||
        user.email.toLowerCase().includes(searchValue) ||
        user.phone.includes(search);

      const matchesStatus =
        statusFilter === "All" ||
        user.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [users, search, statusFilter]);

  // Total Pages
  const totalPages = Math.ceil(
    filteredUsers.length / itemsPerPage
  );

  // Paginated Users
  const paginatedUsers = useMemo(() => {
    const startIndex =
      (currentPage - 1) * itemsPerPage;

    return filteredUsers.slice(
      startIndex,
      startIndex + itemsPerPage
    );
  }, [filteredUsers, currentPage]);

  // Search
  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  // Status Filter
  const handleStatusChange = (e) => {
    setStatusFilter(e.target.value);
    setCurrentPage(1);
  };

  // Previous
  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  // Next
  const handleNext = () => {
    setCurrentPage((prev) =>
      Math.min(prev + 1, totalPages)
    );
  };

  // Page Change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Add Modal
  const openAddModal = () => {
    setEditingUser(null);

    setForm({
      name: "",
      email: "",
      phone: "",
      status: "Active",
    });

    setShowModal(true);
  };

  // Edit Modal
  const openEditModal = (user) => {
    setEditingUser(user);

    setForm({
      name: user.name,
      email: user.email,
      phone: user.phone,
      status: user.status,
    });

    setShowModal(true);
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone) {
      alert("Please fill all required fields");
      return;
    }

    if (editingUser) {
      setUsers(
        users.map((user) =>
          user.id === editingUser.id
            ? {
                ...user,
                ...form,
              }
            : user
        )
      );
    } else {
      setUsers([
        ...users,
        {
          id: Date.now(),
          ...form,
          orders: 0,
          spent: 0,
        },
      ]);
    }

    setShowModal(false);
  };

  // Delete
  const deleteUser = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmDelete) return;

    const updatedUsers = users.filter(
      (user) => user.id !== id
    );

    setUsers(updatedUsers);

    // Calculate remaining filtered users
    const newFilteredUsers = updatedUsers.filter(
      (user) => {
        const searchValue = search.toLowerCase();

        const matchesSearch =
          user.name
            .toLowerCase()
            .includes(searchValue) ||
          user.email
            .toLowerCase()
            .includes(searchValue) ||
          user.phone.includes(search);

        const matchesStatus =
          statusFilter === "All" ||
          user.status === statusFilter;

        return matchesSearch && matchesStatus;
      }
    );

    const newTotalPages = Math.ceil(
      newFilteredUsers.length / itemsPerPage
    );

    if (
      currentPage > newTotalPages &&
      newTotalPages > 0
    ) {
      setCurrentPage(newTotalPages);
    }
  };

  return (
    <div className="min-h-screen p-2 md:p-6">

      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>
          <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
            User Management
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage your store customers
          </p>
        </div>

        <button
          onClick={openAddModal}
          className="flex items-center justify-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 font-medium text-white hover:bg-green-700"
        >
          <Plus size={18} />
          Add User
        </button>

      </div>

      {/* Stats */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">

        <div className="rounded-xl border bg-white p-5">
          <p className="text-sm text-gray-500">
            Total Users
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            {users.length}
          </h2>
        </div>

        <div className="rounded-xl border bg-white p-5">
          <p className="text-sm text-gray-500">
            Active Users
          </p>

          <h2 className="mt-2 text-2xl font-bold text-green-600">
            {users.filter(
              (u) => u.status === "Active"
            ).length}
          </h2>
        </div>

        <div className="rounded-xl border bg-white p-5">
          <p className="text-sm text-gray-500">
            Inactive Users
          </p>

          <h2 className="mt-2 text-2xl font-bold text-red-500">
            {users.filter(
              (u) => u.status === "Inactive"
            ).length}
          </h2>
        </div>

      </div>

      {/* Main Card */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

        {/* Filters */}
        <div className="border-b p-4 md:p-5">

          <div className="flex flex-col gap-3 md:flex-row">

            {/* Search */}
            <div className="flex flex-1 items-center gap-2 rounded-lg border bg-gray-50 px-4 py-2.5">

              <Search
                size={18}
                className="text-gray-400"
              />

              <input
                value={search}
                onChange={handleSearch}
                placeholder="Search user..."
                className="w-full bg-transparent text-sm outline-none"
              />

            </div>

            {/* Status */}
            <select
              value={statusFilter}
              onChange={handleStatusChange}
              className="rounded-lg border bg-gray-50 px-4 py-2.5 text-sm outline-none"
            >
              <option value="All">
                All Status
              </option>

              <option value="Active">
                Active
              </option>

              <option value="Inactive">
                Inactive
              </option>
            </select>

          </div>

        </div>

        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full min-w-[750px] text-sm">

            <thead>
              <tr className="border-b bg-gray-50 text-left">

                <th className="px-5 py-4 text-gray-500">
                  User
                </th>

                <th className="px-5 py-4 text-gray-500">
                  Phone
                </th>

                <th className="px-5 py-4 text-gray-500">
                  Orders
                </th>

                <th className="px-5 py-4 text-gray-500">
                  Total Spent
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

              {paginatedUsers.map((user) => (

                <tr
                  key={user.id}
                  className="border-b transition hover:bg-gray-50"
                >

                  {/* User */}
                  <td className="px-5 py-4">

                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 font-bold text-green-700">
                        {user.name.charAt(0)}
                      </div>

                      <div>
                        <p className="font-medium text-gray-800">
                          {user.name}
                        </p>

                        <p className="text-xs text-gray-400">
                          {user.email}
                        </p>
                      </div>

                    </div>

                  </td>

                  {/* Phone */}
                  <td className="px-5 py-4 text-gray-600">
                    {user.phone}
                  </td>

                  {/* Orders */}
                  <td className="px-5 py-4 font-medium">
                    {user.orders}
                  </td>

                  {/* Spent */}
                  <td className="px-5 py-4 font-medium">
                    ₹{user.spent.toLocaleString()}
                  </td>

                  {/* Status */}
                  <td className="px-5 py-4">

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-500"
                      }`}
                    >
                      {user.status}
                    </span>

                  </td>

                  {/* Actions */}
                  <td className="px-5 py-4">

                    <div className="flex justify-center gap-3">

                      <button
                        onClick={() =>
                          openEditModal(user)
                        }
                        className="text-gray-400 hover:text-green-600"
                      >
                        <Pencil size={17} />
                      </button>

                      <button
                        onClick={() =>
                          deleteUser(user.id)
                        }
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

          {/* No Users */}
          {paginatedUsers.length === 0 && (
            <div className="py-12 text-center text-sm text-gray-400">
              No users found
            </div>
          )}

        </div>

        {/* Footer + Pagination */}
        <div className="flex flex-col gap-4 border-t px-5 py-4 sm:flex-row sm:items-center sm:justify-between">

          {/* Showing */}
          <p className="text-sm text-gray-500">

            Showing{" "}

            <span className="font-medium text-gray-700">
              {filteredUsers.length === 0
                ? 0
                : (currentPage - 1) *
                    itemsPerPage +
                  1}
            </span>

            {" "}to{" "}

            <span className="font-medium text-gray-700">
              {Math.min(
                currentPage * itemsPerPage,
                filteredUsers.length
              )}
            </span>

            {" "}of{" "}

            <span className="font-medium text-gray-700">
              {filteredUsers.length}
            </span>

            {" "}users

          </p>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center gap-1">

              {/* Previous */}
              <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-600 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronLeft size={16} />
                Previous
              </button>

              {/* Pages */}
              {Array.from(
                { length: totalPages },
                (_, index) => index + 1
              ).map((page) => (

                <button
                  key={page}
                  onClick={() =>
                    handlePageChange(page)
                  }
                  className={`min-w-9 rounded-lg px-3 py-1.5 text-sm transition ${
                    currentPage === page
                      ? "bg-green-600 text-white"
                      : "border border-gray-200 text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {page}
                </button>

              ))}

              {/* Next */}
              <button
                onClick={handleNext}
                disabled={
                  currentPage === totalPages
                }
                className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-600 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next
                <ChevronRight size={16} />
              </button>

            </div>
          )}

        </div>

      </div>

      {/* Modal */}
      {showModal && (

        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4"
          onClick={() => setShowModal(false)}
        >

          <div
            onClick={(e) =>
              e.stopPropagation()
            }
            className="w-full max-w-lg rounded-2xl bg-white p-6"
          >

            {/* Modal Header */}
            <div className="mb-5 flex items-center justify-between">

              <h2 className="text-xl font-bold">
                {editingUser
                  ? "Edit User"
                  : "Add New User"}
              </h2>

              <button
                onClick={() =>
                  setShowModal(false)
                }
                className="text-gray-500 hover:text-gray-800"
              >
                <X size={20} />
              </button>

            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>

              <div className="space-y-4">

                <input
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                  placeholder="Full name *"
                  className="w-full rounded-lg border px-4 py-3 outline-none focus:border-green-500"
                />

                <input
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                  type="email"
                  placeholder="Email *"
                  className="w-full rounded-lg border px-4 py-3 outline-none focus:border-green-500"
                />

                <input
                  value={form.phone}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      phone: e.target.value,
                    })
                  }
                  placeholder="Phone number *"
                  className="w-full rounded-lg border px-4 py-3 outline-none focus:border-green-500"
                />

                <select
                  value={form.status}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      status: e.target.value,
                    })
                  }
                  className="w-full rounded-lg border px-4 py-3 outline-none"
                >
                  <option>Active</option>
                  <option>Inactive</option>
                </select>

              </div>

              {/* Buttons */}
              <div className="mt-6 flex gap-3">

                <button
                  type="button"
                  onClick={() =>
                    setShowModal(false)
                  }
                  className="flex-1 rounded-lg border py-3"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="flex-1 rounded-lg bg-green-600 py-3 text-white hover:bg-green-700"
                >
                  {editingUser
                    ? "Update User"
                    : "Add User"}
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  );
};

export default Users;
