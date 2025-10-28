import React from "react";
import "./Footer.css";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const socialLinks = [
  { name: "Instagram", url: "https://instagram.com", icon: <FaInstagram /> },
  { name: "Facebook", url: "https://facebook.com", icon: <FaFacebookF /> },
  { name: "Twitter", url: "https://twitter.com", icon: <FaTwitter /> },
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
            Premium eyewear for every occasion stylish, durable, and built for comfort.
          </p>
        </div>

        {/* Contact Section */}
        <div className="footer-section footer-contact">
          <h4 className="footer-heading">Get in Touch</h4>
          <ul className="footer-list">
            <li>
              <a href="mailto:info@sunglasses-store.com" className="footer-link">
                info@sunglasses-store.com
              </a>
            </li>
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
          © {new Date().getFullYear()} <strong>Sunglasses Store</strong> — Designed & Built with ❤️ by{" "}
          <strong>Sunglasses Store</strong>.
        </small>
      </div>
    </footer>
  );
}

export default Footer;