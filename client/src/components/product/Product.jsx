// Product.js
import React from "react";
import "./Product.css";

const Product = ({ name, description, price, imageUrl }) => {
  return (
    <div className="product">
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>${price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;