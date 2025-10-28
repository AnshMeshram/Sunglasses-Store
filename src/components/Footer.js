import React from "react";
import "./Footer.css";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // ✅ new Twitter (X) logo

const socialLinks = [
  { name: "Instagram", url: "https://instagram.com", icon: <FaInstagram /> },
  { name: "Facebook", url: "https://facebook.com", icon: <FaFacebookF /> },
  { name: "X", url: "https://twitter.com", icon: <FaXTwitter /> }, // ✅ updated
  { name: "LinkedIn", url: "https://linkedin.com", icon: <FaLinkedinIn /> },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-section footer-brand">
          <h2 className="brand-title">Sunglasses Store 🕶️</h2>
          <p className="brand-text">
            Premium eyewear for every occasion — stylish, durable, and built for comfort.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section footer-links">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-list">
            <li><a href="#home" className="footer-link">Home</a></li>
            <li><a href="#shop" className="footer-link">Shop</a></li>
            <li><a href="#about" className="footer-link">About</a></li>
            <li><a href="#contact" className="footer-link">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section footer-contact">
          <h4 className="footer-heading">Get in Touch</h4>
          <ul className="footer-list">
            <li><a href="mailto:info@sunglasses-store.com" className="footer-link">info@sunglasses-store.com</a></li>
            <li>+1 (555) 123-4567</li>
            <li>123 Sunny Ave, Beach City</li>
          </ul>
        </div>

        {/* Social Section */}
        <div className="footer-section footer-social">
          <h4 className="footer-heading">Follow Us</h4>
          <div className="social-icons">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="social-icon"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <small>
          © <strong>Sunglasses Store</strong> — All Rights Reserved {new Date().getFullYear()}
        </small>
      </div>
    </footer>
  );
}

export default Footer;
