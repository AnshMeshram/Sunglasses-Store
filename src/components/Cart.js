import React from "react";
import { FaTimes, FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import "./Cart.css";

function Cart({ 
  isOpen, 
  onClose, 
  cartItems, 
  updateQuantity, 
  removeFromCart, 
  clearCart 
}) {
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + (parseFloat(item.newPrice) * (item.quantity || 1));
    }, 0).toFixed(2);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="cart-overlay" onClick={onClose}></div>
      <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <div className="cart-title">
            <MdShoppingCart className="cart-icon" />
            <h2>Shopping Cart ({getTotalItems()})</h2>
          </div>
          <button className="close-cart-btn" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <MdShoppingCart className="empty-cart-icon" />
              <h3>Your cart is empty</h3>
              <p>Add some sunglasses to get started!</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-image">
                      <img 
                        src={item.images?.[0]?.src || item.img} 
                        alt={item.title} 
                      />
                    </div>
                    <div className="cart-item-details">
                      <h4 className="cart-item-title">{item.title}</h4>
                      <div className="cart-item-price">
                        ${parseFloat(item.newPrice).toFixed(2)}
                      </div>
                      <div className="quantity-controls">
                        <button 
                          className="quantity-btn"
                          onClick={() => {
                            const newQty = (item.quantity || 1) - 1;
                            if (newQty <= 0) {
                              removeFromCart(item.id);
                            } else {
                              updateQuantity(item.id, newQty);
                            }
                          }}
                        >
                          <FaMinus />
                        </button>
                        <span className="quantity">{item.quantity || 1}</span>
                        <button 
                          className="quantity-btn"
                          onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                        >
                          <FaPlus />
                        </button>
                      </div>
                    </div>
                    <button 
                      className="remove-item-btn"
                      onClick={() => removeFromCart(item.id)}
                      title="Remove item"
                    >
                      <FaTrash />
                    </button>
                  </div>
                ))}
              </div>

              <div className="cart-footer">
                <div className="cart-total">
                  <div className="total-row">
                    <span>Subtotal:</span>
                    <span className="total-price">${getTotalPrice()}</span>
                  </div>
                  <div className="total-row">
                    <span>Shipping:</span>
                    <span className="shipping-price">Free</span>
                  </div>
                  <div className="total-row final-total">
                    <span>Total:</span>
                    <span className="total-price">${getTotalPrice()}</span>
                  </div>
                </div>
                
                <div className="cart-actions">
                  <button className="clear-cart-btn" onClick={clearCart}>
                    Clear Cart
                  </button>
                  <button className="checkout-btn">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;