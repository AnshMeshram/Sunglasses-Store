import { useState } from "react";
import { RiStarSmileFill } from "react-icons/ri";
import { FaCheck, FaPlus, FaMinus, FaShoppingCart } from "react-icons/fa";
import "./Card.css";

function Card({
  product,
  img,
  title,
  star,
  review,
  newPrice,
  prevPrice,
  addToCart,
  cartItems,
}) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showAddedPopup, setShowAddedPopup] = useState(false);
  const [quantity, setQuantity] = useState(1);

  // Support both old prop-style usage and product object
  const image = product?.images?.[0]?.src || img;
  const titleText = product?.title || title;
  const starVal = product?.stars ?? star ?? 0;
  const reviewCount = product?.reviews ?? review ?? 0;
  const newP = product?.newPrice ?? newPrice ?? 0;
  const prevP = product?.prevPrice ?? prevPrice;
  const id = product?.id;

  const cartItem = Array.isArray(cartItems) && id 
    ? cartItems.find((p) => p.id === id) 
    : null;
  const isInCart = !!cartItem;

  const handleAddToCart = () => {
    if (typeof addToCart === "function") {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 600);

      // Show added popup
      setShowAddedPopup(true);
      setTimeout(() => setShowAddedPopup(false), 2000);

      // Pass full product with quantity
      const productToAdd = product || {
        id,
        title: titleText,
        images: [{ src: image }],
        newPrice: newP,
        prevPrice: prevP,
      };

      // Add with current quantity
      addToCart({ ...productToAdd, quantity });
    }
  };

  const handleQuantityChange = (delta) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  const discountPercentage = prevP ? Math.round(((prevP - newP) / prevP) * 100) : 0;

  return (
    <div className={`product-card ${isAnimating ? 'adding-to-cart' : ''} ${isInCart ? 'item-in-cart' : ''}`}>
      <div className="product-image-container">
        <img src={image} alt={titleText} className="product-card-image" />
        {discountPercentage > 0 && (
          <div className="discount-badge">-{discountPercentage}%</div>
        )}
      </div>

      <div className="product-card-details">
        <h3 className="product-card-title">{titleText}</h3>
        <div className="product-card-reviews">
          <div className="stars-container">
            {[...Array(5)].map((_, i) => (
              <RiStarSmileFill
                key={i}
                className={`ratings-star ${i < Math.round(starVal) ? "filled" : ""}`}
              />
            ))}
          </div>
          <span className="total-reviews">({reviewCount})</span>
        </div>
        
        <div className="product-card-price-row">
          <div className="price-container">
            <span className="current-price">${parseFloat(newP).toFixed(2)}</span>
            {prevP && (
              <span className="original-price">${parseFloat(prevP).toFixed(2)}</span>
            )}
          </div>
          
          {!isInCart ? (
            <div className="add-to-cart-section">
              <div className="quantity-selector">
                <button 
                  className="qty-btn"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                >
                  <FaMinus />
                </button>
                <span className="qty-display">{quantity}</span>
                <button 
                  className="qty-btn"
                  onClick={() => handleQuantityChange(1)}
                >
                  <FaPlus />
                </button>
              </div>
              <button
                className="add-to-cart-btn-inline"
                onClick={handleAddToCart}
                title="Add to cart"
              >
                <FaShoppingCart className="btn-icon" />
                <span>Add</span>
              </button>
            </div>
          ) : (
            <div className="in-cart-badge">
              <FaCheck className="check-icon" />
              <span>In Cart ({cartItem?.quantity || 1})</span>
            </div>
          )}
        </div>
      </div>

      {/* Added to Cart Popup */}
      {showAddedPopup && (
        <div className="added-to-cart-popup">
          <div className="popup-content">
            <FaCheck className="popup-check-icon" />
            <span className="popup-text">Added {quantity} to Cart!</span>
            <FaShoppingCart className="popup-cart-icon" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
