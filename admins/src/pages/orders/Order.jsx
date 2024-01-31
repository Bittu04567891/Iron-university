import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Order.css";

const Order = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/ordersDetails/");
        setData(res.data);
      } catch (err) {
        console.error("Error fetching order details:", err);
      }
    };

    fetchData();
  }, []);
  const handleStatusToggle = async (orderId, currentStatus) => {
    try {
      const newStatus =
        currentStatus === "Pending"
          ? "Dispatched"
          : currentStatus === "Dispatched"
          ? "Delivered"
          : "Pending";

      await axios.put(`/ordersDetails/${orderId}`, {
        status: newStatus,
      });

      // Update the local state with the modified order
      setData((prevData) =>
        prevData.map((order) =>
          order._id === orderId ? { ...order, status: newStatus } : order
        )
      );
    } catch (err) {
      console.error("Error updating order status:", err);
    }
  };

  return (
    <div>
      <h1>Welcome to Iron University[Admin Dashboard]</h1>
      <h2>Order Details</h2>

      <ul>
        {data.map((order) => (
          <li key={order._id}>
            <strong>Order ID:</strong> {order._id}
            <br />
            <strong>Name:</strong> {order.fullName}
            <br />
            <strong>Email:</strong> {order.email}
            <br />
            <strong>Mobile:</strong> {order.phoneNumber}
            <br />
            <strong>Date:</strong> {order.createdAt}
            <br />
            <strong>Amount:</strong>₹ {order.amount}
            <br />
            <strong>Address:</strong> {order.shippingAddress}, {order.city},{" "}
            {order.stateProvince} - {order.postalCode}
            <br />
            <strong>Products:</strong>
            <ul>
              {order.products.map((product) => (
                <li key={product._id}>
                  <strong>{product.title}</strong>
                  <br />
                  <strong>Quantity:</strong> {product.quantity}
                  <br />
                  <img
                    src={product.img}
                    alt={product.title}
                    width="50"
                    height="50"
                  />
                </li>
              ))}
            </ul>
            <strong>Order Status:</strong>{" "}
            <li className={order.status.toLowerCase()}>{order.status}</li>
            <button
              onClick={() => handleStatusToggle(order._id, order.status)}
              className={order.status.toLowerCase()}
            >
              Toggle Order Status
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Order;
