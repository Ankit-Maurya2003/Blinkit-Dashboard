import React, { useMemo, useState } from "react";
import {
  Search,
  Eye,
  Trash2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

const initialOrders = [
  {
    id: "#ORD-1024",
    customer: "Rahul Kumar",
    phone: "9876543210",
    items: 5,
    amount: 1250,
    status: "Delivered",
    date: "12 May 2026",
  },
  {
    id: "#ORD-1023",
    customer: "Aman Sharma",
    phone: "9876543211",
    items: 3,
    amount: 850,
    status: "Pending",
    date: "11 May 2026",
  },
  {
    id: "#ORD-1022",
    customer: "Priya Singh",
    phone: "9876543212",
    items: 8,
    amount: 2450,
    status: "Processing",
    date: "10 May 2026",
  },
  {
    id: "#ORD-1021",
    customer: "Neha Verma",
    phone: "9876543213",
    items: 2,
    amount: 560,
    status: "Cancelled",
    date: "09 May 2026",
  },
  {
    id: "#ORD-1020",
    customer: "Rohit Gupta",
    phone: "9876543214",
    items: 6,
    amount: 1850,
    status: "Delivered",
    date: "08 May 2026",
  },
];

const Orders = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  // Filter Orders
  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const searchValue = search.toLowerCase();

      const searchMatch =
        order.id.toLowerCase().includes(searchValue) ||
        order.customer.toLowerCase().includes(searchValue);

      const statusMatch =
        status === "All" || order.status === status;

      return searchMatch && statusMatch;
    });
  }, [orders, search, status]);

  // Total Pages
  const totalPages = Math.ceil(
    filteredOrders.length / itemsPerPage
  );

  // Paginated Orders
  const paginatedOrders = useMemo(() => {
    const startIndex =
      (currentPage - 1) * itemsPerPage;

    return filteredOrders.slice(
      startIndex,
      startIndex + itemsPerPage
    );
  }, [filteredOrders, currentPage]);

  // Search
  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  // Status
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
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

  // Delete
  const deleteOrder = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this order?"
    );

    if (confirmDelete) {
      const updatedOrders = orders.filter(
        (order) => order.id !== id
      );

      setOrders(updatedOrders);

      // Agar current page empty ho jaye
      const newFilteredLength = updatedOrders.filter(
        (order) => {
          const searchValue = search.toLowerCase();

          const searchMatch =
            order.id.toLowerCase().includes(searchValue) ||
            order.customer
              .toLowerCase()
              .includes(searchValue);

          const statusMatch =
            status === "All" ||
            order.status === status;

          return searchMatch && statusMatch;
        }
      ).length;

      const newTotalPages = Math.ceil(
        newFilteredLength / itemsPerPage
      );

      if (
        currentPage > newTotalPages &&
        newTotalPages > 0
      ) {
        setCurrentPage(newTotalPages);
      }
    }
  };

  // Status Style
  const statusStyle = (value) => {
    if (value === "Delivered") {
      return "bg-green-100 text-green-600";
    }

    if (value === "Pending") {
      return "bg-yellow-100 text-yellow-600";
    }

    if (value === "Processing") {
      return "bg-blue-100 text-blue-600";
    }

    return "bg-red-100 text-red-500";
  };

  return (
    <div className="min-h-screen p-2 md:p-6">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
          Order Management
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Manage and track customer orders
        </p>
      </div>

      {/* Stats */}
      <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">

        <div className="rounded-xl border bg-white p-5">
          <p className="text-sm text-gray-500">
            Total Orders
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            {orders.length}
          </h2>
        </div>

        <div className="rounded-xl border bg-white p-5">
          <p className="text-sm text-gray-500">
            Pending
          </p>

          <h2 className="mt-2 text-2xl font-bold text-yellow-600">
            {orders.filter(
              (o) => o.status === "Pending"
            ).length}
          </h2>
        </div>

        <div className="rounded-xl border bg-white p-5">
          <p className="text-sm text-gray-500">
            Processing
          </p>

          <h2 className="mt-2 text-2xl font-bold text-blue-600">
            {orders.filter(
              (o) => o.status === "Processing"
            ).length}
          </h2>
        </div>

        <div className="rounded-xl border bg-white p-5">
          <p className="text-sm text-gray-500">
            Delivered
          </p>

          <h2 className="mt-2 text-2xl font-bold text-green-600">
            {orders.filter(
              (o) => o.status === "Delivered"
            ).length}
          </h2>
        </div>

      </div>

      {/* Main Card */}
      <div className="overflow-hidden rounded-xl border bg-white">

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
                placeholder="Search order or customer..."
                className="w-full bg-transparent text-sm outline-none"
              />

            </div>

            {/* Status */}
            <div className="relative">

              <select
                value={status}
                onChange={handleStatusChange}
                className="w-full appearance-none rounded-lg border bg-gray-50 px-4 py-2.5 pr-10 text-sm outline-none md:w-44"
              >
                <option>All</option>
                <option>Pending</option>
                <option>Processing</option>
                <option>Delivered</option>
                <option>Cancelled</option>
              </select>

              <ChevronDown
                size={16}
                className="pointer-events-none absolute right-3 top-3 text-gray-400"
              />

            </div>

          </div>

        </div>

        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full min-w-lg text-sm">

            <thead>
              <tr className="border-b bg-gray-50 text-left">

                <th className="px-5 py-4 text-gray-500">
                  Order ID
                </th>

                <th className="px-5 py-4 text-gray-500">
                  Customer
                </th>

                <th className="px-5 py-4 text-gray-500">
                  Items
                </th>

                <th className="px-5 py-4 text-gray-500">
                  Amount
                </th>

                <th className="px-5 py-4 text-gray-500">
                  Status
                </th>

                <th className="px-5 py-4 text-gray-500">
                  Date
                </th>

                <th className="px-5 py-4 text-center text-gray-500">
                  Actions
                </th>

              </tr>
            </thead>

            <tbody>

              {paginatedOrders.map((order) => (

                <tr
                  key={order.id}
                  className="border-b hover:bg-gray-50"
                >

                  <td className="px-5 py-4 font-semibold">
                    {order.id}
                  </td>

                  <td className="px-5 py-4">

                    <p className="font-medium">
                      {order.customer}
                    </p>

                    <p className="text-xs text-gray-400">
                      {order.phone}
                    </p>

                  </td>

                  <td className="px-5 py-4">
                    {order.items}
                  </td>

                  <td className="px-5 py-4 font-semibold">
                    ₹{order.amount.toLocaleString()}
                  </td>

                  <td className="px-5 py-4">

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyle(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>

                  </td>

                  <td className="px-5 py-4 text-gray-500">
                    {order.date}
                  </td>

                  <td className="px-5 py-4">

                    <div className="flex justify-center gap-3">

                      <button
                        onClick={() =>
                          setSelectedOrder(order)
                        }
                        className="text-gray-400 hover:text-green-600"
                      >
                        <Eye size={17} />
                      </button>

                      <button
                        onClick={() =>
                          deleteOrder(order.id)
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

          {/* No Orders */}
          {paginatedOrders.length === 0 && (
            <div className="py-12 text-center text-sm text-gray-400">
              No orders found
            </div>
          )}

        </div>

        {/* Footer + Pagination */}
        <div className="flex flex-col gap-4 border-t px-5 py-4 sm:flex-row sm:items-center sm:justify-between">

          {/* Showing Count */}
          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-medium text-gray-700">
              {filteredOrders.length === 0
                ? 0
                : (currentPage - 1) *
                    itemsPerPage +
                  1}
            </span>{" "}
            to{" "}
            <span className="font-medium text-gray-700">
              {Math.min(
                currentPage * itemsPerPage,
                filteredOrders.length
              )}
            </span>{" "}
            of{" "}
            <span className="font-medium text-gray-700">
              {filteredOrders.length}
            </span>{" "}
            orders
          </p>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center gap-1">

              {/* Previous */}
              <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="flex items-center gap-1 rounded-md border border-gray-200 px-3 py-1.5 text-sm text-gray-600 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronLeft size={16} />
                Previous
              </button>

              {/* Page Numbers */}
              {Array.from(
                { length: totalPages },
                (_, index) => index + 1
              ).map((page) => (

                <button
                  key={page}
                  onClick={() =>
                    handlePageChange(page)
                  }
                  className={`min-w-9 rounded-md px-3 py-1.5 text-sm transition ${
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
                className="flex items-center gap-1 rounded-md border border-gray-200 px-3 py-1.5 text-sm text-gray-600 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next
                <ChevronRight size={16} />
              </button>

            </div>
          )}

        </div>

      </div>

      {/* Order Details Modal */}
      {selectedOrder && (

        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 px-4"
          onClick={() =>
            setSelectedOrder(null)
          }
        >

          <div
            onClick={(e) =>
              e.stopPropagation()
            }
            className="w-full max-w-lg rounded-2xl bg-white p-6"
          >

            {/* Modal Header */}
            <div className="mb-5 flex items-center justify-between">

              <div>
                <h2 className="text-xl font-bold">
                  Order Details
                </h2>

                <p className="text-sm text-gray-400">
                  {selectedOrder.id}
                </p>
              </div>

              <button
                onClick={() =>
                  setSelectedOrder(null)
                }
                className="text-gray-500 hover:text-gray-800"
              >
                <X size={20} />
              </button>

            </div>

            {/* Details */}
            <div className="space-y-4">

              <div className="flex justify-between border-b pb-3">
                <span className="text-gray-500">
                  Customer
                </span>

                <span className="font-medium">
                  {selectedOrder.customer}
                </span>
              </div>

              <div className="flex justify-between border-b pb-3">
                <span className="text-gray-500">
                  Phone
                </span>

                <span>
                  {selectedOrder.phone}
                </span>
              </div>

              <div className="flex justify-between border-b pb-3">
                <span className="text-gray-500">
                  Items
                </span>

                <span>
                  {selectedOrder.items}
                </span>
              </div>

              <div className="flex justify-between border-b pb-3">
                <span className="text-gray-500">
                  Amount
                </span>

                <span className="font-bold">
                  ₹
                  {selectedOrder.amount.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">
                  Status
                </span>

                <span
                  className={`rounded-full px-3 py-1 text-xs ${statusStyle(
                    selectedOrder.status
                  )}`}
                >
                  {selectedOrder.status}
                </span>
              </div>

            </div>

            {/* Close */}
            <button
              onClick={() =>
                setSelectedOrder(null)
              }
              className="mt-6 w-full rounded-lg bg-green-600 py-3 text-white hover:bg-green-700"
            >
              Close
            </button>

          </div>

        </div>

      )}

    </div>
  );
};

export default Orders;
