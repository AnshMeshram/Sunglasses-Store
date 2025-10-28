import { useEffect } from 'react';
import { FaCheck, FaShoppingCart, FaTimes } from 'react-icons/fa';
import './AddedToCartPopup.css';

function AddedToCartPopup({ 
  isVisible, 
  onClose, 
  productName, 
  productImage, 
  productPrice,
  cartCount,
  onViewCart
}) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <>
      <div className="popup-overlay" onClick={onClose}></div>
      <div className={`added-popup ${isVisible ? 'show' : ''}`}>
        <button className="popup-close-btn" onClick={onClose}>
          <FaTimes />
        </button>
        
        <div className="popup-header">
          <div className="success-icon">
            <FaCheck />
          </div>
          <h3>Added to Cart!</h3>
        </div>

        <div className="popup-product">
          <div className="popup-product-image">
            <img src={productImage} alt={productName} />
          </div>
          <div className="popup-product-details">
            <h4>{productName}</h4>
            <p className="popup-price">${productPrice}</p>
          </div>
        </div>

        <div className="popup-cart-info">
          <FaShoppingCart className="cart-icon" />
          <span>Cart ({cartCount} {cartCount === 1 ? 'item' : 'items'})</span>
        </div>

        <div className="popup-actions">
          <button className="continue-shopping-btn" onClick={onClose}>
            Continue Shopping
          </button>
          <button className="view-cart-btn" onClick={onViewCart}>
            <FaShoppingCart />
            View Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default AddedToCartPopup;