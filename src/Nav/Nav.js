import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi";
import { MdShoppingCart } from "react-icons/md";
import "./Nav.css";

function Nav({ query, handleInputChange, cartCount = 0 }) {
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
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </button>
        <button className="nav-icon-button" aria-label="Shopping Cart">
          <MdShoppingCart className="nav-icons" />
        </button>
        <Link to="/signup" className="profile-link">
          <HiOutlineUserCircle className="nav-icons" />
        </Link>
      </div>
    </div>
  );
}

export default Nav;