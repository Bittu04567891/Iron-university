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
// //GET ALL
router.get("/", async (req, res) => {
  try {
    const orders = await OrderDetails.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});
//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedOrder = await OrderDetails.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedOrder);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;
