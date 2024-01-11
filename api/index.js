const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const cartRoute = require("./routes/cart");
const productRoute = require("./routes/product");
mongoose
  .connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  })
  .then(() => {
    console.log("DB connection successful");
  })
  .catch((err) => console.log(err));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/carts", cartRoute);
app.use("/api/products", productRoute);

app.listen(5000, () => {
  console.log("Backend server running!");
});
