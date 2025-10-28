import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import Nav from './Nav/Nav';
import Products from './Products/Products';
import Recommended from './Recommended/Rec';
import './index.css';
import { products as data } from './db/data';
import SignUp from './Signup/Signup';
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

  // Sync cart across browser tabs
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "cart") {
        try {
          const newCart = e.newValue ? JSON.parse(e.newValue) : [];
          setCart(newCart);
        } catch (err) {
          console.error("Failed to parse cart from storage event", err);
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Add item to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Check if item already exists in cart
      const existingItem = prevCart.find((item) => item.id === product.id);
      
      if (existingItem) {
        // If exists, remove it (toggle off)
        const updatedCart = prevCart.filter((item) => item.id !== product.id);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      } else {
        // If not exists, add it (toggle on)
        const updatedCart = [...prevCart, product];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      }
    });
  };

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

  return (
    <div>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={
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
        } />
      </Routes>
    </div>
  );
}

export default App;
