// Product.jsx
import React, { useState } from "react";
import "./Product.css";
import { useAppContext } from "../../Context/AppContext";
import axios from "axios";

const Product = ({ id, name, description, price, imageUrl }) => {
  const [quantity, setQuantity] = useState(1);
  const [success, setSuccess] = useState(false);
  const { user } = useAppContext();
  const handleQuantityChange = (event) => {
    const value = event.target.value;
    const newQuantity = value ? Math.max(1, parseInt(value, 10)) : 1;
    setQuantity(newQuantity);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/carts/", {
        userId: user._id,
        products: [
          {
            productId: id,
            quantity: quantity,
          },
        ],
      });
      setSuccess(true);
      console.log("product has been added");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="product">
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>${price}</p>
      <div className="quantity-container">
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </div>
      <button onClick={handleSubmit}>Add to Cart</button>
    </div>
  );
};

export default Product;
