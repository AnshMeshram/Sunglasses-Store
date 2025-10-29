import React from 'react';
import { useCart } from '../context/CartContext';
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import './MiniCart.css';

function MiniCart({ isOpen, onClose }) {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity);
    }
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="cart-overlay" onClick={onClose}></div>}

      {/* Mini Cart Sidebar */}
      <div className={`mini-cart ${isOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="cart-header">
          <h2>Shopping Cart ({cartItems.length})</h2>
          <button className="close-btn" onClick={onClose}>
            <AiOutlineClose />
          </button>
        </div>

        {/* Cart Items */}
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <p>Your cart is empty</p>
              <span>Add some sunglasses to get started!</span>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt={item.title} className="cart-item-img" />
                
                <div className="cart-item-details">
                  <h3 className="cart-item-title">{item.title}</h3>
                  <p className="cart-item-price">${item.newPrice}</p>

                  {/* Quantity Controls */}
                  <div className="quantity-controls">
                    <button
                      className="qty-btn"
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    >
                      <AiOutlineMinus />
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    >
                      <AiOutlinePlus />
                    </button>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  <BsTrash />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span className="total-price">${getCartTotal().toFixed(2)}</span>
            </div>
            <button className="checkout-btn">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default MiniCart;