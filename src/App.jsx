import React, { useEffect, useState } from "react";

import Sidebar from "./components/Sidebar";
import MobileNavbar from "./components/MobileNavbar";
import Dashboard from "./components/Dashboard";
import Cate from "./components/Cate";
import AddCategory from "./components/AddCategory";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";
import Orders from "./components/Orders";
import Users from "./components/Users";
import Settings from "./components/Settings";
import LogoutModal from "./components/LogoutModal";

const defaultCategories = [
  {
    id: 1,
    name: "Fruits & Vegetables",
    icon: "🍎",
    status: "Active",
    products: 248,
  },
  {
    id: 2,
    name: "Dairy & Bread",
    icon: "🍞",
    status: "Active",
    products: 162,
  },
  {
    id: 3,
    name: "Snacks & Munchies",
    icon: "🍪",
    status: "Active",
    products: 214,
  },
  {
    id: 4,
    name: "Beverages",
    icon: "🥤",
    status: "Active",
    products: 189,
  },
  {
    id: 5,
    name: "Personal Care",
    icon: "🧴",
    status: "Active",
    products: 128,
  },
  {
    id: 6,
    name: "Household",
    icon: "🧹",
    status: "Inactive",
    products: 87,
  },
];

const defaultProducts = [
  {
    id: 1,
    name: "Apple - Red",
    category: "Fruits & Vegetables",
    price: 120,
    stock: 120,
    weight: "1 kg",
    description: "Fresh red apples",
    status: "Active",
    image: "",
  },
  {
    id: 2,
    name: "Milk - Toned 1L",
    category: "Dairy & Bread",
    price: 56,
    stock: 80,
    weight: "1 L",
    description: "Fresh toned milk",
    status: "Active",
    image: "",
  },
  {
    id: 3,
    name: "Lay's Classic Salted",
    category: "Snacks & Munchies",
    price: 20,
    stock: 200,
    weight: "50 g",
    description: "Classic salted chips",
    status: "Active",
    image: "",
  },
  {
    id: 4,
    name: "Coca Cola 1.5L",
    category: "Beverages",
    price: 75,
    stock: 150,
    weight: "1.5 L",
    description: "Refreshing soft drink",
    status: "Active",
    image: "",
  },
  {
    id: 5,
    name: "Dove Soap",
    category: "Personal Care",
    price: 45,
    stock: 90,
    weight: "100 g",
    description: "Moisturizing soap",
    status: "Active",
    image: "",
  },
];

