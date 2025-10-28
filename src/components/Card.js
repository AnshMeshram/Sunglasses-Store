import React from "react";
import { PiBagDuotone } from "react-icons/pi";
import { RiStarSmileFill } from "react-icons/ri";

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

  return (
    <div className="product-card">
      <img src={image} alt={titleText} className="product-card-image" />
      <div className="product-card-details">
        <h3 className="product-card-title">{titleText}</h3>
        <div className="product-card-reviews">
          {[...Array(5)].map((_, i) => (
            <RiStarSmileFill
              key={i}
              className={`ratings-star ${
                i < Math.round(starVal) ? "filled" : ""
              }`}
            />
          ))}
          <span className="total-reviews">{reviewCount}</span>
        </div>
        <div className="product-card-price">
          <div className="product-price">
            {prevP && <del>${parseFloat(prevP).toFixed(2)}</del>} $
            {parseFloat(newP).toFixed(2)}
          </div>
        </div>
      </div>
      <div
        className="product-bag"
        onClick={handleBagClick}
        title={isInCart ? "Remove from cart" : "Add to cart"}
      >
        <PiBagDuotone className={`bag-icon ${isInCart ? "in-cart" : ""}`} />
      </div>
    </div>
  );
}

export default Card;
