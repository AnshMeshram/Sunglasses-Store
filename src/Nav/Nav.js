import React from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaMoon, FaSun } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi";
import { MdShoppingCart } from "react-icons/md";
import "./Nav.css";

function Nav({ query, handleInputChange, cartCount = 0, theme, toggleTheme, toggleCart }) {
  return (
    <div className="nav-container">
      <input
        type="text"
        className="search-input"
        placeholder="Enter your search sunglasses"
        value={query}
        onChange={handleInputChange}
      />
      <div className="profile-container">
        <button className="nav-icon-button" aria-label="Favorites">
          <FaHeart className="nav-icons" />
        </button>
        <button 
          className="nav-icon-button cart-button" 
          aria-label="Shopping Cart"
          onClick={toggleCart}
        >
          <MdShoppingCart className="nav-icons" />
          {cartCount > 0 && (
            <span className="cart-badge" role="status" aria-live="polite">
              {cartCount}
            </span>
          )}
        </button>
        <button 
          className="nav-icon-button theme-toggle" 
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? (
            <FaMoon className="nav-icons" />
          ) : (
            <FaSun className="nav-icons" />
          )}
        </button>
        <Link to="/signup" className="profile-link">
          <HiOutlineUserCircle className="nav-icons" />
        </Link>
      </div>
    </div>
  );
}

export default Nav;