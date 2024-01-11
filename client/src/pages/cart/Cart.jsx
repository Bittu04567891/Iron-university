import React, { useEffect, useState } from "react";
import "./Cart.css";
import { useAppContext } from "../../Context/AppContext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const { user } = useAppContext();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await axios.get(`/carts/find/${user._id}`);
        const cartData = res.data;

        const productDetailsPromises = cartData.map(async (cartItem) => {
          const productResponse = await axios.get(
            `/products/find/${cartItem.productId}`
          );
          return { ...cartItem, productDetails: productResponse.data };
        });

        const productDetails = await Promise.all(productDetailsPromises);

        setCartItems(productDetails);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, [user._id]);

  const calculateTotal = () => {
    return cartItems
      .reduce(
        (total, item) => total + item.productDetails.price * item.quantity,
        0
      )
      .toFixed(2);
  };

  const updateQuantity = async (itemId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === itemId
          ? { ...item, quantity: Math.max(1, newQuantity) }
          : item
      )
    );
    try {
      await axios.put(`/carts/${itemId}`, {
        quantity: newQuantity,
      });
      toast.success("Quantity updated successfully");
    } catch (err) {
      console.error(err);
      toast.error("Error updating quantity");
    }
  };

  const deleteProduct = async (itemId) => {
    try {
      await axios.delete(`/carts/${itemId}`);
      setCartItems((prevItems) =>
        prevItems.filter((item) => item._id !== itemId)
      );
      toast.success("Product deleted successfully");
    } catch (err) {
      console.error(err);
      toast.error("Error deleting product");
    }
  };

  return (
    <div className="cart-container">
      <h1>Your Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item._id} className="cart-item">
            {item.productDetails && (
              <>
                <img
                  src={item.productDetails.img}
                  alt={item.productDetails.title}
                />
                <div>
                  <p>{item.productDetails.title}</p>
                  <p>₹{item.productDetails.price}</p>
                  <p>
                    Quantity:{" "}
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item._id, parseInt(e.target.value, 10))
                      }
                    />
                  </p>
                </div>
                <button onClick={() => deleteProduct(item._id)}>Delete</button>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="total">
        <p>Total: ₹{calculateTotal()}</p>
      </div>
      <div className="payment-section">
        <h2>Payment Information</h2>
        <p>
          Payment method: <strong>Mock Payment</strong>
        </p>
        <button
          className="pay-button"
          onClick={() => toast.success("Payment successful!")}
        >
          Pay Now
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Cart;
