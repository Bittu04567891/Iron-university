const OrderDetails = require("../models/OrderDetails");

const router = require("express").Router();
//CREATE
router.post("/", async (req, res) => {
  const newOrder = new OrderDetails(req.body);

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
