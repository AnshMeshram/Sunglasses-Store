import React from 'react';
import './Products.css';
import Card from '../components/Card';

function Products({ results }) {
  return (
    <div className="product-card-container">
     {results.map((product, index) => (
  <Card
    key={`${product.id}-${index}`} // Combines id with index to guarantee uniqueness
        img={product.images[0]?.src || 'default-image.jpg'}
        title={product.title}
        star={product.stars}
        review={product.reviews}
        newPrice={product.newPrice}
        prevPrice={product.prevPrice}
      />
    ))}
    
    </div>
  );
}

export default Products;
