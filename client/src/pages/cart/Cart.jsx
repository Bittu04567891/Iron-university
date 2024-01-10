// Cart.js
import React, { useEffect, useState } from "react";
import "./Cart.css";
import { useAppContext } from "../../Context/AppContext";
import axios from "axios";

const Cart = () => {
  const { user } = useAppContext();
  const [cartItems, setCartItems] = useState([]);
  // [
  //   {
  //     id: 1,
  //     name: "Product 1",
  //     price: 49.99,
  //     quantity: 2,
  //     imageUrl: "product1.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "Product 2",
  //     price: 29.99,
  //     quantity: 1,
  //     imageUrl: "product2.jpg",
  //   },
  // ]

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const updateQuantity = (itemId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(1, newQuantity) }
          : item
      )
    );
  };

  const deleteProduct = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };
  useEffect(() => {
    // Fetch cart data when the component mounts
    const fetchCart = async () => {
      try {
        const res = await axios.get(`/carts/find/${user._id}`);

        console.log(res.data);
        setCartItems(res.data);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, [user._id]);
  return (
    <div className="cart-container">
      <h1>Your Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.imageUrl} alt={item.name} />
            <div>
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>
                Quantity:{" "}
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, parseInt(e.target.value, 10))
                  }
                />
              </p>
            </div>
            <button onClick={() => deleteProduct(item.id)}>Delete</button>
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
