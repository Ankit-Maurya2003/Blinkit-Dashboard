import React from "react";
import { LogOut } from "lucide-react";

const LogoutModal = ({
  setShowLogoutModal,
  setActivePage,
}) => {
  return (
    <div
      className="fixed inset-0 z-400 flex items-center justify-center bg-black/50 px-4"
      onClick={() => setShowLogoutModal(false)}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
            <LogOut size={28} className="text-red-600" />
          </div>
        </div>

        <h2 className="mt-4 text-center text-xl font-bold text-gray-800">
          Confirm Logout
        </h2>

        <p className="mt-2 text-center text-sm text-gray-500">
          Are you sure you want to logout?
          <br />
          You will need to login again to access your account.
        </p>

        <div className="mt-6 flex gap-3">

          <button
            onClick={() => setShowLogoutModal(false)}
            className="w-full rounded-lg border border-gray-300 bg-white py-3 font-medium text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              setShowLogoutModal(false);
              setActivePage("Dashboard");
            }}
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
