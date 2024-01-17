import React, { useState } from "react";
import "./OrderDetails.css";

const OrderDetails = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    shippingAddress: "",

    city: "",
    stateProvince: "",
    postalCode: "",
    agreeToTerms: false,

    // transactionId: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission, e.g., send data to server
    console.log("Form submitted:", formData);
  };

  return (
    <div className="order-details-container">
      <h2>Product Order Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Personal Information */}
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        {/* shipping Information */}
        <div>
          <h3>Shipping Information</h3>

          <div>
            <label htmlFor="shippingAddress">Shipping Address</label>
            <input
              type="text"
              id="shippingAddress"
              name="shippingAddress"
              value={formData.shippingAddress}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="stateProvince">State</label>
            <input
              type="text"
              id="stateProvince"
              name="stateProvince"
              value={formData.stateProvince}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="postalCode">Postal Code</label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Terms and Conditions */}
        <div>
          <label>
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              required
            />
            I agree to the terms and conditions of this order.
          </label>
        </div>

        {/* Transaction ID */}
        {/* <div>
          <label htmlFor="transactionId">Transaction ID</label>
          <input
            type="text"
            id="transactionId"
            name="transactionId"
            value={formData.transactionId}
            onChange={handleChange}
            required
          />
        </div> */}

        {/* Submit Button */}
        <div>
          <button type="submit">Place Order</button>
        </div>
      </form>
    </div>
  );
};

export default OrderDetails;
