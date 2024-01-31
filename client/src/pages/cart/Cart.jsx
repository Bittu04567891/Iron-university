import React, { useEffect, useState } from "react";
import "./Cart.css";
import { useAppContext } from "../../Context/AppContext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Link } from "react-router-dom";

// import { useHistory } from "react-router-dom/cjs/react-router-dom";

// const KEY = process.env.REACT_APP_STRIPE;

const Cart = () => {
  const { user } = useAppContext();

  const [cartItems, setCartItems] = useState([]);
  const [success, setSuccess] = useState(false);
  const { setAmount } = useAppContext();
  const { setProducts } = useAppContext();

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
      // toast.success("Quantity updated successfully");
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

  const handleOrder = async (e) => {
    e.preventDefault();

    if (!user._id) {
      toast.error("Login to place the order");
      return;
    }
    try {
      const response = await axios.get(`/carts/find/${user._id}`);

      const productsArray = cartItems.map((item) => ({
        id: item.productDetails._id, // Assuming _id is the unique identifier for the product
        title: item.productDetails.title,
        quantity: item.quantity,
        img: item.productDetails.img,
      }));
      console.log(productsArray);
      setProducts(productsArray);
      await axios.post("/orders/", {
        userId: user._id,
        products: productsArray,
        amount: calculateTotal(),
      });
      setSuccess(true);
      toast.success("Order has been placed!");
    } catch (err) {
      toast.error("Error occurred!");
      console.log(err);
    }
    setAmount(calculateTotal());
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
      <div className="payment-section"></div>
      <ToastContainer />

      {!success && (
        <div>
          <button
            className="pay-button"
            // onClick={() => toast.success("Payment successful!")}
            onClick={handleOrder}
          >
            Place Order
          </button>
        </div>
      )}
      {success && (
        <div>
          <button>
            <Link to="/Iron-university/orderdetails" style={{ color: "black" }}>
              Fill Order Details
            </Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
