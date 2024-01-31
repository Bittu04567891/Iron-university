const mongoose = require("mongoose");

const OrderDetailsSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: {
          type: String,
        },
        title: {
          type: String,
        },
        img: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount: { type: Number, required: false },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    shippingAddress: { type: String, required: true },
    city: { type: String, required: true },
    stateProvince: { type: String, required: true },
    postalCode: { type: String, required: true },
    agreeToTerms: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("OrderDetails", OrderDetailsSchema);
