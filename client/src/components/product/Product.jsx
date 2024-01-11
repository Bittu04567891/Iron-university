import React, { useState } from "react";
import "./Product.css";
import { useAppContext } from "../../Context/AppContext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = ({ _id, title, desc, price, img }) => {
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
      // Fetch the user's cart
      const cartResponse = await axios.get(`/carts/find/${user._id}`);
      const existingCart = cartResponse.data;

      if (existingCart && Array.isArray(existingCart)) {
        // Check if any product in the cart has the same productId
        const productExists = existingCart.some(
          (product) => product.productId === _id
        );
        if (productExists) {
          console.log("Product already exists in the cart");
          toast.warning("Product already exists in the cart");
          return;
        }
      }

      // If the product doesn't exist, add it to the cart
      const res = await axios.post("/carts/", {
        userId: user._id,
        productId: _id,
        quantity: quantity,
      });

      setSuccess(true);
      console.log("Product has been added to the cart");
      toast.success("Product added to the cart");
    } catch (err) {
      console.error(err);
      // Handle the error, e.g., show an error message to the user
      toast.error("Error adding product to the cart");
    }
  };

  return (
    <div className="product">
      <img src={img} alt={img} />
      <h2>{title}</h2>
      <p>{desc}</p>
      <p>₹{price}</p>
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
      {/* Add the ToastContainer at the top level */}
      <ToastContainer />
    </div>
  );
};

export default Product;
