import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './SignupNav.css';

function SignupNav() {
  return (
    <nav className="signup-nav">
      <div className="signup-nav-container">
        {/* Logo Section */}
        <Link to="/" className="signup-nav-logo">
          <img src={logo} alt="Sunglasses Store" className="signup-nav-logo-img" />
          <span className="signup-nav-brand">Sunglasses Store</span>
        </Link>

        {/* Navigation Links */}
        <div className="signup-nav-links">
          <Link to="/" className="signup-nav-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span>Home</span>
          </Link>
          
          <Link to="/" className="signup-nav-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span>Shop</span>
          </Link>

          <Link to="/signup" className="signup-nav-link active">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span>Sign Up</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default SignupNav;
