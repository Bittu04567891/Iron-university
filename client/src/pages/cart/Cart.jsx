// Cart.js
import React, { useState } from "react";
import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", price: 49.99, quantity: 2 },
    { id: 2, name: "Product 2", price: 29.99, quantity: 1 },
  ]);

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="cart-container">
      <h1>Your Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <p>{item.name}</p>
            <p>${item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))}
      </div>
      <div className="total">
        <p>Total: ${calculateTotal()}</p>
      </div>
      <div className="payment-section">
        <h2>Payment Information</h2>
        {/* Add payment form or integration here */}
        <p>
          Payment method: <strong>Mock Payment</strong>
        </p>
        <button
          className="pay-button"
          onClick={() => alert("Payment successful!")}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Cart;
