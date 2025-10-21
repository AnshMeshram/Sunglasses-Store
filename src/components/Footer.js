import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-left">
          <h4 className="footer-brand">Sunglasses Store</h4>
          <p className="footer-desc">
            Handpicked eyewear for every season. Stylish, protective, and made
            for you.
          </p>
          <p className="footer-copy">
            © 2025 Alizay Ayesha. All rights reserved.
          </p>
        </div>

        <div className="footer-center">
          <h5 className="footer-title">Contact</h5>
          <p className="footer-item">
            Email:{" "}
            <a href="mailto:info@sunglasses-store.com">
              info@sunglasses-store.com
            </a>
          </p>
          <p className="footer-item">Phone: +1 (555) 123-4567</p>
          <p className="footer-item">Location: 123 Sunny Ave, Beach City</p>
        </div>

        <div className="footer-right">
          <h5 className="footer-title">Follow</h5>
          <div className="social-links">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-link"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="social-link"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="social-link"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <small>Designed by Alizay Ayesha • All rights reserved 2025</small>
      </div>
    </footer>
  );
}

export default Footer;
