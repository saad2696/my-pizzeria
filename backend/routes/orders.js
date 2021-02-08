const express = require("express");
const Orders = require("../models/order-model");

const router = express.Router();

//all orders
router.get("/", async (req, res) => {
  try {
    const allOrders = await Orders.find();
    res.json(allOrders);
  } catch (err) {
    res.json({ message: err.message });
  }
});

//specific flavour
router.get("/:orderId", async (req, res) => {
  try {
    const order = await Flavour.findById(req.params.orderId);
    res.json(order);
  } catch (err) {
    res.json({ message: err.message });
  }
});

//add order
router.post("/add", async (req, res) => {
  const order = new Orders({
    item: req.body.item,
    addOns: req.body.addOns,
    additionalNote: req.body.additionalNote,
    total: req.body.total,
  });

  try {
    const savedOrder = await order.save();
    res.json(savedOrder);
  } catch (err) {
    res.json({ message: err.message });
  }
});

//delete orders
router.delete("/delete/:orderId", async (req, res) => {
  try {
    const removedOrder= await Flavour.remove({ _id: req.params.orderId });
    res.json(removedOrder);
  } catch (err) {
    res.json({ message: err.message });
  }
});

//update an order
router.patch("/update/:orderId", async (req, res) => {
  try {
    const updateOrder = await Orders.updateOne(
      { _id: req.params.flavourId },
      { $set: { item: req.body.item,addOns: req.body.addOns,total:req.body.total } },
    );
    res.json(updateOrder);
  } catch (err) {
    res.json({ message: err.message });
  }
});

module.exports = router;
