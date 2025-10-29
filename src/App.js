import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Sidebar from './Sidebar/Sidebar';
import Nav from './Nav/Nav';
import Products from './Products/Products';
import Recommended from './Recommended/Rec';
import Cart from './components/Cart';
import Notification from './components/Notification';
import AddedToCartPopup from './components/AddedToCartPopup';
import './index.css';
import { products as data } from './db/data';
import SignUp from './Signup/Signup';
import Footer from "./components/Footer";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [query, setQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [notification, setNotification] = useState({ message: '', type: 'success', isVisible: false });
  const [addedToCartPopup, setAddedToCartPopup] = useState({ 
    isVisible: false, 
    product: null 
  });
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

  // Theme state with system preference detection
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved) return saved;
      // Check system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
      return 'light';
    } catch (err) {
      return 'light';
    }
  });

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      // Only auto-switch if user hasn't manually set a preference
      const savedTheme = localStorage.getItem('theme');
      if (!savedTheme) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

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

  // Show notification
  const showNotification = (message, type = 'success') => {
    setNotification({ message, type, isVisible: true });
  };

  const hideNotification = () => {
    setNotification(prev => ({ ...prev, isVisible: false }));
  };

  // Add item to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Check if item already exists in cart
      const existingItem = prevCart.find((item) => item.id === product.id);
      
      if (existingItem) {
        // If exists, remove it (toggle off)
        const updatedCart = prevCart.filter((item) => item.id !== product.id);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        showNotification(`${product.title} removed from cart`, 'remove');
        return updatedCart;
      } else {
        // If not exists, add it with quantity 1
        const productWithQuantity = { ...product, quantity: 1 };
        const updatedCart = [...prevCart, productWithQuantity];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        
        // Show both notification and popup
        showNotification(`${product.title} added to cart!`, 'success');
        setAddedToCartPopup({
          isVisible: true,
          product: productWithQuantity
        });
        
        return updatedCart;
      }
    });
  };

  // Update quantity of item in cart
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const itemToRemove = prevCart.find(item => item.id === productId);
      const updatedCart = prevCart.filter((item) => item.id !== productId);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      if (itemToRemove) {
        showNotification(`${itemToRemove.title} removed from cart`, 'remove');
      }
      return updatedCart;
    });
  };

  // Clear entire cart
  const clearCart = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
    showNotification('Cart cleared', 'remove');
  };

  // Toggle cart sidebar
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  // Close added to cart popup
  const closeAddedToCartPopup = () => {
    setAddedToCartPopup({ isVisible: false, product: null });
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
    <CartProvider>
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

              <Nav query={query} handleInputChange={handleInputChange} />
              <Recommended handleClick={handleClick} />
              <Products results={result} />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
