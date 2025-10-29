import { useState } from "react";
import { PiBagDuotone } from "react-icons/pi";
import { RiStarSmileFill } from "react-icons/ri";
import { FaCheck, FaPlus, FaShoppingCart } from "react-icons/fa";
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

  // Support both old prop-style usage and product object
  const image = product?.images?.[0]?.src || img;
  const titleText = product?.title || title;
  const starVal = product?.stars ?? star ?? 0;
  const reviewCount = product?.reviews ?? review ?? 0;
  const newP = product?.newPrice ?? newPrice ?? 0;
  const prevP = product?.prevPrice ?? prevPrice;
  const id = product?.id;

  const isInCart =
    Array.isArray(cartItems) && id && cartItems.some((p) => p.id === id);

  const handleBagClick = () => {
    if (typeof addToCart === "function") {
      const wasInCart = isInCart;

      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 600);

      // Show added popup only when adding (not removing)
      if (!wasInCart) {
        setShowAddedPopup(true);
        setTimeout(() => setShowAddedPopup(false), 2000);
      }

      // pass full product when available, otherwise a minimal object
      addToCart(
        product || {
          id,
          title: titleText,
          images: [{ src: image }],
          newPrice: newP,
          prevPrice: prevP,
        }
      );
    }
  };

  const discountPercentage = prevP ? Math.round(((prevP - newP) / prevP) * 100) : 0;

  return (
    <div className={`product-card ${isAnimating ? 'adding-to-cart' : ''} ${isInCart ? 'item-in-cart' : ''}`}>
      <div className="product-image-container">
        <img src={image} alt={titleText} className="product-card-image" />
        {discountPercentage > 0 && (
          <div className="discount-badge">-{discountPercentage}%</div>
        )}
        <div className="product-overlay">
          <button
            className={`add-to-cart-btn ${isInCart ? 'in-cart' : ''}`}
            onClick={handleBagClick}
            title={isInCart ? "Remove from cart" : "Add to cart"}
          >
            {isInCart ? (
              <>
                <FaCheck className="btn-icon" />
                <span>In Cart</span>
              </>
            ) : (
              <>
                <FaPlus className="btn-icon" />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>

      <div className="product-card-details">
        <h3 className="product-card-title">{titleText}</h3>
        <div className="product-card-reviews">
          <div className="stars-container">
            {[...Array(5)].map((_, i) => (
              <RiStarSmileFill
                key={i}
                className={`ratings-star ${i < Math.round(starVal) ? "filled" : ""
                  }`}
              />
            ))}
          </div>
          <span className="total-reviews">({reviewCount})</span>
        </div>
        <div className="product-card-price">
          <div className="price-container">
            <span className="current-price">${parseFloat(newP).toFixed(2)}</span>
            {prevP && (
              <span className="original-price">${parseFloat(prevP).toFixed(2)}</span>
            )}
          </div>
        </div>
      </div>

      <div
        className={`quick-add-icon ${isInCart ? "in-cart" : ""}`}
        onClick={handleBagClick}
        title={isInCart ? "Remove from cart" : "Quick add to cart"}
      >
        <PiBagDuotone className="bag-icon" />
      </div>

      {/* Added to Cart Popup */}
      {showAddedPopup && (
        <div className="added-to-cart-popup">
          <div className="popup-content">
            <FaCheck className="popup-check-icon" />
            <span className="popup-text">Added to Cart!</span>
            <FaShoppingCart className="popup-cart-icon" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
