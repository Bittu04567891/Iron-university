import React, { useEffect, useState } from "react";
import "./OrderDetails.css";
import { useAppContext } from "../../Context/AppContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const OrderDetails = () => {
  let total = 0;
  const { user } = useAppContext();
  const [orderData, setOrderData] = useState([]);
  // const [productsArray, setProductsArray] = useState([]);
  const [success, setSuccess] = useState(false);
  const { amount } = useAppContext();
  const { products } = useAppContext();

  const [stripeToken, setStripeToken] = useState(null);
  // const history = useHistory();

  const onToken = (token) => {
    setStripeToken(token);
  };
  const KEY =
    "pk_test_51OYAmnSJY7qu9uFffONpvqAanIeminJIXiglM92Ljmd3Ap3jZMIHCSZmzUTBBtqpqRrwGZXXvndZLG6XApqn4lJB007bd5YRRw";
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
  // useEffect(() => {
  //   const makeRequest = async () => {
  //     try {
  //       const res = await axios.post("/checkout/payment", {
  //         tokenId: stripeToken.id,
  //         amount: amount * 100,
  //       });
  //       console.log(res);
  //       // history.push("/success", { data: res.data });
  //       toast.success(
  //         "Payment Successful!Order details will be notified in mail"
  //       );
  //     } catch (err) {
  //       console.log(err);
  //       toast.error("Payment not successful! Retry Later");
  //     }
  //   };
  //   stripeToken && makeRequest();
  // }, [stripeToken, total]);
  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const response = await axios.get(`/orders/find/${user._id}`);
        setOrderData(response.data);

        // Extract products from each order and flatten the array
        // const extractedProducts = response.data
        //   .map((order) => {
        //     order.products.map((product) => ({
        //       orderId: order._id,
        //       productId: product.productId,
        //       quantity: product.quantity,
        //       title: product.title,
        //       img: product.img,
        //     }));
        //   })
        //   .flat();
        // setProductsArray(extractedProducts);
        console.log("Order Data:", total);
      } catch (error) {
        console.error("Error fetching order data:", error);
      }
    };

    fetchOrderData();
  }, [user._id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your logic to handle form submission, e.g., send data to server

    const res = await axios.post("/ordersDetails/", {
      userId: user._id,
      products: products,
      amount: amount,
      fullName: formData.fullName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      shippingAddress: formData.shippingAddress,
      city: formData.city,
      stateProvince: formData.stateProvince,
      postalCode: formData.postalCode,
      agreeToTerms: formData.agreeToTerms,
    });
    toast.success("Order Placed");
    setSuccess(true);
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

        {!success && (
          <div>
            <button type="submit">Submit</button>
          </div>
        )}
      </form>
      <ToastContainer />
      {success && (
        <div>
          <StripeCheckout
            name="Iron University"
            image="./images/iron-university-logo.jpg"
            billingAddress
            shippingAddress
            description={`Your total is ₹${amount}`}
            amount={amount * 100}
            token={onToken}
            stripeKey={KEY}
          >
            <button>Pay</button>
          </StripeCheckout>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