const App = () => {
  const [activePage, setActivePage] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const [categories, setCategories] = useState(() => {
    const saved = localStorage.getItem("categories");
    return saved ? JSON.parse(saved) : defaultCategories;
  });

  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("products");
    return saved ? JSON.parse(saved) : defaultProducts;
  });

  const [editingCategory, setEditingCategory] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  // ---------------- CATEGORY ----------------

  const addCategory = (categoryData) => {
    const newCategory = {
      ...categoryData,
      id: Date.now(),
      products: 0,
    };

    setCategories((prev) => [...prev, newCategory]);
    setActivePage("Categories");
  };

  const updateCategory = (categoryData) => {
    setCategories((prev) =>
      prev.map((category) =>
        category.id === categoryData.id
          ? { ...category, ...categoryData }
          : category
      )
    );

    setEditingCategory(null);
    setActivePage("Categories");
  };

  const deleteCategory = (id) => {
    const category = categories.find((item) => item.id === id);

    const usedByProduct = products.some(
      (product) => product.category === category?.name
    );

    if (usedByProduct) {
      alert("This category is being used by a product.");
      return;
    }

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this category?"
    );

    if (!confirmDelete) return;

    setCategories((prev) => prev.filter((item) => item.id !== id));
  };

  const openAddCategory = () => {
    setEditingCategory(null);
    setActivePage("Add category");
  };

  const openEditCategory = (category) => {
    setEditingCategory(category);
    setActivePage("Add category");
  };

  // ---------------- PRODUCT ----------------

  const addProduct = (productData) => {
    const newProduct = {
      ...productData,
      id: Date.now(),
      price: Number(productData.price),
      stock: Number(productData.stock),
    };

    setProducts((prev) => [...prev, newProduct]);

    setCategories((prev) =>
      prev.map((category) =>
        category.name === productData.category
          ? { ...category, products: category.products + 1 }
          : category
      )
    );

    setActivePage("Product");
  };

  const updateProduct = (productData) => {
    const oldProduct = products.find(
      (product) => product.id === productData.id
    );

    setProducts((prev) =>
      prev.map((product) =>
        product.id === productData.id
          ? {
              ...productData,
              price: Number(productData.price),
              stock: Number(productData.stock),
            }
          : product
      )
    );

    if (oldProduct.category !== productData.category) {
      setCategories((prev) =>
        prev.map((category) => {
          if (category.name === oldProduct.category) {
            return {
              ...category,
              products: Math.max(0, category.products - 1),
            };
          }

          if (category.name === productData.category) {
            return {
              ...category,
              products: category.products + 1,
            };
          }

          return category;
        })
      );
    }

    setEditingProduct(null);
    setActivePage("Product");
  };

  const deleteProduct = (id) => {
    const product = products.find((item) => item.id === id);

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    setProducts((prev) => prev.filter((item) => item.id !== id));

    if (product) {
      setCategories((prev) =>
        prev.map((category) =>
          category.name === product.category
            ? {
                ...category,
                products: Math.max(0, category.products - 1),
              }
            : category
        )
      );
    }
  };

  const openAddProduct = () => {
    setEditingProduct(null);
    setActivePage("Add Product");
  };

  const openEditProduct = (product) => {
    setEditingProduct(product);
    setActivePage("Add Product");
  };

  // ---------------- NAVIGATION ----------------

  const navigate = (page) => {
    setActivePage(page);
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-green-200">
      <MobileNavbar
        onMenu={() => setSidebarOpen(true)}
      />

      <div className="flex min-h-screen">
        <Sidebar
          activePage={activePage}
          setActivePage={navigate}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          onLogout={() => setShowLogoutModal(true)}
        />

        <main className="flex-1 min-w-0 lg:ml-0 pt-16 lg:pt-0">
          <div className="min-h-screen p-4 md:p-6 lg:p-8">

            {activePage === "Dashboard" && (
              <Dashboard
                setActivePage={navigate}
                products={products}
                categories={categories}
              />
            )}

            {activePage === "Categories" && (
              <Cate
                categories={categories}
                onAdd={openAddCategory}
                onEdit={openEditCategory}
                onDelete={deleteCategory}
              />
            )}

            {activePage === "Add category" && (
              <AddCategory
                categories={categories}
                initialData={editingCategory}
                onSave={
                  editingCategory
                    ? updateCategory
                    : addCategory
                }
                onCancel={() => {
                  setEditingCategory(null);
                  setActivePage("Categories");
                }}
              />
            )}

            {activePage === "Product" && (
              <Products
                products={products}
                onAdd={openAddProduct}
                onEdit={openEditProduct}
                onDelete={deleteProduct}
              />
            )}

            {activePage === "Add Product" && (
              <AddProduct
                categories={categories}
                initialData={editingProduct}
                onSave={
                  editingProduct
                    ? updateProduct
                    : addProduct
                }
                onCancel={() => {
                  setEditingProduct(null);
                  setActivePage("Product");
                }}
              />
            )}

            {activePage === "Orders" && <Orders />}

            {activePage === "Users" && <Users />}

            {activePage === "Settings" && <Settings />}
          </div>
        </main>
      </div>

      {showLogoutModal && (
        <LogoutModal
          onCancel={() => setShowLogoutModal(false)}
          onLogout={() => {
            setShowLogoutModal(false);
            setActivePage("Dashboard");
          }}
        />
      )}
    </div>
  );
};

export default App;
