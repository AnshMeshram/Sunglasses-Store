import React, { useState } from 'react';
import { BsFillBagFill } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { useCart } from '../context/CartContext';
import './Card.css';

function Card({ img, title, star, reviews, prevPrice, newPrice, id, category, color, company }) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    const product = {
      id,
      img,
      title,
      star,
      reviews,
      prevPrice,
      newPrice,
      category,
      color,
      company
    };
    
    addToCart(product);
    setIsAdded(true);
    
    // Reset button state after 2 seconds
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <div className="card">
      <img src={img} alt={title} className="card-img" />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <div className="card-reviews">
          <AiFillStar className="rating-star" />
          <AiFillStar className="rating-star" />
          <AiFillStar className="rating-star" />
          <AiFillStar className="rating-star" />
          <span className="total-reviews">{reviews}</span>
        </div>
        <div className="card-price">
          <del>{prevPrice}</del> ${newPrice}
        </div>
        <button 
          className={`add-to-cart-btn ${isAdded ? 'added' : ''}`}
          onClick={handleAddToCart}
        >
          <BsFillBagFill className="bag-icon" />
          {isAdded ? 'Added!' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}

export default Card;