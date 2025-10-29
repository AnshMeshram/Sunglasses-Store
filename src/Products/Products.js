import React from "react";
import "./Products.css";
import Card from "../components/Card";

function Products({ results, addToCart, cartItems }) {
  return (
    <div className="product-card-container">
      {results.map((product, index) => (
        <Card
          key={`${product.id}-${index}`} // Combines id with index to guarantee uniqueness
          product={product}
          img={product.images[0]?.src || "default-image.jpg"}
          addToCart={addToCart}
          cartItems={cartItems}
        />
      ))}
    </div>
  );
}

export default Products;
