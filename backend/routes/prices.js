const express = require("express");
const Size = require("../models/size-price-model");

const router = express.Router();

//all Crusts
router.get("/", async (req, res) => {
  try {
    const allSize= await Size.find();
    res.json(allSize);
  } catch (err) {
    res.json({ message: err.message });
  }
});

//specific crust
router.get("/:sizeId", async (req, res) => {
  try {
    const size = await Size.findById(req.params.sizeId);
    res.json(size);
  } catch (err) {
    res.json({ message: err.message });
  }
});

//add crust
router.post("/add", async (req, res) => {
  const size = new Size({
    size: req.body.size,
    price: req.body.price,
  });
  try {
    const savedSize = await size.save();
    res.json(savedSize);
  } catch (err) {
    res.json({ message: err.message });
  }
});

//delete crust
router.delete("/delete/:sizeId", async (req, res) => {
  try {
    const removedSize = await Crust.deleteOne({ crustId: req.params.sizeId });
    res.json(removedSize);
  } catch (err) {
    res.json({ message: err.message });
  }
});

//update crust type
router.patch("/update/:crustId", async (req, res) => {
  try {
    const updateSize= await Size.updateOne(
      { _id: req.params.crustId },
      { $set: { price: req.body.price } },
    );
    res.json(updateSize);
  } catch (err) {
    res.json({ message: err.message });
  }
});

module.exports = router;
