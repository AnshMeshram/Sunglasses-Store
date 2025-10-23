 
import "./Footer.css";

 
const socialLinks = [
  { name: "Instagram", url: "https://instagram.com" },
  { name: "Facebook", url: "https://facebook.com" },
  { name: "Twitter", url: "https://twitter.com" },
];

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
             
            {socialLinks.map((link) => (
              <a
                key={link.name}  
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="social-link"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
         
        <small>
          © 2025 Alizay Ayesha. Designed & Built with ❤️. All rights reserved.
        </small>
      </div>
    </footer>
  );
}

export default Footer;