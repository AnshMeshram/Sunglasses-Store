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
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
    closeSidebar(); // Close sidebar after selection on mobile
  };
  const handleClick = (event) => setSelectedCategory(event.target.value);

  const filteredData = (products, selected, query) => {
    let filteredData = data;
    if (query) {
      filteredData = filteredData.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
    }
    if (selected) {
      filteredData = filteredData.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected.toLowerCase() ||
          color === selected.toLowerCase() ||
          company === selected.toLowerCase() ||
          newPrice === selected.toLowerCase() ||
          title.toLowerCase().includes(selected.toLowerCase())
      );
    }
    return filteredData;
  };

  const result = filteredData(data, selectedCategory, query);

  return (
    <div>
      <Routes>
        <Route path="/SignUp/SignUp" element={<SignUp />} />
      </Routes>

      {location.pathname !== '/SignUp/SignUp' && (
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
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;