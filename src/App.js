import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import Nav from './Nav/Nav';
import Products from './Products/Products';
import Recommended from './Recommended/Rec';
import './index.css';
import { products as data } from './db/data'; // Ensure the correct import of the products data
import SignUp from './Signup/Signup';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState('');

  // Get the current location (URL)
  const location = useLocation();

  // Search and filter logic
  const handleInputChange = (event) => setQuery(event.target.value);
  const handleChange = (event) => setSelectedCategory(event.target.value);
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
        {/* Separate route for SignUp */}
        <Route path="/SignUp/SignUp" element={<SignUp />} />
      </Routes>

      {/* Conditionally render the sidebar, navbar, products, and other sections only when you're not on the signup page */}
      {location.pathname !== '//SignUp/SignUp' && (
        <>
          <Sidebar handleChange={handleChange} />
          <Nav query={query} handleInputChange={handleInputChange} />
          <Recommended handleClick={handleClick} />
          <Products results={result} />
        </>
      )}
    </div>
  );
}

export default App;
