import React from 'react';
import { PiBagDuotone } from 'react-icons/pi';
import { RiStarSmileFill } from 'react-icons/ri';

function Card({ img, title, star, review, newPrice, prevPrice }) {
  return (
    <div className="product-card">
      <img
        src={img}
        alt={title}
        className="product-card-image"
      />
      <div className="product-card-details">
        <h3 className="product-card-title">{title}</h3>
        <div className="product-card-reviews">
          {[...Array(5)].map((_, i) => (
            <RiStarSmileFill
              key={i}
              className={`ratings-star ${i < Math.round(star) ? 'filled' : ''}`}
            />
          ))}
          <span className="total-reviews">{review}</span>
        </div>
        <div className="product-card-price">
          <div className="product-price">
            {prevPrice && <del>${prevPrice.toFixed(2)}</del>} ${newPrice.toFixed(2)}
          </div>
        </div>
      </div>
      <div className="product-bag">
        <PiBagDuotone className="bag-icon" />
      </div>
    </div>
  );
}

export default Card;
