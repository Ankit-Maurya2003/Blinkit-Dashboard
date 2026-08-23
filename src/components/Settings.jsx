// import React from "react";

// const Settings = () => {
//   return (
//     <div>
//       <h1 className="text-3xl font-bold">Settings</h1>

//       <p className="mt-2 text-gray-600">
//         Settings will appear here.
//       </p>
//     </div>
//   );
// };

// export default Settings;

import React, { useState } from "react";
import {
  User,
  Store,
  Bell,
  Lock,
  Save,
} from "lucide-react";

const Settings = () => {

  const [activeTab, setActiveTab] = useState("General");

  const [general, setGeneral] = useState({
    storeName: "Blinkit Store",
    email: "admin@blinkit.com",
    phone: "9876543210",
    address: "New Delhi, India",
  });

  const [notifications, setNotifications] = useState({
    orders: true,
    users: true,
    products: false,
    offers: true,
  });

  const [password, setPassword] = useState({
    current: "",
    newPassword: "",
    confirm: "",
  });

  const [profile, setProfile] = useState({
    name: "Admin",
    email: "admin@blinkit.com",
  });

  const saveSettings = () => {
    alert("Settings saved successfully!");
  };

  const changePassword = (e) => {

    e.preventDefault();

    if (
      !password.current ||
      !password.newPassword ||
      !password.confirm
    ) {
      alert("Please fill all password fields");
      return;
    }

    if (password.newPassword !== password.confirm) {
      alert("New password and confirm password do not match");
      return;
    }

    alert("Password changed successfully!");

    setPassword({
      current: "",
      newPassword: "",
      confirm: "",
    });
  };

  const tabs = [
    {
      name: "General",
      icon: Store,
    },
    {
      name: "Profile",
      icon: User,
    },
    {
      name: "Notifications",
      icon: Bell,
    },
    {
      name: "Security",
      icon: Lock,
    },
  ];

  return (
    <div className="min-h-screen p-2 md:p-6">

      {/* Header */}
      <div className="mb-6">

        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Settings
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Manage your store and account settings
        </p>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* Sidebar */}
        <div className="bg-white border rounded-xl p-3 h-fit">

          {tabs.map((tab) => {

            const Icon = tab.icon;

            return (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm mb-1 transition ${
                  activeTab === tab.name
                    ? "bg-green-100 text-green-700 font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >

                <Icon size={18} />

                {tab.name}

              </button>
            );

          })}

        </div>

        {/* Content */}
        <div className="lg:col-span-3">

          {/* General */}
          {activeTab === "General" && (

            <div className="bg-white border rounded-xl p-6">

              <h2 className="text-lg font-bold text-gray-800">
                General Settings
              </h2>

              <p className="text-sm text-gray-400 mt-1 mb-6">
                Manage your store information
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Store Name
                  </label>

                  <input
                    value={general.storeName}
                    onChange={(e) =>
                      setGeneral({
                        ...general,
                        storeName: e.target.value,
                      })
                    }
                    className="w-full border rounded-lg px-4 py-3 outline-none focus:border-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>

                  <input
                    value={general.email}
                    onChange={(e) =>
                      setGeneral({
                        ...general,
                        email: e.target.value,
                      })
                    }
                    type="email"
                    className="w-full border rounded-lg px-4 py-3 outline-none focus:border-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone
                  </label>

                  <input
                    value={general.phone}
                    onChange={(e) =>
                      setGeneral({
                        ...general,
                        phone: e.target.value,
                      })
                    }
                    className="w-full border rounded-lg px-4 py-3 outline-none focus:border-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Address
                  </label>

                  <input
                    value={general.address}
                    onChange={(e) =>
                      setGeneral({
                        ...general,
                        address: e.target.value,
                      })
                    }
                    className="w-full border rounded-lg px-4 py-3 outline-none focus:border-green-500"
                  />
                </div>

              </div>

              <button
                onClick={saveSettings}
                className="mt-6 flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
              >
                <Save size={17} />
                Save Changes
              </button>

            </div>

          )}

          {/* Profile */}
          {activeTab === "Profile" && (

            <div className="bg-white border rounded-xl p-6">

              <h2 className="text-lg font-bold">
                Admin Profile
              </h2>

              <p className="text-sm text-gray-400 mt-1 mb-6">
                Update your administrator information
              </p>

              <div className="flex items-center gap-4 mb-6">

                <div className="w-20 h-20 rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-bold">
                  A
                </div>

                <div>
                  <h3 className="font-semibold">
                    {profile.name}
                  </h3>

                  <p className="text-sm text-gray-400">
                    Administrator
                  </p>
                </div>

              </div>

              <div className="space-y-5">

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name
                  </label>

                  <input
                    value={profile.name}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        name: e.target.value,
                      })
                    }
                    className="w-full border rounded-lg px-4 py-3 outline-none focus:border-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>

                  <input
                    value={profile.email}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        email: e.target.value,
                      })
                    }
                    className="w-full border rounded-lg px-4 py-3 outline-none focus:border-green-500"
                  />
                </div>

              </div>

              <button
                onClick={saveSettings}
                className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg"
              >
                Save Profile
              </button>

            </div>

          )}

          {/* Notifications */}
          {activeTab === "Notifications" && (

            <div className="bg-white border rounded-xl p-6">

              <h2 className="text-lg font-bold">
                Notifications
              </h2>

              <p className="text-sm text-gray-400 mt-1 mb-6">
                Choose which notifications you want to receive
              </p>

              <div className="space-y-5">

                {[
                  ["orders", "New Orders", "Get notified when a new order arrives."],
                  ["users", "New Users", "Get notified when a new user registers."],
                  ["products", "Product Updates", "Get notifications about product updates."],
                  ["offers", "Offers & Promotions", "Receive promotional notifications."],
                ].map(([key, title, description]) => (

                  <div
                    key={key}
                    className="flex items-center justify-between border-b pb-5"
                  >

                    <div>

                      <h3 className="font-medium text-gray-800">
                        {title}
                      </h3>

                      <p className="text-xs text-gray-400 mt-1">
                        {description}
                      </p>

                    </div>

                    <button
                      onClick={() =>
                        setNotifications({
                          ...notifications,
                          [key]: !notifications[key],
                        })
                      }
                      className={`w-12 h-6 rounded-full transition ${
                        notifications[key]
                          ? "bg-green-600"
                          : "bg-gray-300"
                      }`}
                    >

                      <span
                        className={`block w-5 h-5 bg-white rounded-full transition transform ${
                          notifications[key]
                            ? "translate-x-6"
                            : "translate-x-0.5"
                        }`}
                      />

                    </button>

                  </div>

                ))}

              </div>

              <button
                onClick={saveSettings}
                className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg"
              >
                Save Notifications
              </button>

            </div>

          )}

          {/* Security */}
          {activeTab === "Security" && (

            <div className="bg-white border rounded-xl p-6">

              <h2 className="text-lg font-bold">
                Security
              </h2>

              <p className="text-sm text-gray-400 mt-1 mb-6">
                Change your account password
              </p>

              <form
                onSubmit={changePassword}
                className="space-y-5"
              >

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Current Password
                  </label>

                  <input
                    type="password"
                    value={password.current}
                    onChange={(e) =>
                      setPassword({
                        ...password,
                        current: e.target.value,
                      })
                    }
                    className="w-full border rounded-lg px-4 py-3 outline-none focus:border-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    New Password
                  </label>

                  <input
                    type="password"
                    value={password.newPassword}
                    onChange={(e) =>
                      setPassword({
                        ...password,
                        newPassword: e.target.value,
                      })
                    }
                    className="w-full border rounded-lg px-4 py-3 outline-none focus:border-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Confirm Password
                  </label>

                  <input
                    type="password"
                    value={password.confirm}
                    onChange={(e) =>
                      setPassword({
                        ...password,
                        confirm: e.target.value,
                      })
                    }
                    className="w-full border rounded-lg px-4 py-3 outline-none focus:border-green-500"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
                >
                  Change Password
                </button>

              </form>

            </div>

          )}

        </div>

      </div>

    </div>
  );
};

export default Settings;
