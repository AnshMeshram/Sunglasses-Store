import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi";
import { MdShoppingCart } from "react-icons/md";
import { useCart } from "../context/CartContext";
import MiniCart from "../components/MiniCart_temp";
import "./Nav.css";

function Nav({ query, handleInputChange }) {
  const { cartItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Calculate total items in cart
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter your search sunglasses"
          value={query}
          onChange={handleInputChange}
        />
        <div className="profile-container">
          <a href="#">
            <FaHeart className="nav-icons" />
          </a>
          
          {/* Cart Icon with Badge */}
          <div 
            className="cart-wrapper"
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            <MdShoppingCart className={`nav-icons ${totalItems > 0 ? 'in-cart' : ''}`} />
            {totalItems > 0 && (
              <span className="cart-badge">{totalItems}</span>
            )}
          </div>

          <Link to="/signup" className="profile-link">
            <HiOutlineUserCircle className="nav-icons" />
          </Link>
        </div>
      </div>

      {/* Mini Cart Dropdown */}
      <MiniCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}

export default Nav;