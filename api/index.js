const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const cartRoute = require("./routes/cart");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const orderDetailsRoute = require("./routes/orderDetails");
const stripeRoute = require("./routes/stripe");

const cors = require("cors");
app.use(cors());
dotenv.config();

mongoose
  .connect(
    "mongodb+srv://sultanbittu775:bittu@blog-app-cluster.okfkswm.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("DB connection successful");
  })
  .catch((err) => console.log(err));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/carts", cartRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/ordersDetails", orderDetailsRoute);
app.use("/api/checkout", stripeRoute);

app.listen(5000, () => {
  console.log("Backend server running!");
});
