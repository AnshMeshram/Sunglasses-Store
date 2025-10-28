import React from "react";
import "./Footer.css";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const socialLinks = [
  { name: "Instagram", url: "https://instagram.com", icon: <FaInstagram /> },
  { name: "Facebook", url: "https://facebook.com", icon: <FaFacebookF /> },
  { name: "Twitter", url: "https://twitter.com", icon: <FaTwitter /> },
  { name: "LinkedIn", url: "https://linkedin.com", icon: <FaLinkedinIn /> },
];

function Footer({ variant = "default" }) {
  const rootClass = `site-footer ${variant === "overlay" ? "site-footer--overlay" : ""}`;
  const Icon = ({ name }) => {
    switch (name) {
      case "Instagram":
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.51 5.51 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zM18 6.2a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/>
          </svg>
        );
      case "Facebook":
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M13 22v-9h3l1-4h-4V7a2 2 0 0 1 2-2h2V1h-3a6 6 0 0 0-6 6v2H6v4h3v9z"/>
          </svg>
        );
      case "Twitter":
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M22 5.8a7.8 7.8 0 0 1-2.2.6 3.8 3.8 0 0 0 1.7-2.1 7.7 7.7 0 0 1-2.4.9A3.9 3.9 0 0 0 12 8.4a11.1 11.1 0 0 1-8-4.1 3.9 3.9 0 0 0 1.2 5.2 3.8 3.8 0 0 1-1.8-.5v.1a3.9 3.9 0 0 0 3.1 3.8 3.9 3.9 0 0 1-1 .1 3.6 3.6 0 0 1-.7-.1 3.9 3.9 0 0 0 3.6 2.7A7.9 7.9 0 0 1 2 18.6a11 11 0 0 0 6 1.8c7.2 0 11.2-6 11.2-11.2v-.5A8 8 0 0 0 22 5.8z"/>
          </svg>
        );
      default:
        return null;
    }
  };
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