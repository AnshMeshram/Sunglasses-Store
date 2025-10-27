import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Nav from "./Nav/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Rec";
import "./index.css";
import { products as data } from "./db/data";
import SignUp from "./Signup/Signup";
import Footer from "./components/Footer";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [query, setQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem("cart");
      return raw ? JSON.parse(raw) : [];
    } catch (err) {
      console.error("Failed to read cart from localStorage", err);
      return [];
    }
  });

  const location = useLocation();

  // Toggle sidebar for mobile
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Search and filter logic
  const handleInputChange = (event) => setQuery(event.target.value);
  const handleClick = (event) => setSelectedCategory(event.target.value);

  const handleChange = (event) => {
    if (event.target.name === "newPrice") {
      setSelectedPrice(event.target.value);
    } else {
      setSelectedCategory(event.target.value);
    }
    closeSidebar();
  };

  const filteredData = (products, selected, query, priceRange) => {
    let filteredData = data;

    // Filter by search query
    if (query) {
      filteredData = filteredData.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Filter by category/color/company
    if (selected) {
      filteredData = filteredData.filter(
        ({ category, color, company, title }) =>
          category === selected.toLowerCase() ||
          color === selected.toLowerCase() ||
          company === selected.toLowerCase() ||
          title.toLowerCase().includes(selected.toLowerCase())
      );
    }

    // Filter by price range
    if (priceRange) {
      filteredData = filteredData.filter((item) => {
        const price = parseFloat(item.newPrice);
        switch (priceRange) {
          case "0-50":
            return price <= 50;
          case "100-150":
            return price >= 100 && price <= 150;
          case "150+":
            return price > 150;
          default:
            return true;
        }
      });
    }

    return filteredData;
  };

  const result = filteredData(data, selectedCategory, query, selectedPrice);
  // persist cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (err) {
      console.error("Failed to save cart to localStorage", err);
    }
  }, [cart]);

  const addToCart = (product) => {
    if (!product || !product.id) return;
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        // toggle: remove if already in cart
        return prev.filter((p) => p.id !== product.id);
      }
      return [...prev, product];
    });
  };
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      {(location.pathname !== "/signup" ||
        location.pathname === "/signup/") && (
        <>
          {/* Mobile Menu Toggle Button */}
          <button
            className="menu-toggle"
            onClick={toggleSidebar}
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          {/* Overlay for mobile */}
          <Sidebar handleChange={handleChange} isOpen={isSidebarOpen} />

          <Nav
            query={query}
            handleInputChange={handleInputChange}
            cartCount={cart.length}
          />
          <Recommended handleClick={handleClick} />
          <Products results={result} addToCart={addToCart} cartItems={cart} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
