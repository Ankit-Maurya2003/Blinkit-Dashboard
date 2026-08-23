import React from "react";
import { LogOut } from "lucide-react";

const LogoutModal = ({ onCancel, onLogout }) => {
  return (
    <div
      onClick={onCancel}
      className="fixed inset-0 z-200 flex items-center justify-center bg-black/50 px-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
      >
        <div className="flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
            <LogOut
              size={28}
              className="text-red-600"
            />
          </div>
        </div>

        <h2 className="mt-4 text-center text-xl font-bold text-gray-800">
          Confirm Logout
        </h2>

        <p className="mt-2 text-center text-sm text-gray-500">
          Are you sure you want to logout?
          <br />
          You will need to login again.
        </p>

        <div className="mt-6 flex gap-3">
          <button
            onClick={onCancel}
            className="w-full rounded-lg border border-gray-300 py-3 font-medium text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={onLogout}
            className="w-full rounded-lg bg-red-600 py-3 font-medium text-white hover:bg-red-700"
          >
            Yes, Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
