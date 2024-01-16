import React, { useEffect, useState } from "react";
import "./Cart.css";
import { useAppContext } from "../../Context/AppContext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StripeCheckout from "react-stripe-checkout";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom/cjs/react-router-dom";

// const KEY = process.env.REACT_APP_STRIPE;
const KEY =
  "pk_test_51OYAmnSJY7qu9uFffONpvqAanIeminJIXiglM92Ljmd3Ap3jZMIHCSZmzUTBBtqpqRrwGZXXvndZLG6XApqn4lJB007bd5YRRw";
const Cart = () => {
  const { user } = useAppContext();
  const [cartItems, setCartItems] = useState([]);
  const [address, setAddress] = useState("abc");
  const [mobile, setMobile] = useState("8949325668");
  const [success, setSuccess] = useState(false);
  const [stripeToken, setStripeToken] = useState(null);
  // const history = useHistory();

  const onToken = (token) => {
    setStripeToken(token);
  };

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

      const productsArray = response.data.map((product) => ({
        id: product.productId,
        quantity: product.quantity,
      }));

      console.log(productsArray);
      await axios.post("/orders/", {
        userId: user._id,
        products: productsArray,
        amount: calculateTotal(),
        mobile: mobile,
        address: address,
      });
      setSuccess(true);
      toast.success("Order has been placed!");
    } catch (err) {
      toast.error("Error occurred!");
      console.log(err);
    }
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: calculateTotal() * 100,
        });
        console.log(res);
        // history.push("/success", { data: res.data });
        toast.success(
          "Payment Successful!Order details will be notified in mail"
        );
      } catch (err) {
        console.log(err);
        toast.error("Payment not successful! Retry Later");
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, calculateTotal()]);
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
        {/* <p>
          Address:{" "}
          <input
            type="string"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={{ width: "60%" }}
          />
        </p>
        <p>
          Mobile No:+91{" "}
          <input
            type="text"
            value={mobile}
            onChange={(e) => {
              // Allow only digits and limit the length to 10
              const sanitizedInput = e.target.value
                .replace(/\D/g, "")
                .slice(0, 10);
              setMobile(sanitizedInput);
            }}
            style={{ width: "40%" }}
          />
        </p> */}

        {!success && (
          <div>
            <span>
              <Link to="/Iron-university/orderdetails">
                <button>Order Details</button>
              </Link>
              <button
                className="pay-button"
                // onClick={() => toast.success("Payment successful!")}
                onClick={handleOrder}
              >
                Place Order
              </button>
            </span>
          </div>
        )}
        {success && (
          <div>
            <StripeCheckout
              name="Prism Cart"
              image="./images/iron-university-logo.jpg"
              billingAddress
              shippingAddress
              description={`Your total is ₹${calculateTotal()}`}
              amount={calculateTotal() * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <button>Pay</button>
            </StripeCheckout>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Cart;
