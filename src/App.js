import React, { useState } from 'react';
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
  const [query, setQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
    if (event.target.name === 'newPrice') {
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
          case '0-50':
            return price <= 50;
          case '100-150':
            return price >= 100 && price <= 150;
          case '150+':
            return price > 150;
          default:
            return true;
        }
      });
    }

    return filteredData;
  };

  const result = filteredData(data, selectedCategory, query, selectedPrice);
  
  // Check if we're on the signup page
  const isSignupPage = location.pathname === '/signup';

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

            <Nav query={query} handleInputChange={handleInputChange} />
            <Recommended handleClick={handleClick} />
            <Products results={result} />
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;